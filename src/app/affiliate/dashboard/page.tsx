"use client";

import AffiliateLinkGenerator from "@/features/affiliate/components/AffiliateLinkGenerator";

export default function AffiliateDashboardPage() {
  // Mock affiliate ID (in real app, this comes from logged-in user profile)
  const affiliateId = "AFF12345";

  // Mock report data (clicks & leads)
  const mockReport = [
    { date: "2025-09-01", clicks: 12, leads: 3 },
    { date: "2025-09-02", clicks: 7, leads: 1 },
    { date: "2025-09-03", clicks: 15, leads: 5 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Affiliate Dashboard</h1>

      {/* Reusable Affiliate Link Generator */}
      <AffiliateLinkGenerator affiliateId={affiliateId} />

      {/* Report Table */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Report</h2>
        <table className="w-full border border-gray-300 rounded">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Clicks</th>
              <th className="p-2 text-left">Leads</th>
            </tr>
          </thead>
          <tbody>
            {mockReport.map((row, idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2">{row.date}</td>
                <td className="p-2">{row.clicks}</td>
                <td className="p-2">{row.leads}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
