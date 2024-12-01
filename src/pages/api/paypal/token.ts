import { env } from "~/env";
import { getPaypalBaseUrl } from "./constants";

import { type NextApiRequest, type NextApiResponse } from "next";

const PAYPAL_CLIENT_ID = env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
const PAYPAL_CLIENT_SECRET = env.NEXT_PAYPAL_CLIENT_SECRET;
const PAYPAL_BASE_URL = getPaypalBaseUrl();

interface AccessTokenResponse {
  access_token: string;
  scope: string;
  token_type: string;
  app_id: string;
  expires_in: number;
  nonce: string;
}

export async function getAccessToken(): Promise<string> {
  const auth = Buffer.from(
    `${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`,
  ).toString("base64");
  const response = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
    method: "POST",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = (await response.json()) as AccessTokenResponse;
  return data.access_token;
}

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const accessToken = await getAccessToken();
    res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Error getting PayPal access token:", error);
    res.status(500).json({ error: "Failed to get access token" });
  }
}
