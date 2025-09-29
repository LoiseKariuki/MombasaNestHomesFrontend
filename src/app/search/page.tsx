"use client";

import { useQuery } from "@tanstack/react-query";
import ListingCard from "@/components/ui/ListingCard";
import api from "@/lib/api";
import Button from "@/components/ui/Button";
import Link from "next/link";

// Define a proper type for listings
type Listing = {
  id: string;
  title: string;
  location: string; // e.g. "Nairobi, Kenya"
  price: number;
  image: string;
};

export default function SearchPage() {
  const { data, isLoading, error } = useQuery<Listing[]>({
    queryKey: ["listings"],
    queryFn: async () => {
      try {
        const res = await api.get<Listing[]>("/listings/search");
        return res.data;
      } catch {
        // fallback mock data
        return [
          {
            id: "1",
            title: "Modern Student Apartment",
            location: "Nairobi, Kenya",
            price: 50,
            image: "/mock-images/apt1.jpg",
          },
          {
            id: "2",
            title: "Cozy BNB Room",
            location: "Mombasa, Kenya",
            price: 35,
            image: "/mock-images/apt2.jpg",
          },
        ];
      }
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Search Listings</h1>

      {isLoading && <p>Loading listings...</p>}
      {error && <p>Failed to load listings.</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((listing) => (
          <div key={listing.id} className="space-y-3">
            <ListingCard listing={listing} />

            {/* Instead of modal, navigate to map page */}
            <Link
              href={{
                pathname: `/listings/${listing.id}/map`,
                query: { location: listing.location },
              }}
            >
              <Button variant="primary">Show Location on Map</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
