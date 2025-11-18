"use client";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import CheckoutAddressForm from "@/components/CheckoutAddressForm";
import CheckoutSummary from "@/components/CheckoutSummary";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("address");
    if (saved) setAddress(JSON.parse(saved));
  }, []);

  if (cart.length === 0) {
    return <div className="pt-24 p-4">Your cart is empty.</div>;
  }

  return (
    <div className="pt-24 max-w-6xl mx-auto p-4 pb-20 grid md:grid-cols-2 gap-10">

      {/* LEFT: ADDRESS */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
        <CheckoutAddressForm setAddress={setAddress} />
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <CheckoutSummary cart={cart} address={address} />
      </div>
    </div>
  );
}
