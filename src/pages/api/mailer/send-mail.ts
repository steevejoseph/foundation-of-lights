import { type NextApiResponse, type NextApiRequest } from "next";
import nodemailer from "nodemailer";

// TODO(steevejoseph): Set these in the .env file when we have
// the masjid gmail account
const env = {
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_SECURE: process.env.EMAIL_SECURE,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
  EMAIL_FROM: process.env.EMAIL_FROM,
};

interface SendMailRequest {
  to: string;
  subject: string;
  html: string;
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
    const { to, subject, html } = req.body as SendMailRequest;

    console.log("Attempting to send email to:", to);
    const transporter = nodemailer.createTransport({
      host: env.EMAIL_HOST ?? "",
      port: env.EMAIL_PORT ? parseInt(env.EMAIL_PORT, 10) : 587,
      secure: env.EMAIL_SECURE === "true",
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
      },
    });

    await transporter.verify();
    console.log("Connected to email server");

    const info = await transporter.sendMail({
      from: env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log(`Message sent: ${info.messageId}, info:`, info);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));

    res.status(200).json({ message: "Email sent", messageId: info.messageId });
  } catch (err) {
    const error = err as Error;
    console.error(`Error sending email: ${error}`);
    res.status(500).json({
      error: "Failed to send email",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
