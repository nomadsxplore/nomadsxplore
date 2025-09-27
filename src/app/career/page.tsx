export default function CareerPage() {
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
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
              />
            </svg>
          </div>

          <h1 className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 bg-clip-text text-transparent mb-4">
            Join Our Team
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto rounded-full mb-6"></div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Be part of our growing tourism company and help us create
            unforgettable travel experiences across India
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Current Job Openings
            </h2>
            <p className="text-lg text-gray-600">
              Exciting opportunities to grow with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* UI Intern Position */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-white/50 transform hover:-translate-y-2">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-500/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

              <div className="relative">
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
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      UI/UX Design Intern
                    </h3>
                    <p className="text-orange-600 font-medium">
                      Internship Position
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Job Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Join our creative team to design beautiful and
                      user-friendly interfaces for our tourism website and
                      mobile applications. Work on real projects that will be
                      seen by thousands of travelers.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Basic knowledge of Figma, Adobe XD, or Sketch
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Understanding of user experience principles
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Creative mindset and attention to detail
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Portfolio of design work (preferred)
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Duration: 3-6 months
                      </span>
                      <span className="text-sm text-gray-500">
                        Location: Remote/Amritsar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEO Intern Position */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-white/50 transform hover:-translate-y-2">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      SEO Marketing Intern
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Internship Position
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Job Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Help us improve our online visibility and reach more
                      travelers. Work on SEO strategies, content optimization,
                      and digital marketing campaigns for our tourism business.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Basic understanding of SEO principles
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Familiarity with Google Analytics and Search Console
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Content writing and keyword research skills
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Interest in digital marketing and tourism industry
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Duration: 3-6 months
                      </span>
                      <span className="text-sm text-gray-500">
                        Location: Remote/Amritsar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Consultant Position */}
            <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 p-10 border border-white/50 transform hover:-translate-y-2">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/20 to-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Travel Consultant
                    </h3>
                    <p className="text-green-600 font-medium">
                      Full-time Position
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Job Description
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Join our team as a Travel Consultant to help customers
                      plan and book their dream trips across India. Provide
                      expert advice on destinations, accommodations, and create
                      personalized travel itineraries.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Excellent communication and customer service skills
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Knowledge of Indian tourist destinations and culture
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Experience in travel planning or hospitality
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Ability to work in a fast-paced environment
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Multilingual skills preferred (Hindi, English, Punjabi)
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Full-time</span>
                      <span className="text-sm text-gray-500">
                        Location: Amritsar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="bg-gradient-to-r from-orange-500 via-pink-600 to-purple-700 rounded-3xl p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Join Nomads Xplore?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Be part of a growing company that's shaping the future of tourism
              in India
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Experience</h3>
              <p className="text-white/80">
                Work on actual projects that impact thousands of travelers
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="text-white/80">
                Learn from experienced professionals in tourism and technology
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunity</h3>
              <p className="text-white/80">
                Potential for full-time positions and career advancement
              </p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-8">
            How to Apply
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Send Your Application
                    </h3>
                    <p className="text-gray-600">
                      Email your resume and portfolio to our contact email
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Initial Screening
                    </h3>
                    <p className="text-gray-600">
                      We'll review your application and contact you within 3-5
                      business days
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Interview Process
                    </h3>
                    <p className="text-gray-600">
                      Virtual or in-person interview to discuss your skills and
                      goals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:nomadsexploretheworld@gmail.com?subject=Career Application - UI/SEO Intern"
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
              <span className="relative z-10">Apply Now</span>
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
            Ready to start your career in tourism and technology?
            <span className="text-orange-600 font-medium">
              We'd love to hear from you!
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
