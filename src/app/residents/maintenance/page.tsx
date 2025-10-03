"use client";

import { useState } from "react";

type Ticket = {
  id: number;
  subject: string;
  status: "open" | "closed";
};

export default function ResidentMaintenancePage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    if (!subject.trim()) return;
    const newTicket = { id: Date.now(), subject, status: "open" as const };
    setTickets([...tickets, newTicket]);
    setSubject("");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Maintenance Tickets</h1>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Describe the issue..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>

      <h2 className="text-lg font-semibold mb-2">Your Tickets</h2>
      <ul className="space-y-2">
        {tickets.map((t) => (
          <li
            key={t.id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <span>{t.subject}</span>
            <span className="text-sm text-gray-500">{t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
