import Link from "next/link";
import { TESTIMONIALS } from "@/lib/content";

type TestimonialsSectionProps = {
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
  className?: string;
};

export default function TestimonialsSection({
  title = "What Our Travelers Say",
  subtitle = "Real stories from guests who explored India with Nomads Xplore.",
  limit,
  showViewAll = true,
  className = "",
}: TestimonialsSectionProps) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-3" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.175 0L6.2 16.282c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.566 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.483-3.293z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed line-clamp-6">
                {t.quote}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-r ${t.gradient}`}
                />
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.tag}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {showViewAll && limit && limit < TESTIMONIALS.length && (
          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Read All Reviews
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
