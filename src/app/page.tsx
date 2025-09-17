import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center p-6 bg-gray-900">
      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: "url('/images/travel-bg.jpg')" }}
        aria-hidden="true"
      ></div>

      {/* Content (above overlay) */}
      <div className="relative z-10 max-w-xl text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to Nomads
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 drop-shadow-md">
        Explore breathtaking destinations with curated travel experiences!
        </p>
        <Link href="/tours">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow transition">
            View Tour Packages
          </button>
        </Link>
      </div>
    </main>
  );
}