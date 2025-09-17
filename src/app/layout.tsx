import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nomads Xplore",
  description: "Discover curated tour packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Nomads Logo"
                width={36}
                height={36}
                className="rounded"
              />
              <span className="text-white text-lg font-semibold tracking-wide">
                NOMADS
              </span>
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/"
                className="text-gray-200 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/tours"
                className="text-gray-200 hover:text-white transition"
              >
                Tours
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-white transition"
              >
                Contact
              </Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <div className="min-h-[calc(100vh-8rem)]">{children}</div>

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-300 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="Nomads Logo"
                width={28}
                height={28}
                className="rounded"
              />
              <p className="text-sm">
                © {new Date().getFullYear()} Nomads Xplore. All rights reserved.
              </p>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Email:</span>{" "}
              nomadsexploretheworld@gmail.com ·{" "}
              <span className="text-gray-400">Phone:</span> +91-8054855131
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
