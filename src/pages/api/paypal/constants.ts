import { env } from "~/env";

export const getPaypalBaseUrl = () => {
  return env.NODE_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
};

// export const getPaypalClientId = () => {
//   return env.NODE_ENV === "production"
//     ? env.NEXT_PUBLIC_PAYPAL_PROD_CLIENT_ID
//     : env.NEXT_PUBLIC_PAYPAL_DEV_CLIENT_ID;
// };

// export const getPaypalClientSecret = () => {
//   return env.NODE_ENV === "production"
//     ? env.NEXT_PAYPAL_PROD_CLIENT_SECRET
//     : env.NEXT_PAYPAL_DEV_CLIENT_SECRET;
// };
