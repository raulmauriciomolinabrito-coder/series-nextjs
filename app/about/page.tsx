import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <section className="mx-auto max-w-6xl">
        <div className="mb-10 rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 p-8 text-white shadow-lg">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-100">
            Sobre NextFLIX
          </p>
          <h1 className="text-3xl font-bold md:text-4xl">
            Una plataforma para gestionar series de forma simple y moderna
          </h1>
          <p className="mt-4 max-w-3xl text-blue-100">
            NextFLIX nace como proyecto práctico para aplicar arquitectura con
            Next.js, consumo de APIs reales y validación de formularios.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Misión</h2>
            <p className="text-sm leading-6 text-gray-600">
              Facilitar la administración de catálogos de series con una
              experiencia clara, rápida y enfocada en productividad.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Stack</h2>
            <p className="text-sm leading-6 text-gray-600">
              Construido con Next.js, componentes reutilizables con Radix UI y
              validaciones robustas con Valibot.
            </p>
          </article>

          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-3 text-lg font-semibold text-gray-900">Objetivo</h2>
            <p className="text-sm leading-6 text-gray-600">
              Integrar buenas prácticas de estructura profesional: hooks,
              services, interfaces y rutas por módulos.
            </p>
          </article>
        </div>

        <section className="mt-10 rounded-xl border border-gray-200 bg-gray-50 p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            ¿Qué puedes hacer en NextFLIX?
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-gray-700 md:grid-cols-2">
            <li className="rounded-lg bg-white p-3 shadow-sm">Listar series desde una API pública</li>
            <li className="rounded-lg bg-white p-3 shadow-sm">Crear nuevas series con formulario validado</li>
            <li className="rounded-lg bg-white p-3 shadow-sm">Eliminar series de la base de datos</li>
            <li className="rounded-lg bg-white p-3 shadow-sm">Navegar por una interfaz limpia y responsive</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
