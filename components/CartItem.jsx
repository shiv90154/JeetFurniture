"use client";

import { useCart } from "@/context/CartContext";

export default function CartItem({ item }) {
  const { removeFromCart, updateQty } = useCart();

  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-slate-900">{item.name}</h3>
        <p className="text-orange-600 font-bold">₹{item.price}</p>
      </div>

      {/* Quantity */}
      <select
        value={item.qty}
        onChange={(e) => updateQty(item.id, Number(e.target.value))}
        className="border p-1 rounded"
      >
        {[1, 2, 3, 4, 5].map((n) => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>

      {/* Remove */}
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-600 font-semibold"
      >
        Remove
      </button>
    </div>
  );
}
