"use client";

import { useState } from "react";

export default function BulkUploadPage() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return alert("Select a file first!");
    alert(`Mock upload: ${file.name}`);
    // later: send to API for parsing
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bulk Upload (CSV)</h1>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        className="mb-4"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload
      </button>
    </div>
  );
}
