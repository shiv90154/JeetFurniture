"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMsg(data.message);
    setLoading(false);

    if (data.success) {
      window.location.href = "/profile";
    }
  };

  return (
    <div className="pt-24 pb-16 max-w-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Login</h1>

      <form onSubmit={loginUser} className="space-y-5">
        <Input name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />

        <Button className="w-full" disabled={loading}>
          {loading ? "Please wait..." : "Login"}
        </Button>

        {msg && <p className="text-center text-slate-600 mt-2">{msg}</p>}

        <p className="mt-3 text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-orange-600 font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
