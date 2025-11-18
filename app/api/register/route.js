import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { hashPassword } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  const { name, email, password } = await req.json();

  const exists = await User.findOne({ email });
  if (exists) {
    return Response.json({ success: false, message: "User already exists" });
  }

  const hashed = await hashPassword(password);

  await User.create({ name, email, password: hashed });

  return Response.json({
    success: true,
    message: "Account created successfully",
  });
}
