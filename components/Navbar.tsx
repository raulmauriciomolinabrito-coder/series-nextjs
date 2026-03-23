import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
            N
          </span>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 transition hover:text-blue-700"
          >
            NextFLIX
          </Link>
        </div>
        <div className="flex items-center gap-6 text-sm font-semibold text-gray-600 md:text-base">
          <Link
            href="/"
            className="rounded-md px-2 py-1 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Inicio
          </Link>
          <Link
            href="/series"
            className="rounded-md px-2 py-1 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Series
          </Link>
          <Link
            href="/about"
            className="rounded-md px-2 py-1 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
}
