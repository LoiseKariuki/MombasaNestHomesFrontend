"use client";

import GalleryUploader from "@/components/GalleryUploader";
import AvailabilityCalendar from "@/features/listings/components/AvailabilityCalendar";

export default function HostPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Host Dashboard</h1>

      {/* Gallery uploader section */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Upload Gallery</h2>
        <GalleryUploader />
      </section>

      {/* Availability calendar section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Manage Availability</h2>
        <AvailabilityCalendar />
      </section>
    </div>
  );
}
