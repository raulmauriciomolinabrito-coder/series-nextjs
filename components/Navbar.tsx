import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link href="/" className="text-xl font-bold text-gray-900">
            NextShop
          </Link>
        </div>
        <div className="flex item-center gap-6 text-gray-600 font-medium">
          <Link href="/" className="hover:text-blue-600 transition">
            Inicio
          </Link>
          <Link href="/products" className="hover:text-blue-600 transition">
            Productos
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            Acerca de
          </Link>
        </div>
      </div>
    </nav>
  );
}
