"use client";

import Dialog from "@/components/Dialog";
import { useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { PostSeriesRequest } from "../interfaces/postseries.interface";
import { usePostSeries } from "../hooks/usePostSeries";
import { safeParse } from "valibot";
import { seriesSchema } from "@/validations/series.schema";

type Props = {
  trigger: React.ReactNode;
  series?: PostSeriesRequest;
  onSuccess?: () => void;
};

export default function SeriesFormModal({ trigger, series, onSuccess }: Props) {
  const { createSeries, loading, error } = usePostSeries();
  const [isOpen, setIsOpen] = useState(false);
  const [titulo, setTitulo] = useState(series?.titulo ?? "");
  const [genero, setGenero] = useState(series?.genero ?? "");
  const [sinopsis, setSinopsis] = useState(series?.sinopsis ?? "");
  const [urlPortada, setUrlPortada] = useState(series?.urlPortada ?? "");
  const [estreno, setEstreno] = useState(series?.estreno ?? 2000);
  const [calificacion, setCalificacion] = useState(series?.calificacion ?? 8);
  const [plataforma, setPlataforma] = useState(series?.plataforma ?? "");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const resetForm = () => {
    setTitulo(series?.titulo ?? "");
    setGenero(series?.genero ?? "");
    setSinopsis(series?.sinopsis ?? "");
    setUrlPortada(series?.urlPortada ?? "");
    setEstreno(series?.estreno ?? 2024);
    setCalificacion(series?.calificacion ?? 8);
    setPlataforma(series?.plataforma ?? "");
    setErrors({});
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      resetForm();
    }
  };

  const validateField = (fieldName: string, fieldValue: string | number) => {
    const updatedPayload: PostSeriesRequest = {
      titulo: fieldName === "titulo" ? (fieldValue as string) : titulo,
      genero: fieldName === "genero" ? (fieldValue as string) : genero,
      sinopsis: fieldName === "sinopsis" ? (fieldValue as string) : sinopsis,
      urlPortada:
        fieldName === "urlPortada" ? (fieldValue as string) : urlPortada,
      estreno: fieldName === "estreno" ? (fieldValue as number) : estreno,
      calificacion:
        fieldName === "calificacion"
          ? (fieldValue as number)
          : calificacion,
      plataforma:
        fieldName === "plataforma" ? (fieldValue as string) : plataforma,
    };

    const result = safeParse(seriesSchema, updatedPayload);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.issues.forEach((issue) => {
        const field = issue.path?.[0]?.key;
        if (typeof field === "string" && field.length > 0) {
          fieldErrors[field] = issue.message;
        }
      });

      setErrors((prev) => ({
        ...prev,
        [fieldName]: fieldErrors[fieldName] || "",
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };

  const handleSubmit = async () => {
    const payload: PostSeriesRequest = {
      titulo,
      genero,
      sinopsis,
      urlPortada,
      estreno,
      calificacion,
      plataforma,
    };

    const result = safeParse(seriesSchema, payload);

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
      await createSeries(payload);
      alert("Serie creada exitosamente");
      resetForm();
      setIsOpen(false);
      onSuccess?.();
    } catch {
      alert("Error al crear la serie");
    }
  };

  const inputStyle =
    "mt-1 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200";

  return (
    <Dialog
      trigger={trigger}
      title={series ? "Editar serie" : "Crear serie"}
      description="Completa la información de la serie."
      size="md"
      open={isOpen}
      onOpenChange={handleOpenChange}
      footer={
        <div className="flex w-full items-center justify-end gap-3 border-t border-gray-100 pt-4">
          <DialogPrimitive.Close asChild>
            <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
              Cancelar
            </button>
          </DialogPrimitive.Close>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      }
    >
      <div className="mt-2 rounded-2xl border border-gray-100 bg-gray-50/70 p-4 md:p-5">
        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Título
            </label>
            <input
              className={inputStyle}
              placeholder="Titulo de la serie"
              value={titulo}
              onChange={(e) => {
                setTitulo(e.target.value);
                validateField("titulo", e.target.value);
              }}
            />
            {errors.titulo && (
              <p className="mt-1 text-xs text-red-500">{errors.titulo}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Género
            </label>
            <input
              className={inputStyle}
              placeholder="Ej: Drama, Comedia, Ciencia ficción..."
              value={genero}
              onChange={(e) => {
                setGenero(e.target.value);
                validateField("genero", e.target.value);
              }}
            />
            {errors.genero && (
              <p className="mt-1 text-xs text-red-500">{errors.genero}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Plataforma
            </label>
            <input
              className={inputStyle}
              placeholder="Ej: Netflix, Disney+, Amazon Prime...)"
              value={plataforma}
              onChange={(e) => {
                setPlataforma(e.target.value);
                validateField("plataforma", e.target.value);
              }}
            />
            {errors.plataforma && (
              <p className="mt-1 text-xs text-red-500">{errors.plataforma}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Estreno
            </label>
            <input
              type="number"
              className={inputStyle}
              value={estreno}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setEstreno(newValue);
                validateField("estreno", newValue);
              }}
            />
            {errors.estreno && (
              <p className="mt-1 text-xs text-red-500">{errors.estreno}</p>
            )}
          </div>

          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Calificación
            </label>
            <input
              type="number"
              step="0.1"
              className={inputStyle}
              value={calificacion}
              onChange={(e) => {
                const newValue = Number(e.target.value);
                setCalificacion(newValue);
                validateField("calificacion", newValue);
              }}
            />
            {errors.calificacion && (
              <p className="mt-1 text-xs text-red-500">{errors.calificacion}</p>
            )}
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              URL Portada
            </label>
            <input
              className={inputStyle}
              placeholder="https://..."
              value={urlPortada}
              onChange={(e) => {
                setUrlPortada(e.target.value);
                validateField("urlPortada", e.target.value);
              }}
            />
            {errors.urlPortada && (
              <p className="mt-1 text-xs text-red-500">{errors.urlPortada}</p>
            )}
          </div>

          {!!urlPortada && (
            <div className="col-span-1 md:col-span-2">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-600">
                Vista previa de portada
              </p>
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <img
                  src={urlPortada}
                  alt="Vista previa de portada"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
          )}

          <div className="col-span-1 md:col-span-2">
            <label className="text-xs font-semibold uppercase tracking-wide text-gray-600">
              Sinopsis
            </label>
            <textarea
              className={inputStyle + " resize-none"}
              rows={4}
              placeholder="Describe la serie..."
              value={sinopsis}
              onChange={(e) => {
                setSinopsis(e.target.value);
                validateField("sinopsis", e.target.value);
              }}
            />
            {errors.sinopsis && (
              <p className="mt-1 text-xs text-red-500">{errors.sinopsis}</p>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}
