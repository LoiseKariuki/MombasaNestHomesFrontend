"use client";

import Link from "next/link";
import Image from "next/image";

type Listing = {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
};

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="rounded-xl border shadow-sm overflow-hidden bg-white hover:shadow-md transition">
      <div className="relative w-full h-48">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold">{listing.title}</h2>
        <p className="text-sm text-gray-600">{listing.location}</p>
        <p className="text-blue-600 font-semibold mt-2">
          ${listing.price}/night
        </p>
        <Link
          href={`/listings/${listing.id}`}
          className="inline-block mt-3 text-sm px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
