import { decodeToken } from "@/lib/auth";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function GET(req) {
  await connectDB();

  const token = req.cookies.get("token")?.value;
  if (!token) return Response.json({ user: null });

  const decoded = decodeToken(token);
  if (!decoded) return Response.json({ user: null });

  const user = await User.findById(decoded.id).select("-password");
  return Response.json({ user });
}
