"use client";

import { useState, useEffect } from "react";

type Ticket = {
  id: number;
  subject: string;
  status: "open" | "closed";
};

export default function HostTicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Mock fetching resident tickets
  useEffect(() => {
    setTickets([
      { id: 1, subject: "Leaky faucet in Room 2B", status: "open" },
      { id: 2, subject: "Broken light in hall", status: "open" },
    ]);
  }, []);

  const markClosed = (id: number) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: "closed" } : t)),
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Host Ticket Queue</h1>
      <ul className="space-y-2">
        {tickets.map((t) => (
          <li
            key={t.id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <span>
              {t.subject} – <strong>{t.status}</strong>
            </span>
            {t.status === "open" && (
              <button
                onClick={() => markClosed(t.id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Resolve
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
