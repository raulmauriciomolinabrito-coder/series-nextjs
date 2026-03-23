import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-800 bg-gray-950 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-bold text-white">NextFLIX</h3>

          <p className="text-sm text-gray-400">
            Plataforma de gestión de series construida con Next.js, Radix UI y
            validaciones con Valibot.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Navegación</h4>

          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="transition hover:text-white">
                Inicio
              </Link>
            </li>

            <li>
              <Link href="/series" className="transition hover:text-white">
                Series
              </Link>
            </li>

            <li>
              <Link href="/about" className="transition hover:text-white">
                Acerca de
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Contacto</h4>

          <p className="text-sm text-gray-400">soporte@nextflix.com</p>

          <p className="text-sm text-gray-400">La Paz, Bolivia</p>
        </div>
      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NextFLIX — Todos los derechos reservados
      </div>
    </footer>
  );
}
