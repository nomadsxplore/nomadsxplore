export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/40 to-pink-100/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-purple-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full mb-6 shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-4">
            Our Office Location
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Visit us in the spiritual heart of Punjab, where tradition meets
            modern travel expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Office Card */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-white/50 transform hover:-translate-y-2">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

            <div className="relative">
              {/* Office Title */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Amritsar Office
                </h2>
              </div>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Visit us at our office near the iconic Golden Temple, where
                <span className="text-orange-600 font-medium">
                  {" "}
                  spirituality meets travel expertise
                </span>
                .
              </p>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start group/item">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center mr-4 group-hover/item:bg-orange-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block mb-1">
                      Address
                    </span>
                    <span className="text-gray-700 leading-relaxed">
                      Near Golden Temple, Heritage Street,
                      <br />
                      Amritsar, Punjab 143001
                    </span>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-4 group-hover/item:bg-green-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-green-600"
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
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block mb-1">
                      Phone
                    </span>
                    <div className="space-y-1">
                      <a
                        href="tel:+918054855131"
                        className="text-gray-700 hover:text-green-600 transition-colors block"
                      >
                        +91 8054855131
                      </a>
                      <a
                        href="tel:+918198947729"
                        className="text-gray-700 hover:text-green-600 transition-colors block"
                      >
                        +91 8198947729
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start group/item">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover/item:bg-blue-200 transition-colors">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:nomadsexploretheworld@gmail.com"
                      className="text-gray-700 hover:text-blue-600 transition-colors break-all"
                    >
                      nomadsexploretheworld@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Description */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl border border-orange-100">
                <div className="flex items-center mb-3">
                  <svg
                    className="w-5 h-5 text-orange-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold text-gray-900">
                    Prime Location
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Located in the heart of Amritsar&apos;s spiritual district,
                  just steps away from the Golden Temple&apos;s serene
                  surroundings.
                </p>
              </div>
            </div>
          </div>

          {/* Golden Temple Image */}
          <figure className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 transform hover:-translate-y-2">
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src="/images/goldentemple.jpg"
                alt="Golden Temple, Amritsar"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">
                    Sacred Site
                  </span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="p-8">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">
                  Sacred Landmark
                </span>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                The magnificent Golden Temple – a symbol of peace and
                spirituality, inspiring millions of visitors from around the
                world.
              </p>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </figure>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:nomadsexploretheworld@gmail.com"
              className="group relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 rounded-full shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg
                className="w-6 h-6 mr-3 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="relative z-10">Send us an Email</span>
            </a>

            <div className="text-gray-500 text-sm">
              or call us at
              <a
                href="tel:+918054855131"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors ml-1"
              >
                +91 8054855131
              </a>
            </div>
          </div>

          <p className="mt-6 text-gray-600 max-w-md mx-auto">
            We&apos;re here to help you plan your perfect journey.
            <span className="text-orange-600 font-medium">
              Let&apos;s explore together!
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
