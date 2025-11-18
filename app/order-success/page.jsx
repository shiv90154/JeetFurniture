"use client";

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="pt-24 p-4 text-center">
      <h1 className="text-3xl font-bold text-green-600">Order Placed Successfully! 🎉</h1>

      <p className="mt-4 text-slate-600">
        Thank you for your order. We will process it soon.
      </p>

      <Link
        href="/"
        className="inline-block mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
