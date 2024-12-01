export const PAYPAL_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

// export const PAYPAL_BASE_URL = "https://api-m.sandbox.paypal.com";
