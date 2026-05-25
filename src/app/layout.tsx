import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Header from "./components/Header";
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
        <Header />

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
            <div className="text-sm text-center sm:text-right">
              <a
                href="mailto:nomadsxploretheworld@gmail.com"
                className="hover:text-white transition-colors"
              >
                nomadsxploretheworld@gmail.com
              </a>
              {" · "}
              <a
                href="mailto:sales@nomadsxplore.com"
                className="hover:text-white transition-colors"
              >
                sales@nomadsxplore.com
              </a>
              {" · "}
              <a
                href="mailto:nomadsxplore@gmail.com"
                className="hover:text-white transition-colors"
              >
                nomadsxplore@gmail.com
              </a>
              {" · "}
              <a
                href="mailto:sharma9955@gmail.com"
                className="hover:text-white transition-colors"
              >
                sharma9955@gmail.com
              </a>
              <span className="block sm:inline text-gray-400 mt-1 sm:mt-0">
                {" "}
                · Phone: +91-8194987729 · +91-8146977729
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
