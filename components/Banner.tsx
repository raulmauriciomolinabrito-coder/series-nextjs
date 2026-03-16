import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-purple-500 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex fle-row gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Encuentra los mejores productos
          </h1>
          <p className="text-lg text-blue-100 mb-8">
            Descubre nuestra colección de productos con los mejores precios y la
            mejor claidad
          </p>
          <Link
            href="/products"
            className="bg-white text-blue-600 hover:bg-gray-200 font-bold py-3 px-6 rounded-lg transition"
          >
            Ver Productos
          </Link>
        </div>
        <div>
          <Image
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="Producto"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
