import offers from "@/data/offers";
import products from "@/data/products";
import OffersPage from "@/components/OffersPage";

export default function Offers() {
  return (
    <div className="pt-24 pb-16">
      <OffersPage offers={offers} products={products} />
    </div>
  );
}
