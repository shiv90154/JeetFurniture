import { decodeToken, verifyPassword, hashPassword } from "@/lib/auth";
import User from "@/models/User";
import { connectDB } from "@/lib/db";

export async function POST(req) {
  await connectDB();

  const token = req.cookies.get("token")?.value;
  const decoded = decodeToken(token);
  const { oldPassword, newPassword } = await req.json();

  const user = await User.findById(decoded.id);

  const match = await verifyPassword(oldPassword, user.password);
  if (!match) {
    return Response.json({ success: false, message: "Old password is incorrect" });
  }

  user.password = await hashPassword(newPassword);
  await user.save();

  return Response.json({ success: true, message: "Password changed" });
}
