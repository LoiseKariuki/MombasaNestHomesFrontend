type ListingPageProps = {
  params: { id: string };
};

export default async function ListingPage({ params }: ListingPageProps) {
  // For now, just show placeholder details
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Listing #{params.id}</h1>
      <p className="mt-2 text-gray-700">
        This is the detailed page for listing <strong>{params.id}</strong>.
      </p>
    </div>
  );
}
