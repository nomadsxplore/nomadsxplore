import TourCard from "@/app/components/TourCard";

const tours = [
  {
    name: "Rajasthan Royal Retreat",
    image: "/images/rajasthan.jpg",
    description:
      "Explore forts, palaces, and desert safaris in majestic Rajasthan.",
    price: "₹18,000",
    duration: "5 Days / 4 Nights",
  },
  {
    name: "Shimla Snow Escape",
    image: "/images/shimla.jpg",
    description: "A serene hill station getaway with snow-covered landscapes.",
    price: "₹14,000",
    duration: "4 Days / 3 Nights",
  },
  {
    name: "Himachal Highlights (Dalhousie & Dharamshala)",
    image: "/images/dalhousie.jpg",
    description:
      "Pine valleys, Tibetan culture, and calm mountain monasteries.",
    price: "₹19,500",
    duration: "6 Days / 5 Nights",
  },
  {
    name: "Delhi Heritage Tour",
    image: "/images/delhi.jpg",
    description: "Experience Mughal architecture, markets, and street food.",
    price: "₹9,999",
    duration: "2 Days / 1 Night",
  },
  {
    name: "Goa Beach Vibes",
    image: "/images/goa.jpg",
    description:
      "Relax at sun-kissed beaches with vibrant nightlife and seafood.",
    price: "₹15,000",
    duration: "4 Days / 3 Nights",
  },
];

export default function ToursPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Explore Our Tour Packages
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour, idx) => (
          <TourCard key={idx} tour={tour} />
        ))}
      </div>
      <p className="text-center text-gray-600 mt-10">
        Custom itineraries available for all India. Ask us for a quote.
      </p>
    </main>
  );
}
