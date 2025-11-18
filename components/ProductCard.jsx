import { Card, CardContent } from "@/components/ui/card";

export default function ProductCard({ product }) {
  return (
    <Card className="hover:shadow-lg transition bg-white">
      <img
        src={product.image}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-slate-900">
          {product.name}
        </h3>
        <p className="text-orange-600 font-bold text-xl mt-1">
          ₹{product.price}
        </p>
      </CardContent>
    </Card>
  );
}
