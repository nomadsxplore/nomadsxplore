import TourCard from "@/components/TourCard";

const tours = [
  {
    name: "Rajasthan Royal Retreat",
    image: "/images/rajasthan.jpg",
    description: "Explore forts, palaces, and desert safaris in majestic Rajasthan.",
    price: "₹18,000",
    duration: "5 Days / 4 Nights"
  },
  {
    name: "Shimla Snow Escape",
    image: "/images/shimla.jpg",
    description: "A serene hill station getaway with snow-covered landscapes.",
    price: "₹14,000",
    duration: "4 Days / 3 Nights"
  },
  {
    name: "Dalhousie Hills",
    image: "/images/dalhousie.jpg",
    description: "Peaceful pine forests and panoramic views in Himachal Pradesh.",
    price: "₹13,500",
    duration: "3 Days / 2 Nights"
  },
  {
    name: "Delhi Heritage Tour",
    image: "/images/delhi.jpg",
    description: "Experience Mughal architecture, markets, and street food.",
    price: "₹9,999",
    duration: "2 Days / 1 Night"
  },
  {
    name: "Goa Beach Vibes",
    image: "/images/goa.jpg",
    description: "Relax at sun-kissed beaches with vibrant nightlife and seafood.",
    price: "₹15,000",
    duration: "4 Days / 3 Nights"
  }
];

export default function ToursPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">Explore Our Tour Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, idx) => (
          <TourCard key={idx} tour={tour} />
        ))}
      </div>
    </main>
  );
}
