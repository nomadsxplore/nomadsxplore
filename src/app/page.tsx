import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-bold mb-4">Welcome to Nomlore</h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover India's most beautiful destinations with curated travel experiences.
      </p>
      <Link href="/tours">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow">
          View Tour Packages
        </button>
      </Link>
    </main>
  );
}
