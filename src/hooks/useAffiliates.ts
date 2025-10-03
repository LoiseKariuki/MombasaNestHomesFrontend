"use client";

import { useEffect } from "react";

export function useAffiliateTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const url = new URL(window.location.href);
    const ref = url.searchParams.get("ref");

    if (ref) {
      // Save to localStorage so it persists across pages
      localStorage.setItem("affiliate_ref", ref);

      // (Optional) Send mock tracking event
      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/affiliate/track`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ref, url: window.location.pathname }),
      }).catch(() => {
        // ignore if backend isn't ready
      });
    }
  }, []);
}
