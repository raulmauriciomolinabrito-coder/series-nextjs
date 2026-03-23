"use client";

import Dialog from "@/components/Dialog";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { PostProductRequest } from "../interfaces/postproduct.interface";
import { usePostProduct } from "../hooks/usePostProduct";
import { safeParse } from "valibot";
import { productSchema } from "../../../validations/product.schema";

type Props = {
  trigger: React.ReactNode;
  product?: PostProductRequest;
  onSuccess?: () => void; //para refrescar la lista de productos después de crear o editar
};

export default function ProductFormModal({
  trigger,
  product,
  onSuccess,
}: Props) {
  const { createProduct, loading, error } = usePostProduct();
  const [isOpen, setIsOpen] = useState(false); // Control local del estado del modal
  const [title, setTitle] = useState(product?.title ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price ?? 0);
  const [category, setCategory] = useState(product?.category ?? "");
  const [image, setImage] = useState(product?.image ?? "");
  const [rate, setRate] = useState(product?.rating?.rate ?? 0);
  const [count, setCount] = useState(product?.rating?.count ?? 0);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (fieldName: string, fieldValue: string | number) => {
    // Crear el payload actualizado con el campo siendo validado para validar en tiempo real
    const updatedPayload: PostProductRequest = {
      title: fieldName === "title" ? (fieldValue as string) : title,
      description:
        fieldName === "description" ? (fieldValue as string) : description,
      price: fieldName === "price" ? (fieldValue as number) : price,
      category: fieldName === "category" ? (fieldValue as string) : category,
      image: fieldName === "image" ? (fieldValue as string) : image,
      rating: {
        rate: fieldName === "rate" ? (fieldValue as number) : rate,
        count: fieldName === "count" ? (fieldValue as number) : count,
      },
    };

    const result = safeParse(productSchema, updatedPayload); // Validar el payload actualizado

    // Extraer solo los errores relacionados con el campo que se está validando
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key;
        if (typeof field === "string" && field.length > 0) {
          fieldErrors[field] = issue.message;
        }
      });

      // Solo actualizar el error del campo que se está validando
      setErrors((prev) => ({
        ...prev,
        [fieldName]: fieldErrors[fieldName] || "",
      }));
    } else {
      // Si la validación es exitosa, limpiar el error de este campo
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleSubmit = async () => {
    const payload: PostProductRequest = {
      title,
      description,
      price,
      category,
      image,
      rating: {
        rate,
        count,
      },
    };

    const result = safeParse(productSchema, payload);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key;
        if (typeof field === "string" && field.length > 0) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      await createProduct(payload);
      alert("Producto creado exitosamente");
      setIsOpen(false); // Cerramos el modal después de crear el producto
      onSuccess?.(); // Llamamos a onSuccess para refrescar la lista de productos
    } catch {
      alert("Error al crear el producto");
    }
  };

  const inputStyle =
    "w-full border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 transition";

  return (
    <Dialog
      trigger={trigger}
      title={product ? "Editar producto" : "Crear producto"}
      description="Completa la información del producto."
      size="md"
      open={isOpen} // Controlamos la apertura del modal con el estado local
      onOpenChange={setIsOpen} // Actualizamos el estado local cuando el modal se abra o cierre
      footer={
        <div className="flex gap-3 justify-end">
          <DialogPrimitive.Close asChild>
            <button className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium shadow-sm"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {error && (
          <p className="text-red-500 col-span-1 md:col-span-2 text-sm">
            {error}
          </p>
        )}
        {/* TITLE */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Título</label>
          <input
            className={inputStyle}
            placeholder="Ej: Camiseta premium"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              validateField("title", e.target.value);
            }}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        {/* DESCRIPTION */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Descripción
          </label>
          <textarea
            className={inputStyle + " resize-none"}
            rows={3}
            placeholder="Describe el producto..."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              validateField("description", e.target.value);
            }}
          />
          {errors.description && (
            <p className="text-red-500 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        {/* PRICE */}
        <div>
          <label className="text-sm font-medium text-gray-700">Precio</label>
          <input
            type="number"
            className={inputStyle}
            placeholder="0.00"
            value={price}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              setPrice(newValue);
              validateField("price", newValue);
            }}
          />
          {errors.price && (
            <p className="text-red-500 text-xs mt-1">{errors.price}</p>
          )}
        </div>

        {/* CATEGORY */}
        <div>
          <label className="text-sm font-medium text-gray-700">Categoría</label>
          <input
            className={inputStyle}
            placeholder="Ej: ropa"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              validateField("category", e.target.value);
            }}
          />
          {errors.category && (
            <p className="text-red-500 text-xs mt-1">{errors.category}</p>
          )}
        </div>

        {/* IMAGE */}
        <div className="col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            URL de imagen
          </label>
          <input
            className={inputStyle}
            placeholder="https://..."
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
              validateField("image", e.target.value);
            }}
          />
          {errors.image && (
            <p className="text-red-500 text-xs mt-1">{errors.image}</p>
          )}
        </div>

        {/* RATING */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Rating (rate)
          </label>
          <input
            type="number"
            step="0.1"
            className={inputStyle}
            placeholder="4.5"
            value={rate}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              setRate(newValue);
              validateField("rate", newValue);
            }}
          />
          {errors.rate && (
            <p className="text-red-500 text-xs mt-1">{errors.rate}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">
            Cantidad de reviews
          </label>
          <input
            type="number"
            className={inputStyle}
            placeholder="120"
            value={count}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              setCount(newValue);
              validateField("count", newValue);
            }}
          />
          {errors.count && (
            <p className="text-red-500 text-xs mt-1">{errors.count}</p>
          )}
        </div>
      </div>
    </Dialog>
  );
}
