"use client";

import Dialog from "@/components/Dialog";

type Props = {
  trigger: React.ReactNode;
  productId: number;
  onDelete: (id: number) => void;
};

export default function DeleteProductModal({
  trigger,
  productId,
  onDelete,
}: Props) {
  return (
    <Dialog
      trigger={trigger}
      title="Eliminar producto"
      description="¿Estás seguro de que deseas eliminar este producto?"
      size="sm"
      footer={
        <>
          <button className="px-4 py-2 border rounded">Cancelar</button>
          <button
            onClick={() => onDelete(productId)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Eliminar
          </button>
        </>
      }
    >
      <p className="text-gray-600">Esta acción no se puede deshacer.</p>
    </Dialog>
  );
}
