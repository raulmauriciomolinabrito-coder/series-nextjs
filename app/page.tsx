"use client";
import Banner from "@/components/Banner";
import CartBubble from "@/components/CartBubble";
import CategoriesSection from "@/components/CategoriesSection";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Banner />
      <CategoriesSection />
      <CartBubble />
    </div>
  );
}
