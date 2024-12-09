import { env } from "~/env";
import { type ContactFormData } from "./contact-form";

export const createContactFormEmailHtml = (formData: ContactFormData) => {
  return `
        <h1>New Contact Form Submission</h1>
        <p>Name: ${formData.firstName} ${formData.lastName}</p>
        <p>Email: ${formData.email}</p>
        <p>Message: ${formData.message}</p>
      `;
};

export const sendContactEmail = async (formData: ContactFormData) => {
  const response = await fetch("/api/mailer/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: env.NEXT_PUBLIC_CS_EMAIL,
      cc: formData.email,
      subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
      html: createContactFormEmailHtml(formData),
    }),
  });

  if (!response.ok) {
    const errorData = (await response.json()) as { details: string };
    console.error("Email sending failed:", errorData);
    throw new Error(errorData.details || "Failed to send email");
  }

  return response;
};
