export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  rate: {
    rate: number;
    count: number;
  };
  category: string;
};
export const products: Product[] = [
  {
    id: 1,
    title: "Laptop Pro X",
    price: 1299,

    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    description: "Potencia profesional para desarrolladores exigentes.",
    rate: {
      rate: 4.5,
      count: 120,
    },
    category: "Electronics",
  },
  {
    id: 2,
    title: "Smartphone Elite",
    price: 899,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Rendimiento y diseño en la palma de tu mano.",
    rate: {
      rate: 4.2,
      count: 95,
    },
    category: "Electronics",
  },
  {
    id: 3,
    title: "Headphones Studio",
    price: 299,
    image: "https://images.unsplash.com/photo-1518441902117-4b4f16b3dc8a",
    description: "Sonido profesional para trabajo y entretenimiento.",
    rate: {
      rate: 4.0,
      count: 80,
    },
    category: "Electronics",
  },
];
