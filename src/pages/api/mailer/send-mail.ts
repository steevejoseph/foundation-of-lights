import { type NextApiResponse, type NextApiRequest } from "next";
import sgMail from "@sendgrid/mail";
import { env } from "src/env";

// Configure SendGrid with API key

if (!env.NEXT_SENDGRID_INFO_API_KEY) {
  throw new Error(
    "NEXT_SENDGRID_INFO_API_KEY is not set in environment variables",
  );
}
sgMail.setApiKey(env.NEXT_SENDGRID_INFO_API_KEY);

interface SendMailRequest {
  to: string;
  subject: string;
  html: string;
  cc: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { to, subject, html, cc } = req.body as SendMailRequest;

    console.log("Attempting to send email to:", to);

    const msg: sgMail.MailDataRequired = {
      to,
      from: env.NEXT_PUBLIC_INFO_EMAIL,
      cc,
      html,
      subject,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    const error = err as Error;
    console.error(`Error sending email: ${error}`);
    res.status(500).json({
      error: "Failed to send email",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
