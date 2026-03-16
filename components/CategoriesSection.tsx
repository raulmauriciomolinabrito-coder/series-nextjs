import * as ScrollArea from "@radix-ui/react-scroll-area";
import CategoryBubble from "./CategoryBubble";

export default function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
        Explorar por categoria
      </h2>
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          <div className="flex gap-8 md:gap-12 justify-start md:justify-center">
            <CategoryBubble title="Electronic" emoji="🔌" />
            <CategoryBubble title="Jewelery" emoji="💍" />
            <CategoryBubble title="Men's Clothing" emoji="👕" />
            <CategoryBubble title="Women's Clothing" emoji="👗" />
            <CategoryBubble title="Books" emoji="📚" />
            <CategoryBubble title="Toys" emoji="🧸" />
            <CategoryBubble title="Sports" emoji="⚽" />
            <CategoryBubble title="Home" emoji="🏠" />
            <CategoryBubble title="Garden" emoji="🌿" />
            <CategoryBubble title="Automotive" emoji="🚗" />
          </div>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </section>
  );
}
