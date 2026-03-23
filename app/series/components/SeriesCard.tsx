type SeriesCardProps = {
  titulo: string;
  sinopsis: string;
  urlPortada: string;
  estreno: number;
  calificacion: number;
  genero: string;
  plataforma: string;
  actions?: React.ReactNode;
  detailTrigger?: React.ReactNode;
};

export default function SeriesCard({
  titulo,
  sinopsis,
  urlPortada,
  estreno,
  calificacion,
  genero,
  plataforma,
  actions,
  detailTrigger,
}: SeriesCardProps) {
  return (
    <div className="relative group bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {actions && (
        <div className="absolute top-3 right-3 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition">
          {actions}
        </div>
      )}

      <div className="h-52 flex items-center justify-center bg-gray-50">
        <img
          src={urlPortada}
          alt={titulo}
          className="h-52 w-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded w-fit mb-2">
          {genero}
        </span>

        <h3 className="font-semibold text-lg line-clamp-2">{titulo}</h3>

        <p className="text-gray-500 text-sm line-clamp-2 mt-1">{sinopsis}</p>

        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-600 font-semibold text-sm">{plataforma}</span>
          <span className="text-yellow-500 text-sm">⭐ {calificacion}</span>
        </div>

        <div className="mt-1 text-xs text-gray-500">Estreno: {estreno}</div>

        {detailTrigger && <div className="mt-4">{detailTrigger}</div>}
      </div>
    </div>
  );
}
