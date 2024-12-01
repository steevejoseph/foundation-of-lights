// components/DonationForm.tsx
"use client";

import { useState } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { env } from "src/env";

interface OrderResponse {
  id: string;
  status: string;
}

enum DonationPurpose {
  OTHER = "Other",
  ZAKAT = "1) Zakat",
  SADAQAH = "2) Sadaqah",
  FOOD_PANTRY = "3) Food Pantry",
  CONSTRUCTION_FUND = "4) Construction Fund",
}

export default function DonationForm() {
  const [amount, setAmount] = useState("1");
  // TODO(stjoseph): Update this to be a dropdown, and remove the default value
  const [purpose, setPurpose] = useState(DonationPurpose.CONSTRUCTION_FUND);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    } catch (err: unknown) {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      setError(`Failed to process donation: ${err}`);
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
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount (USD)
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter amount"
              min="1"
              step="0.01"
              required
            />
          </div>

          <div>
            <label
              htmlFor="purpose"
              className="block text-sm font-medium text-gray-700"
            >
              Purpose
            </label>
            <input
              type="text"
              id="purpose"
              value={purpose}
              onChange={(e) => {
                const donationString = e.target
                  .value as keyof typeof DonationPurpose;
                setPurpose(DonationPurpose[donationString]);
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="What is this donation for?"
              required
            />
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
