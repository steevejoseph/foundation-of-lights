import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXT_PAYPAL_CLIENT_SECRET: z.string(),
    NEXT_SENDGRID_INFO_API_KEY: z.string(),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string(),
    NEXT_PUBLIC_GOOGLE_MAPS_API_MAP_ID: z.string(),
    NEXT_PUBLIC_PAYPAL_URL: z.string(),
    NEXT_PUBLIC_GOOGLE_CALENDAR_URL: z.string(),

    NEXT_PUBLIC_MEMBERSHIP_FORM_URL: z.string(),
    NEXT_PUBLIC_ZAKAT_FORM_URL: z.string(),
    NEXT_PUBLIC_PAYPAL_CLIENT_ID: z.string(),
    NEXT_PUBLIC_INFO_EMAIL: z.string(),
    NEXT_PUBLIC_CS_EMAIL: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

    NEXT_PUBLIC_GOOGLE_MAPS_API_MAP_ID:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_MAP_ID,

    NEXT_PUBLIC_PAYPAL_URL: process.env.NEXT_PUBLIC_PAYPAL_URL,

    NEXT_PUBLIC_GOOGLE_CALENDAR_URL:
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL,
    NEXT_PUBLIC_MEMBERSHIP_FORM_URL:
      process.env.NEXT_PUBLIC_MEMBERSHIP_FORM_URL,
    NEXT_PUBLIC_ZAKAT_FORM_URL: process.env.NEXT_PUBLIC_ZAKAT_FORM_URL,

    NEXT_PUBLIC_PAYPAL_CLIENT_ID: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
    NEXT_PAYPAL_CLIENT_SECRET: process.env.NEXT_PAYPAL_CLIENT_SECRET,
    NEXT_SENDGRID_INFO_API_KEY: process.env.NEXT_SENDGRID_INFO_API_KEY,
    NEXT_PUBLIC_INFO_EMAIL: process.env.NEXT_PUBLIC_INFO_EMAIL,
    NEXT_PUBLIC_CS_EMAIL: process.env.NEXT_PUBLIC_CS_EMAIL,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
