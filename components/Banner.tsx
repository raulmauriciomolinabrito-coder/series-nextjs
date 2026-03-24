import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-linear-to-r from-blue-700 via-indigo-600 to-purple-600 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div>
          <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-blue-100">
            Plataforma de Gestión
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            NextFLIX una plataforma para gestionar series de forma simple y moderna
          </h1>
          <p className="mb-8 text-lg text-blue-100">
            Lista, crea y elimina series con formularios validados y una
            experiencia moderna con Next.js.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/series"
              className="rounded-lg bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-gray-100"
            >
              Gestionar Series
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20"
            >
              Conocer Proyecto
            </Link>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
            alt="Colección de series"
            className="h-[340px] w-full rounded-2xl object-cover shadow-2xl"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 rounded-lg bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            + Catálogo de series actualizado regularmente
          </div>
        </div>
      </div>
    </section>
  );
}
