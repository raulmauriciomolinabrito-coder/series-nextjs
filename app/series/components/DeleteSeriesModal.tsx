"use client";

import Dialog from "@/components/Dialog";
import { useDeleteSeries } from "../hooks/useDeleteSeries";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type Props = {
  trigger: React.ReactNode;
  seriesId: number;
  onDelete: (id: number) => void;
  onSuccess?: () => void;
};

export default function DeleteSeriesModal({
  trigger,
  seriesId,
  onDelete,
  onSuccess,
}: Props) {
  const { removeSeries, loading, error } = useDeleteSeries();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    try {
      await removeSeries(seriesId);
      setIsOpen(false);
      onDelete(seriesId);
      onSuccess?.();
      alert("Serie eliminada exitosamente");
    } catch {
      alert("Error al eliminar la serie");
    }
  };

  return (
    <Dialog
      trigger={trigger}
      title="Eliminar serie"
      description="¿Estás seguro de que deseas eliminar esta serie?"
      size="sm"
      open={isOpen}
      onOpenChange={setIsOpen}
      footer={
        <>
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 border rounded">Cancelar</button>
          </DialogPrimitive.Close>
          <button
            onClick={handleDelete}
            disabled={loading}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            {loading ? "Eliminando..." : "Eliminar"}
          </button>
        </>
      }
    >
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <p className="text-gray-600">Esta acción no se puede deshacer.</p>
    </Dialog>
  );
}
