"use client";

import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { env } from "src/env";
import { useRouter } from "next/router";
import { type OrderResponse } from "./types";

enum DonationPurpose {
  BLANK = "",
  ZAKAT = "1) Zakat",
  SADAQAH = "2) General Donation / Sadaqah",
  FOOD_PANTRY = "3) Food Pantry",
  CONSTRUCTION_FUND = "4) Construction Fund",
  OTHER = "Other (please specify in the note)",
}

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

const sendDonationReceiptEmail = async (orderData: OrderResponse) => {
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
    throw new Error(errorData.details || "Failed to send email");
  }
};

export default function DonationForm() {
  const [amount, setAmount] = useState("1");
  const [purpose, setPurpose] = useState(DonationPurpose.BLANK);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const router = useRouter();

  const createOrder = async () => {
    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount,
          purpose,
        }),
      });

      const data = (await response.json()) as {
        id: string;
      };
      return data.id;
    } catch (err) {
      setError("Failed to create order");
      throw err;
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    setLoading(true);
    try {
      const response = await fetch("/api/paypal/capture-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      });

      const orderData = (await response.json()) as OrderResponse;
      // Handle successful donation (e.g., show success message, redirect, etc.)

      console.log("Order data:", orderData);
      await router.push({
        pathname: "/donate/success",
        query: {
          transactionId: orderData.id,
          status: orderData.status,
          payer: JSON.stringify(orderData.payer),
        },
      });
    } catch (err: unknown) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      setError(`Failed to process donation: ${err}`);

      await router.push({
        pathname: "/donate/error",
        query: {
          error: JSON.stringify(err),
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}
    >
      <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-6 text-2xl font-bold">Make a Donation</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label
              htmlFor="amount"
              className="w-24 text-left text-sm font-medium text-gray-700"
            >
              Amount (USD)
            </label>
            <div className="relative flex-1">
              <span className="absolute left-3 top-[50%] -translate-y-[40%] text-gray-500">
                $
              </span>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 pl-6 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter amount"
                min="1"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="purpose"
              className="w-24 text-left text-sm font-medium text-gray-700"
            >
              Purpose
            </label>
            <div className="flex-1">
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value as DonationPurpose)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                {Object.values(DonationPurpose).map((value) => (
                  <option key={value} value={value}>
                    {value || "Select purpose"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label
              htmlFor="note"
              className="w-24 text-left text-sm font-medium text-gray-700"
            >
              Note
            </label>
            <div className="flex-1">
              <input
                type="text"
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Optional message"
              />
            </div>
          </div>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="pt-4">
            <PayPalButtons
              createOrder={createOrder}
              onApprove={onApprove}
              disabled={loading || !amount || !purpose}
            />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
