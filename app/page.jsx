import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";

import categories from "@/data/categories";
import products from "@/data/products";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-20 pb-16 bg-slate-50 min-h-screen">

        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4">
          <HeroBanner />
        </section>

        {/* CATEGORIES */}
        <section className="max-w-7xl mx-auto mt-10 px-4">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            Shop By Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {categories.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* TRENDING PRODUCTS */}
        <section className="max-w-7xl mx-auto mt-12 px-4">
          <h2 className="text-2xl font-bold mb-4 text-slate-800">
            Trending Furniture
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
