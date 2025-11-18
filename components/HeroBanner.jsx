import { Card } from "@/components/ui/card";

export default function HeroBanner() {
  return (
    <Card className="overflow-hidden">
      <img
        src="/banners/main.jpg"
        className="w-full h-[350px] object-cover"
        alt="Hero Banner"
      />
    </Card>
  );
}
