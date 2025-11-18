import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import { decodeToken } from "@/lib/auth";

export async function GET(req) {
  await connectDB();

  const token = req.cookies.get("token")?.value;
  const user = decodeToken(token);

  const orders = await Order.find({ userId: user.id }).sort({ createdAt: -1 });

  return Response.json({ orders });
}
