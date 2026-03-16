"use client";

import Dialog from "@/components/Dialog";
import { useState } from "react";
import { Package, FileText, DollarSign } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type Props = {
  trigger: React.ReactNode;
  product?: {
    title: string;
    description: string;
    price: number;
  };
};

export default function ProductFormModal({ trigger, product }: Props) {
  const [title, setTitle] = useState(product?.title ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price ?? 0);

  const handleSubmit = () => {
    console.log({ title, description, price });
  };

  return (
    <Dialog
      trigger={trigger}
      title={product ? "Editar producto" : "Crear producto"}
      description="Completa la información del producto."
      size="md"
      footer={
        <div className="flex gap-3">
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-sm"
          >
            Guardar producto
          </button>
        </div>
      }
    >
      <div className="flex flex-col gap-5 mt-2">
        {/* TITLE */}

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Título</label>

          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Package size={18} className="text-gray-400" />
            <input
              className="w-full outline-none text-sm"
              placeholder="Ej: Camiseta premium"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        {/* DESCRIPTION */}

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Descripción
          </label>

          <div className="flex items-start gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <FileText size={18} className="text-gray-400 mt-1" />

            <textarea
              className="w-full outline-none text-sm resize-none"
              rows={3}
              placeholder="Describe el producto..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        {/* PRICE */}

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Precio</label>

          <div className="flex items-center gap-2 border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <DollarSign size={18} className="text-gray-400" />

            <input
              type="number"
              className="w-full outline-none text-sm"
              placeholder="0.00"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
