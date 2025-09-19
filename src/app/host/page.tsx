"use client";

import GalleryUploader from "@/components/GalleryUploader";

export default function HostPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Upload Gallery</h1>
      <GalleryUploader />
    </div>
  );
}
