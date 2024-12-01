import { type NextApiRequest, type NextApiResponse } from "next";

import { getPaypalBaseUrl } from "./constants";
import { getAccessToken } from "./token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: `Method ${req.method} not allowed` });
    return;
  }

  try {
    const { orderID } = req.body as { orderID: string };
    const accessToken = await getAccessToken();

    const response = await fetch(
      `${getPaypalBaseUrl()}/v2/checkout/orders/${orderID}/capture`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    const data: unknown = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error capturing PayPal order:", error);
    res.status(500).json({ error: "Failed to capture order" });
  }
}
