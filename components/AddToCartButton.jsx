"use client";

import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <Button
      onClick={() => addToCart(product)}
      className="bg-orange-600 hover:bg-orange-700"
    >
      Add to Cart
    </Button>
  );
}
