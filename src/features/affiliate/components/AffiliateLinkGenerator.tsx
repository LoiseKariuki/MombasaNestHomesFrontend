"use client";

import { useState } from "react";

interface AffiliateLinkGeneratorProps {
  affiliateId: string; // will be passed in from dashboard
}

export default function AffiliateLinkGenerator({
  affiliateId,
}: AffiliateLinkGeneratorProps) {
  // Build referral link using env var + affiliate ID
  const referralLink = `${process.env.NEXT_PUBLIC_APP_URL}/?ref=${affiliateId}`;

  // For copy-to-clipboard confirmation
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Your Referral Link</h2>
      <div className="bg-gray-100 p-3 rounded flex items-center justify-between">
        <code className="text-sm">{referralLink}</code>
        <button
          onClick={handleCopy}
          className="ml-4 bg-blue-600 text-white px-3 py-1 rounded"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
