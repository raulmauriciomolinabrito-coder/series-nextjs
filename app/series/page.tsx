"use client";
import { useState } from "react";
import { UseGetSeries } from "./hooks/useGetSeries";
import SeriesDetailModal from "./components/SeriesDetailModal";
import { Trash2 } from "lucide-react";
import SeriesFormModal from "./components/SeriesFormModal";
import DeleteSeriesModal from "./components/DeleteSeriesModal";
import CategoryFilter from "./components/CategoryFilter";
import SeriesCard from "./components/SeriesCard";

function SeriesPage() {
  const { series, loading, error, refetch } = UseGetSeries();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...new Set(series.map((item) => item.genero))];

  const filteredSeries =
    selectedCategory === "all"
      ? series
      : series.filter((item) => item.genero === selectedCategory);

  return (
    <div className="bg-white p-10">
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-black">Series</h1>

        <SeriesFormModal
          trigger={
            <button className="w-fit self-start rounded-xl bg-gradient-to-r from-red-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 md:self-auto">
              Agregar nueva Serie
            </button>
          }
          onSuccess={refetch}
        />
      </div>

      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-black">Cargando series...</p>
        ) : error ? (
          <p className="text-red-500">Error al cargar las series</p>
        ) : (
          filteredSeries.map((item) => (
            <SeriesCard
              key={item.id}
              titulo={item.titulo}
              sinopsis={item.sinopsis}
              urlPortada={item.urlPortada}
              estreno={item.estreno}
              calificacion={item.calificacion}
              genero={item.genero}
              plataforma={item.plataforma}
              actions={
                <DeleteSeriesModal
                  seriesId={item.id}
                  onDelete={(id) => console.log("delete", id)}
                  trigger={
                    <button className="text-red-600 flex items-center gap-1 text-sm">
                      <Trash2 size={16} />
                    </button>
                  }
                  onSuccess={refetch}
                />
              }
              detailTrigger={
                <SeriesDetailModal
                  series={item}
                  trigger={
                    <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
                      Ver detalles
                    </button>
                  }
                />
              }
            />
          ))
        )}
      </div>
    </div>
  );
}

export default SeriesPage;
