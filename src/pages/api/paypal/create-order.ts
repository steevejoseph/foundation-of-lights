import { type NextApiRequest, type NextApiResponse } from "next";

import { getPaypalBaseUrl } from "./constants";
import { getAccessToken } from "./token";
import { getBaseUrl } from "src/utils/api";

const BASE_URL = getBaseUrl();
const PAYPAL_BASE_URL = getPaypalBaseUrl();

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
        return_url: `${BASE_URL}/donation/success`,
        cancel_url: `${BASE_URL}/donation/cancel`,
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
