"use client"; // Required in App Router for useEffect to work

import { useEffect, useState } from "react";
import TourCard from "@/app/components/TourCard";

// Define TypeScript type for a tour
interface Tour {
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
}

export default function ToursPage() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch("https://opensheet.elk.sh/15HYoFPbfDDO-oSKlGaw8_6MVBauTOxi2wmz2CZZmC4I/Sheet1");
        const data = await res.json();
        // console.log("Fetched data:", data);
        setTours(data);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Explore Our Tour Packages
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading tour packages...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, idx) => (
            <TourCard key={idx} tour={tour} />
          ))}
        </div>
      )}

      <p className="text-center text-gray-600 mt-10">
        Custom itineraries available for all India. Ask us for a quote.
      </p>
    </main>
  );
}
