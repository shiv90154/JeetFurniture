import categories from "@/data/categories";
import products from "@/data/products";
import CategoryPage from "@/components/CategoryPage";
import slugify from "@/utils/slugify";

export function generateStaticParams() {
  return categories.map((c) => ({
    slug: slugify(c.name),
  }));
}

export default function SingleCategoryPage({ params }) {
  const slug = params.slug;

  const category = categories.find(
    (c) => slugify(c.name) === slug
  );

  if (!category) {
    return <div className="pt-24 p-4 text-red-600">Category not found!</div>;
  }

  const filteredProducts = products.filter(
    (p) => p.category === category.name
  );

  return (
    <CategoryPage
      category={category}
      products={filteredProducts}
    />
  );
}
