"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function CheckoutSummary({ cart, address }) {
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

 const placeOrder = async () => {
  if (!address) {
    alert("Please add shipping address!");
    return;
  }

  const orderData = { cart, address, total };

  const res = await fetch("/api/order", {
    method: "POST",
    body: JSON.stringify({
      items: cart,
      address,
      totalAmount: total,
    }),
  });

  const data = await res.json();

  if (data.success) {
    router.push(`/order/${data.orderId}`);
  }
};


  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-4">
      <p className="text-lg font-semibold">Total Items: {cart.length}</p>

      <p className="text-xl font-bold text-orange-600">Total: ₹{total}</p>

      <Button
        onClick={placeOrder}
        className="w-full bg-orange-600 hover:bg-orange-700"
      >
        Place Order
      </Button>
    </div>
  );
}
