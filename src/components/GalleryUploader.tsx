"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

type UploadedFile = {
  id: string;
  url: string;
  progress: number;
  status: "uploading" | "done" | "error";
};

export default function GalleryUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);

  const onDrop = async (acceptedFiles: File[]) => {
    for (const file of acceptedFiles) {
      const id = Math.random().toString(36).substring(7);
      const newFile: UploadedFile = {
        id,
        url: URL.createObjectURL(file),
        progress: 0,
        status: "uploading",
      };
      setFiles((prev) => [...prev, newFile]);

      try {
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post("/api/upload", formData, {
          onUploadProgress: (e) => {
            const prog = Math.round((e.loaded * 100) / (e.total || 1));
            setFiles((prev) =>
              prev.map((f) => (f.id === id ? { ...f, progress: prog } : f)),
            );
          },
        });

        setFiles((prev) =>
          prev.map((f) =>
            f.id === id ? { ...f, status: "done", url: res.data.url } : f,
          ),
        );
      } catch (err) {
        setFiles((prev) =>
          prev.map((f) => (f.id === id ? { ...f, status: "error" } : f)),
        );
      }
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="border border-dashed p-6 rounded-lg">
      <div {...getRootProps()} className="cursor-pointer text-center p-4">
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag & drop files here, or click to upload
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {files.map((f) => (
          <div key={f.id} className="relative">
            <img
              src={f.url}
              alt="preview"
              className="w-full h-32 object-cover rounded"
            />

            {/* Remove button */}
            <button
              onClick={() => removeFile(f.id)}
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded"
            >
              ✕
            </button>

            {f.status === "uploading" && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white">
                {f.progress}%
              </div>
            )}
            {f.status === "error" && (
              <div className="absolute inset-0 bg-red-500/70 flex items-center justify-center text-white">
                Error
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
