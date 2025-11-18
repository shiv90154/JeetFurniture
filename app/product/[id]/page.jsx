import products from "@/data/products";

export default function ProductPage({ params }) {
  const productId = params.id;

  const product = products.find(
    (p) => String(p.id) === String(productId)
  );

  if (!product) {
    return <div className="pt-24 p-4 text-red-600">Product Not Found</div>;
  }

  return (
    <div className="pt-24 p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <img
        src={product.image}
        className="w-80 mt-4 rounded-lg"
        alt={product.name}
      />

      <p className="text-xl mt-4 text-orange-600 font-semibold">
        ₹{product.price}
      </p>

      <p className="text-slate-700 mt-4">
        Category: {product.category}
      </p>
    </div>
  );
}
