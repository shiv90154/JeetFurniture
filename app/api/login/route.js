import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { verifyPassword, generateToken } from "@/lib/auth";

export async function POST(req) {
  await connectDB();

  const { email, password } = await req.json();
  const user = await User.findOne({ email });

  if (!user) {
    return Response.json({ success: false, message: "Invalid email" });
  }

  const match = await verifyPassword(password, user.password);
  if (!match) {
    return Response.json({ success: false, message: "Incorrect password" });
  }

  const token = generateToken(user);

  return new Response(
    JSON.stringify({ success: true, message: "Login successful" }),
    {
      status: 200,
      headers: {
        "Set-Cookie": `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=604800`,
      },
    }
  );
}
