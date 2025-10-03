"use client";

import { useState } from "react";

export default function BedAllocationPage() {
  const [rooms, setRooms] = useState([
    { id: "A1", bed: "Free" },
    { id: "A2", bed: "Occupied" },
    { id: "B1", bed: "Free" },
  ]);

  const allocate = (id: string) => {
    setRooms((prev) =>
      prev.map((r) => (r.id === id ? { ...r, bed: "Occupied" } : r)),
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bed Allocation</h1>
      <ul className="space-y-2">
        {rooms.map((r) => (
          <li
            key={r.id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <span>
              Room {r.id} – {r.bed}
            </span>
            {r.bed === "Free" && (
              <button
                onClick={() => allocate(r.id)}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Allocate
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
