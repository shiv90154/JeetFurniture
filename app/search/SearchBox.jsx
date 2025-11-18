"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function SearchBox({ defaultValue = "" }) {
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      router.push(`/search?q=${e.target.value}`);
    }
  };

  return (
    <Input
      defaultValue={defaultValue}
      placeholder="Search for sofas, beds, furniture..."
      className="w-full md:w-1/2 mb-6"
      onKeyDown={handleSearch}
    />
  );
}
