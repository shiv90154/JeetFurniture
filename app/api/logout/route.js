export function GET() {
  return new Response("Logout successfully", {
    status: 200,
    headers: {
      "Set-Cookie": `token=; Path=/; HttpOnly; Max-Age=0`,
    },
  });
}
