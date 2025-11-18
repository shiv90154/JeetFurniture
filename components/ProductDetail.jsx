import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ProductDetail({ product }) {
  return (
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* LEFT — PRODUCT IMAGE */}
      <Card className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover"
        />
      </Card>

      {/* RIGHT — PRODUCT DETAILS */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>

        <p className="text-orange-600 text-3xl font-bold mt-3">
          ₹{product.price}
        </p>

        <p className="mt-4 text-slate-600 leading-relaxed">
          {product.description || "Premium quality wooden furniture for modern homes."}
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <Button className="bg-orange-600 hover:bg-orange-700">
            Add to Cart
          </Button>
          <Button variant="outline">Buy Now</Button>
        </div>

        {/* Highlights */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Highlights</h2>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>Premium wooden material</li>
            <li>1-year warranty</li>
            <li>Free delivery in Himachal Pradesh</li>
            <li>Cash on delivery available</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
