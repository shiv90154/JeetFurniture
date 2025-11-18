"use client";

import { useEffect, useState } from "react";

export default function OrderDetailPage({ params }) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function loadOrder() {
      const res = await fetch(`/api/orders?id=${params.id}`);
      const data = await res.json();
      setOrder(data.order);
    }
    loadOrder();
  }, []);

  if (!order) return <div className="pt-24 p-6">Loading...</div>;

  return (
    <div className="pt-24 max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Order #{order._id}</h1>

      <p className="mb-2 text-slate-600">Status: {order.status}</p>

      <h2 className="text-xl font-bold mt-6">Items</h2>
      <div className="space-y-3 mt-3">
        {order.items.map((item) => (
          <div key={item.id} className="p-3 bg-white shadow rounded">
            <p className="font-semibold">{item.name}</p>
            <p>₹{item.price} × {item.qty}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">Shipping Address</h2>
      <p className="mt-2">
        {order.address.name}, {order.address.address}, {order.address.city} - {order.address.pin}
      </p>

      <h2 className="text-xl font-bold mt-6">
        Total Amount: ₹{order.totalAmount}
      </h2>
    </div>
  );
}
