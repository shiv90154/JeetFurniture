import ProductCard from "@/components/ProductCard";

export default function CategoryPage({ category, products }) {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-4 pb-20">
      <h1 className="text-3xl font-bold text-slate-900 mb-6">
        {category.name}
      </h1>

      <img
        src={category.image}
        className="w-full h-[260px] object-cover rounded-lg mb-10"
      />

      {products.length === 0 ? (
        <p className="text-slate-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
