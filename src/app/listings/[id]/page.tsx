type ListingPageProps = {
  params: { id: string };
};

export default function ListingPage({ params }: ListingPageProps) {
  return (
    <h1 className="text-2xl font-bold">Listing Details for ID: {params.id}</h1>
  );
}
