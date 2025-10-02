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
            <div className="text-sm">
              <span className="text-gray-400"> Website Team Email:</span>{" "}
              sharma9955@gmail.com ·{" "}
              <span className="text-gray-400">Phone:</span> +91-7889289496
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
