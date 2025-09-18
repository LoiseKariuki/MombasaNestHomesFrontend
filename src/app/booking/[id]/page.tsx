import BookingStepper from "@/components/BookingStepper";

type BookingPageProps = {
  params: { id: string };
};

export default function BookingPage({ params }: BookingPageProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Booking for Listing #{params.id}
      </h1>
      <BookingStepper listingId={params.id} />
    </div>
  );
}
