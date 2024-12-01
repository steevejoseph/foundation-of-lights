import { type NextApiRequest, type NextApiResponse } from "next";

import { PAYPAL_BASE_URL } from "./constants";
import { getAccessToken } from "./token";

// TODO(stjoseph): Update this URL in env file,
// Issue URL: https://github.com/steevejoseph/foundation-of-lights/issues/6
// use NEXT_PUBLIC_BASE_URL instead of hardcoding
// Determine the variable name from the env file
const NEXT_PUBLIC_BASE_URL = "localhost:3000";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
    return;
  }

  try {
    const { amount, purpose } = req.body as {
      amount: string;
      purpose: string;
    };

    console.log("amount", amount);
    const accessToken = await getAccessToken();

    const order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: amount,
          },
          description: purpose,
          custom_id: purpose,
        },
      ],
      application_context: {
        brand_name: "Foundation of Lights",
        landing_page: "BILLING",
        user_action: "PAY_NOW",
        return_url: `${NEXT_PUBLIC_BASE_URL}/donation/success`,
        cancel_url: `${NEXT_PUBLIC_BASE_URL}/donation/cancel`,
      },
    };

    const response = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(order),
    });

    const data: unknown = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error creating PayPal order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
}