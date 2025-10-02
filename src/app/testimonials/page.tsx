export default function TestimonialsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-3">
              10K+
            </h1>
            <p className="text-gray-600">Instagram Community </p>
            {/* <p className="mt-2 text-lg font-semibold">4.9+ on Google Reviews</p> */}
          </div>
          <div>
            <p className="text-gray-700 mb-4">
              Don’t just take our word for it — hear from people who’ve
              transformed their dreams into stunning travel experiences with
              Nomads.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/tours"
                className="inline-flex items-center gap-2 rounded-full bg-black text-white px-5 py-3 text-sm font-semibold hover:bg-gray-900"
              >
                Explore Trips
              </a>
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

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Kanika */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              I am grateful for Nomads team that they stood by us in each step.
              Nomads: you guys are great I won’t say we didn’t face the hurdles
              or issues but real organiser is one who handle situation calmly so
              that is desh videsh for me. You guys gave your 100%. All the best
              guys for future trips and I’ll love to join your group again and
              again ❤️ Thankyou so much for all the experiences, memories, notes
              and love ❤️
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-orange-500 to-pink-600" />
              <div>
                <div className="text-sm font-semibold">Kanika Sharma</div>
                <div className="text-xs text-gray-500">Memories</div>
              </div>
            </div>
          </article>

          {/* Gourav */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Huge shoutout to the Nomads team — planning to execution was
              seamless and full of fun. Calm guidance, on-time logistics, and
              great vibes. Highly recommended!
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
              <div>
                <div className="text-sm font-semibold">Gourav</div>
                <div className="text-xs text-gray-500">Recommendation</div>
              </div>
            </div>
          </article>

          {/* Shardha */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              From first call to last goodbye — everything was smooth. Met
              amazing people and created memories for a lifetime. Thank you,
              Nomads!
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600" />
              <div>
                <div className="text-sm font-semibold">Shardha</div>
                <div className="text-xs text-gray-500">Memories</div>
              </div>
            </div>
          </article>

          {/* Sachin Shinde */}
          <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 leading-relaxed">
              Perfect planning, budget-friendly and safe. The team handled all
              hurdles calmly — felt genuinely taken care of throughout the trip.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-rose-500 to-orange-500" />
              <div>
                <div className="text-sm font-semibold">Sachin Shinde</div>
                <div className="text-xs text-gray-500">Verified Traveler</div>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/nomads.exploretheworld"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white px-8 py-3 font-semibold shadow-lg hover:shadow-xl"
          >
            Follow us on Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
