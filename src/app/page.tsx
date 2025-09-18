"use client"; // needed if you use hooks in Next.js App Router
import Image from "next/image";
import { useEffect } from "react";
import api from "@/lib/api";

export default function Home() {
  useEffect(() => {
    async function testApi() {
      try {
        const res = await api.get("/test"); // try hitting /test
        console.log("API response:", res.data);
      } catch (err) {
        console.error("API error:", err);
      }
    }

    testApi();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 gap-12 bg-gray-50 dark:bg-gray-900">
      <Image
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
        className="dark:invert"
      />

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
        Welcome to Your Student Housing Platform 🚀
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
        Manage student accommodation, guest bookings, and property listings —
        all in one place. Start building your dream system today.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/listings"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          View Listings
        </a>
        <a
          href="/about"
          className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Learn More
        </a>
      </div>
    </main>
  );
}
