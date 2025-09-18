export const hotels = [
  {
    id: "hotel1",
    name: "Seaside BnB",
    type: "bnb",
    rooms: [
      {
        id: "h1r1",
        title: "Double Room",
        price: 5000,
        beds: 2,
        amenities: ["WiFi", "Breakfast"],
      },
      {
        id: "h1r2",
        title: "Suite",
        price: 8000,
        beds: 2,
        amenities: ["WiFi", "Breakfast", "AC"],
      },
    ],
    location: "Mombasa",
    rating: 4.5,
    images: ["/images/bnb1.jpg", "/images/bnb2.jpg"],
  },
  {
    id: "hotel2",
    name: "City Hotel Deluxe",
    type: "hotel",
    rooms: [
      {
        id: "h2r1",
        title: "Standard Room",
        price: 4000,
        beds: 1,
        amenities: ["WiFi"],
      },
    ],
    location: "Nairobi",
    rating: 4.0,
    images: ["/images/hotel1.jpg"],
  },
];
