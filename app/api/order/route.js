import { connectDB } from "@/lib/db";
import Order from "@/models/Order";
import { decodeToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  const token = req.cookies.get("token")?.value;
  const user = decodeToken(token);

  const { items, address, totalAmount } = await req.json();

  const order = await Order.create({
    userId: user.id,
    items,
    address,
    totalAmount,
  });

  return Response.json({ success: true, orderId: order._id });
}
