"use client";

import Dialog from "@/components/Dialog";

type SeriesModalProps = {
  title: string;
  description: string;
};

export default function SeriesModal({ title, description }: SeriesModalProps) {
  return (
    <Dialog
      trigger={
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Ver Detalles
        </button>
      }
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </Dialog>
  );
}
