import categories from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import slugify from "@/utils/slugify";

export default function CategoriesPage() {
  return (
    <div className="pt-24 pb-16 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-slate-900">All Categories</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {categories.map((item) => (
          <a key={item.id} href={`/categories/${slugify(item.name)}`}>
            <CategoryCard item={item} />
          </a>
        ))}
      </div>
    </div>
  );
}
