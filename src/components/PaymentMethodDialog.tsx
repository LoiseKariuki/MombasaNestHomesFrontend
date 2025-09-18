"use client";

import { useState } from "react";

export default function PaymentMethodDialog({
  bookingId,
  onPaymentSuccess,
}: {
  bookingId: string;
  onPaymentSuccess: () => void;
}) {
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");

  const handlePayment = async (method: string) => {
    setStatus("pending");

    // Simulate API call for payment
    setTimeout(() => {
      if (method === "momo") {
        setStatus("success");
        onPaymentSuccess();
      } else {
        setStatus("error");
      }
    }, 2000);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold mb-2">Choose Payment Method</h3>
      <div className="flex gap-3">
        <button
          onClick={() => handlePayment("momo")}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          Mobile Money
        </button>
        <button
          onClick={() => handlePayment("paypal")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          PayPal
        </button>
        <button
          onClick={() => handlePayment("card")}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg"
        >
          Card
        </button>
      </div>

      {status === "pending" && (
        <p className="mt-4 text-yellow-600">Processing payment...</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Payment failed. Please try again.</p>
      )}
    </div>
  );
}
