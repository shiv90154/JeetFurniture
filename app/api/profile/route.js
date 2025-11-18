import { decodeToken } from "@/lib/auth";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function PUT(req) {
  await connectDB();

  const token = req.cookies.get("token")?.value;
  const decoded = decodeToken(token);

  const { name } = await req.json();

  await User.findByIdAndUpdate(decoded.id, { name });

  return Response.json({ success: true, message: "Profile updated" });
}
