import { Card } from "@/components/ui/card";

export default function CategoryCard({ item }) {
  return (
    <Card className="p-3 hover:shadow-md transition cursor-pointer bg-white">
      <img src={item.image} className="rounded-md w-full h-36 object-cover" />
      <h3 className="mt-2 font-semibold text-slate-800">{item.name}</h3>
    </Card>
  );
}
