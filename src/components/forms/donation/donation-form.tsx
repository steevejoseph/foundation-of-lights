"use client";

import { useState, useEffect, useRef } from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import { type OrderResponse } from "./types";
import { env } from "~/env";

enum DonationPurpose {
  BLANK = "",
  ZAKAT = "1) Zakat",
  SADAQAH = "2) General Donation / Sadaqah",
  FOOD_PANTRY = "3) Food Pantry",
  CONSTRUCTION_FUND = "4) Construction Fund",
  OTHER = "Other (please specify in the note)",
}

export default function DonationForm() {
  const [amount, setAmount] = useState("1");
  const [purpose, setPurpose] = useState(DonationPurpose.BLANK);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const router = useRouter();
  const amountRef = useRef(amount);
  const purposeRef = useRef(purpose);

  useEffect(() => {
    amountRef.current = amount;
  }, [amount]);

  useEffect(() => {
    purposeRef.current = purpose;
  }, [purpose]);

  const createOrder = async () => {
    const currentAmount = amountRef.current;
    const currentPurpose = purposeRef.current;

    console.log("State values at createOrder:", {
      amount: currentAmount,
      purpose: currentPurpose,
      typeofAmount: typeof currentAmount,
      typeofPurpose: typeof currentPurpose,
    });

    const orderDetails = {
      amount: currentAmount,
      purpose: currentPurpose,
    };

    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderDetails),
      });

      const data = (await response.json()) as { id: string };
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
      await router.push(
        `/donate/success?transactionId=${orderData.id}&status=${orderData.status}&payer=${encodeURIComponent(JSON.stringify(orderData.payer))}`,
      );
    } catch (err) {
      const error = err as Error;
      setError(`Failed to process donation: ${error.message}`);
      await router.push(
        `/donate/error?error=${encodeURIComponent(JSON.stringify(err))}`,
      );
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
              disabled={!amount || !purpose || loading}
              style={{ layout: "vertical" }}
            />
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  );
}
