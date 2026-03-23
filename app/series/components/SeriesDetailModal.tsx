import Dialog from "@/components/Dialog";
import { GetSeriesResponse } from "../interfaces/getseries.interface";

type Props = {
  series: GetSeriesResponse;
  trigger: React.ReactNode;
};

export default function SeriesDetailModal({ series, trigger }: Props) {
  return (
    <Dialog
      trigger={trigger}
      title={series.titulo}
      description={series.sinopsis}
      size="md"
      footer={
        <div className="flex w-full items-center justify-between text-sm text-gray-700">
          <span>{series.genero}</span>
          <span>⭐ {series.calificacion}</span>
        </div>
      }
    >
      <div className="mb-3 overflow-hidden rounded">
        <img
          src={series.urlPortada}
          alt={series.titulo}
          className="h-48 w-full object-cover"
        />
      </div>
      <p className="text-sm text-gray-600">Estreno: {series.estreno}</p>
      <p className="text-sm text-gray-600 mt-1">Plataforma: {series.plataforma}</p>
    </Dialog>
  );
}
