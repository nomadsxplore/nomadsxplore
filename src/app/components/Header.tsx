"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
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

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="text-gray-200 hover:text-white transition">
            Home
          </Link>
          <Link
            href="/tours"
            className="text-gray-200 hover:text-white transition"
          >
            Tours
          </Link>
          <Link
            href="/about"
            className="text-gray-200 hover:text-white transition"
          >
            About Us
          </Link>
          <Link
            href="/career"
            className="text-gray-200 hover:text-white transition"
          >
            Career
          </Link>
          <Link
            href="/address"
            className="text-gray-200 hover:text-white transition"
          >
            Address
          </Link>
          <Link
            href="/testimonials"
            className="text-gray-200 hover:text-white transition"
          >
            Testimonials
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/90">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 grid gap-2">
            <Link
              href="/"
              className="py-2 text-gray-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/tours"
              className="py-2 text-gray-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Tours
            </Link>
            <Link
              href="/about"
              className="py-2 text-gray-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/career"
              className="py-2 text-gray-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Career
            </Link>
            <Link
              href="/address"
              className="py-2 text-gray-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Address
            </Link>
            <Link
              href="/testimonials"
              className="py-2 text-gray-200 hover:text-white"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
