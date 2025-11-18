export function buildSEO({
  title = "FurniMart — Premium Furniture Store",
  description = "Buy premium furniture online. Best quality sofas, beds, dining tables & wardrobes.",
  keywords = ["furniture", "sofa", "beds", "wardrobe", "dining table"],
  image = "/brand/cover.jpg",
  url = "https://furnimart.com",
}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
      url,
      siteName: "FurniMart",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
