"use client";

import { useState } from "react";
import PaymentMethodDialog from "./PaymentMethodDialog";

const steps = ["Details", "Payment", "Confirmation"];

export default function BookingStepper({ listingId }: { listingId: string }) {
  const [activeStep, setActiveStep] = useState(0);
  const [bookingId, setBookingId] = useState<string | null>(null);

  const handleNext = async () => {
    if (activeStep === 0) {
      // Normally: POST /bookings
      const mockBooking = { id: "bk_123", status: "draft" };
      setBookingId(mockBooking.id);
      setActiveStep(1);
    } else if (activeStep === 1) {
      // Payment handled inside PaymentMethodDialog
      setActiveStep(2);
    }
  };

  return (
    <div className="p-6 border rounded-xl bg-white shadow-md">
      <div className="flex justify-between mb-4">
        {steps.map((label, idx) => (
          <div
            key={label}
            className={`flex-1 text-center ${
              idx === activeStep ? "font-bold text-blue-600" : "text-gray-500"
            }`}
          >
            {label}
          </div>
        ))}
      </div>

      {activeStep === 0 && (
        <div>
          <p>
            Fill in your booking details for listing{" "}
            <strong>{listingId}</strong>.
          </p>
          <button
            onClick={handleNext}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Continue to Payment
          </button>
        </div>
      )}

      {activeStep === 1 && bookingId && (
        <PaymentMethodDialog
          bookingId={bookingId}
          onPaymentSuccess={() => setActiveStep(2)}
        />
      )}

      {activeStep === 2 && (
        <div className="text-center">
          <h2 className="text-2xl font-bold">Booking Confirmed 🎉</h2>
          <p>Your booking #{bookingId} is complete.</p>
        </div>
      )}
    </div>
  );
}
