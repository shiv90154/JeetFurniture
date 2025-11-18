"use client";

import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";

export default function CartPage() {
  const { cart, clearCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="pt-24 max-w-4xl mx-auto p-4 pb-16">

      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 p-4 rounded-lg bg-white shadow">
            <p className="text-xl font-semibold">
              Total: ₹{total}
            </p>
            <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}
