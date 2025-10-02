"use client";

import { useEffect } from "react";
import Image from "next/image";

type Tour = {
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
};

export default function TourDetailsModal({
  open,
  onClose,
  tour,
}: {
  open: boolean;
  onClose: () => void;
  tour: Tour | null;
}) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open || !tour) return null;

  const whatsappMsg = `Hi Nomads Xplore, I'm interested in the ${tour.name} tour. Please share more details.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-white via-orange-50/30 to-pink-50/30 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300 border border-orange-100/50">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 hover:from-orange-500 hover:to-pink-600 text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 group"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex flex-col overflow-hidden h-full">
          {/* Top - Image */}
          <div className="relative h-48 md:h-56 overflow-hidden group">
            <Image
              src={tour.image}
              alt={tour.name}
              width={800}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Badges */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between gap-3">
              <span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-bold shadow-lg flex items-center gap-1.5 hover:scale-105 transition-transform">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {tour.duration}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-pink-600 text-white text-xs font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                {tour.price}
              </span>
            </div>
          </div>

          {/* Bottom - Details */}
          <div className="flex-1 flex flex-col overflow-y-auto bg-white/80 backdrop-blur-sm">
            <div className="p-5 md:p-6 space-y-4">
              {/* Title & Rating */}
              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                  {tour.name}
                </h2>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-50 rounded-full border border-yellow-200">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-500 drop-shadow"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.175 0L6.2 16.282c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.566 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.483-3.293z" />
                      </svg>
                    ))}
                    <span className="ml-1 font-bold text-gray-800">4.9</span>
                  </div>
                  <span className="text-gray-600 font-medium">
                    5,000+ travelers
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-base">
                  {tour.description}
                </p>

                <div className="relative overflow-hidden p-5 bg-gradient-to-br from-orange-100 via-pink-50 to-orange-50 rounded-2xl border-2 border-orange-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-pink-300/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">✨</span>
                      <span className="font-bold text-orange-600">
                        Why Choose Us
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <span className="font-bold text-gray-900">
                        10 years experience
                      </span>{" "}
                      providing
                      <span className="font-bold text-gray-900">
                        {" "}
                        budget-friendly trips
                      </span>{" "}
                      tailored to your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-orange-500 to-pink-600 rounded-full" />
                  What&apos;s Included
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: "🏨", text: "Hotel Bookings" },
                    { icon: "🚗", text: "Transport" },
                    { icon: "👨‍🏫", text: "Local Guide" },
                    { icon: "📋", text: "Custom Plan" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="flex items-center gap-3 p-3 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-4 space-y-3">
                <a
                  href={`https://wa.me/918054855131?text=${encodeURIComponent(
                    whatsappMsg
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <svg
                    className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M19.11 17.44c-.29-.14-1.69-.83-1.95-.92-.26-.1-.45-.14-.64.14-.19.29-.74.92-.9 1.11-.17.19-.33.22-.62.07-.29-.14-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2-.17-.29-.02-.45.12-.59.12-.12.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02s-.5.07-.76.36c-.26.29-1 1-1 2.43 0 1.43 1.03 2.81 1.18 3 .14.19 2.02 3.08 4.89 4.32.68.3 1.21.48 1.62.62.68.22 1.3.19 1.78.12.55-.07 1.69-.69 1.93-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33zM16 3C9.37 3 4 8.37 4 15c0 2.64.86 5.08 2.33 7.06L4 29l7.12-2.29C13.03 27.52 14.47 28 16 28c6.63 0 12-5.37 12-12S22.63 3 16 3z" />
                  </svg>
                  <span className="relative z-10 text-lg">
                    WhatsApp Inquiry
                  </span>
                  <svg
                    className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>

                <button
                  onClick={onClose}
                  className="w-full px-6 py-3.5 border-2 border-gray-300 hover:border-orange-400 text-gray-700 hover:text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
