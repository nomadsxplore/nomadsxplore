import Link from "next/link";
import TestimonialsSection from "../components/TestimonialsSection";
import { EXPERIENCE_BADGE } from "@/lib/content";

export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              {EXPERIENCE_BADGE}
            </p>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
              Customer Reviews
            </h1>
            <p className="text-gray-600">10K+ Instagram Community</p>
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Don&apos;t just take our word for it — hear from travelers who&apos;ve
              explored India with Nomads Xplore. Browse real feedback from group
              trips, custom itineraries, and family getaways.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-gray-900"
              >
                Explore Trips
              </Link>
              <a
                href="https://instagram.com/nomads.exploretheworld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50"
              >
                Join our 10k+ Insta community
              </a>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection
        title="Traveler Stories"
        subtitle="Rated highly for planning, value, and on-trip support across Rajasthan, Himachal, Shimla, and more."
        showViewAll={false}
        className="pt-0"
      />

      <div className="max-w-7xl mx-auto px-6 pb-20 text-center">
        <a
          href="https://instagram.com/nomads.exploretheworld"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl"
        >
          Follow us on Instagram
        </a>
      </div>
    </main>
  );
}
