"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`/api/search?q=${query}`);
      const data = await res.json();
      setResults(data.products || []);
    };
    load();
  }, [query]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Results for: “{query}”
      </h2>

      {results.length === 0 ? (
        <p className="text-slate-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {results.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
