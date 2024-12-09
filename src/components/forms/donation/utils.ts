import { type OrderResponse } from "./types";

export const createDonationEmailHtml = (
  orderID: string,
  orderAmount: string,
) => {
  return `
        <h1>Donation Receipt for Foundation of Lights</h1>
        <p>Paypal Transaction ID: ${orderID}</p>
        <p>Amount: $${orderAmount}</p>
        <p>Thank you for your donation!</p>
      `;
};

export const sendDonationReceiptEmail = async (orderData: OrderResponse) => {
  const response = await fetch("/api/mailer/send-mail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: orderData.payer.email_address,
      subject: "Donation Receipt",
      html: createDonationEmailHtml(
        orderData.id,
        orderData.purchase_units[0]?.payments?.captures[0]?.amount.value ?? "",
      ),
    }),
  });

  if (!response.ok) {
    const errorData = (await response.json()) as { details: string };
    console.error("Email sending failed:", errorData);
    throw new Error(errorData.details || "Failed to send email");
  }
};
