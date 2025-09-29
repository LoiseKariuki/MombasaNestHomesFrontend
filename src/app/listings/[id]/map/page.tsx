"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import OpenFreeMap from "@/components/Map/OpenFreeMap";
import api from "@/lib/api";

type Listing = {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
};

export default function ListingMapPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const {
    data: listing,
    isLoading,
    error,
  } = useQuery<Listing>({
    queryKey: ["listing", params.id],
    queryFn: async () => {
      try {
        const res = await api.get<Listing>(`/listings/${params.id}`);
        return res.data;
      } catch {
        // fallback mock
        return {
          id: params.id,
          title: "Mock Listing",
          location: "Nairobi, Kenya",
          price: 50,
          image: "/mock-images/apt1.jpg",
        };
      }
    },
  });

  if (isLoading) return <p className="p-6">Loading map...</p>;
  if (error) return <p className="p-6">Failed to load listing.</p>;

  return (
    <div className="p-6 space-y-4">
      {/* Navbar row with title + close button */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{listing?.title}</h1>
        <button
          onClick={() => router.push("/search")}
          className="text-gray-600 hover:text-gray-900 text-xl font-bold"
          aria-label="Close map and return to search"
        >
          ✕
        </button>
      </div>

      <p className="text-gray-600">{listing?.location}</p>

      <div className="w-full h-[600px] rounded-lg shadow">
        <OpenFreeMap searchQuery={listing?.location} />
      </div>
    </div>
  );
}
