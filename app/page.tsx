"use client";
import Banner from "@/components/Banner";
import CartBubble from "@/components/CartBubble";
import CategoriesSection from "@/components/CategoriesSection";
//import { UseGetProduct } from "./products/hooks/useGetProduct";
import { UseGetSeries } from "./series/hooks/useGetSeries";
import AboutPage from "./about/page";

export default function Home() {
  //const { products, loading, error } = UseGetProduct();
  const { series, loading, error   } = UseGetSeries();

  const categories = [...new Set(series.map((serie) => serie.genero))];

  return (
    <div className="bg-white min-h-screen">
      <Banner />
      {loading ? (
        <section className="max-w-7xl mx-auto px-6 py-14 text-center text-gray-600">
          Cargando categorias...
        </section>
      ) : error ? (
        <section className="max-w-7xl mx-auto px-6 py-14 text-center text-red-500">
          Error al cargar las categorias
        </section>
      ) : (
        <CategoriesSection categories={categories} />
      )}
      <CartBubble />
      <AboutPage />
    </div>
  );
}
