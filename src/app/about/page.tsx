export default function AboutPage() {
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-4">
            About Nomads Xplore
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your trusted travel partner with 5 years of expertise in tourism,
            hotel industry, and transportation services across India
          </p>
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-white/50 transform hover:-translate-y-2">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
                Our Journey
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-white font-bold text-lg">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      5 Years of Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      With half a decade of experience in the tourism industry,
                      we've built strong relationships and deep expertise in
                      creating unforgettable travel experiences across India.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Hotel Industry Expertise
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our extensive network in the hotel industry ensures you
                      get the best accommodations at competitive prices, from
                      luxury resorts to budget-friendly stays.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Transportation Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our reliable taxi and transportation services provide
                      seamless connectivity, ensuring comfortable and safe
                      journeys throughout your travel experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="space-y-8">
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/50 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Passion for Travel
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe every journey should be extraordinary. Our passion
                drives us to create unique experiences that go beyond typical
                tourism.
              </p>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/50 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Trust & Reliability
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                With 5 years of proven track record, we've earned the trust of
                thousands of travelers through consistent, reliable service
                delivery.
              </p>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-white/50 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Local Expertise
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our deep understanding of local culture, hidden gems, and
                regional nuances ensures authentic and memorable experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From accommodation to transportation, we handle every aspect of
              your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Hotel Bookings</h3>
              <p className="text-white/80">
                Premium accommodations with our hotel industry partnerships
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
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
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Transportation</h3>
              <p className="text-white/80">
                Reliable taxi and transport services for seamless travel
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tour Packages</h3>
              <p className="text-white/80">
                Curated experiences showcasing India's diverse beauty
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="/contact"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="relative z-10">Get In Touch</span>
            </a>

            <div className="text-gray-500 text-sm">
              or call us at
              <a
                href="tel:+918054855131"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors ml-1"
              >
                +91 8054855131
              </a>
              <span className="text-gray-500">or</span>
              <a
                href="tel:+8194977729"
                className="text-orange-600 font-medium hover:text-orange-700 transition-colors ml-1"
              >
                +91 8194977729
              </a>
            </div>
          </div>

          <p className="mt-6 text-gray-600 max-w-md mx-auto">
            Ready to explore India with our experienced team?
            <span className="text-orange-600 font-medium">
              Let's create your perfect journey!
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
