import Image from "next/image";

type Tour = {
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
};

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100">
      {/* Image Container with Overlay Effects */}
      <div className="relative overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.name}
          width={600}
          height={280}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Duration Badge */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          <div className="flex items-center space-x-2">
            <svg
              className="w-4 h-4 text-orange-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm font-medium text-gray-800">
              {tour.duration}
            </span>
          </div>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-200">
          <span className="text-sm font-bold">{tour.price}</span>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-6 space-y-4">
        {/* Title with Gradient Effect */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:to-pink-600 transition-all duration-300">
          {tour.name}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
          {tour.description}
        </p>

        {/* Details Section */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 group-hover:border-orange-200 transition-colors duration-300">
          <div className="flex items-center space-x-2 text-gray-700">
            <svg
              className="w-5 h-5 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium">{tour.duration}</span>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500">Starting from</div>
            <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              {tour.price}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button className="w-full bg-gradient-to-r from-orange-500 to-pink-600 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
            <span className="flex items-center justify-center space-x-2">
              <span>View Details</span>
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
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-pink-600/20 blur-xl"></div>
        </div>
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-400/10 to-pink-600/10 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-sm"></div>
    </div>
  );
}
