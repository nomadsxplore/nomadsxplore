"use client"; // Required in App Router for useEffect to work

import { useEffect, useState } from "react";
import TourCard from "@/app/components/TourCard";
import TourDetailsModal from "@/app/components/TourDetailsModal";

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
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    async function fetchTours() {
      try {
        const res = await fetch(
          "https://opensheet.elk.sh/15HYoFPbfDDO-oSKlGaw8_6MVBauTOxi2wmz2CZZmC4I/Sheet1"
        );
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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* Hero Banner */}
      <section className="relative h-[70vh] sm:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: "url('/images/homepage2.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-transparent" />

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-white/35 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white/90 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              5+ Years Experience | 5000+ Happy Travelers
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-tight">
              <span className="block bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent">
                Discover India
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-light text-orange-300 block mt-2">
                with Expert Guides
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Handpicked experiences across India with budget-friendly options
              and expert hosts who know every hidden gem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-6">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Browse Tours
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </button>

              <a
                href="tel:+918194987729"
                className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Tours Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            Featured Tour Packages
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover India&apos;s most breathtaking destinations with our carefully
            curated tour packages
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-gray-600">Loading amazing tours...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <TourCard
                key={idx}
                tour={tour}
                onViewDetails={(t) => {
                  setSelectedTour(t);
                  setModalOpen(true);
                }}
              />
            ))}
          </div>
        )}

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-orange-50 to-pink-50 rounded-3xl border border-orange-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Itinerary?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We create personalized travel experiences across India. Tell us your
            dream destination and we&apos;ll craft the perfect journey for you.
          </p>
          <a
            href="tel:+918194987729"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Get Custom Quote
          </a>
        </div>
      </section>

      <TourDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        tour={selectedTour}
      />
    </main>
  );
}
