import products from "@/data/products";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  const results = products.filter((item) =>
    item.name.toLowerCase().includes(q)
  );

  return Response.json({
    success: true,
    products: results,
  });
}
