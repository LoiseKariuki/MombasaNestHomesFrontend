"use client";

import { useQuery } from "@tanstack/react-query";
import ListingCard from "@/components/ui/ListingCard";
import api from "@/lib/api";

// Define a proper type for listings
type Listing = {
  id: string;
  title: string;
  location: string;
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

  if (isLoading) return <p>Loading listings...</p>;
  if (error) return <p>Failed to load listings.</p>;

  return (
    <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
}
