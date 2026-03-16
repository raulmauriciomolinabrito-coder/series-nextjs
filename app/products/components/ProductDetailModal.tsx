import Dialog from "@/components/Dialog";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
};

type Props = {
  product: Product;
  trigger: React.ReactNode;
};

export default function ProductDetailModal({ product, trigger }: Props) {
  return (
    <Dialog
      trigger={trigger}
      title={product.title}
      description={product.description}
      image={product.image}
      size="md"
      footer={<p className="font-semibold text-lg">${product.price}</p>}
    >
      <div>Información detallada del producto</div>
    </Dialog>
  );
}
