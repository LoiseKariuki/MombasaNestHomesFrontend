type BookingPageProps = {
  params: { id: string };
};

export default function BookingPage({ params }: BookingPageProps) {
  return (
    <h1 className="text-2xl font-bold">Booking Page for ID: {params.id}</h1>
  );
}
