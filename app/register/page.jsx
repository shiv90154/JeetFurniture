"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setMsg(data.message);
    setLoading(false);

    if (data.success) {
      window.location.href = "/login";
    }
  };

  return (
    <div className="pt-24 pb-16 max-w-lg mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>

      <form onSubmit={registerUser} className="space-y-5">
        <Input name="name" placeholder="Full Name" required />
        <Input name="email" placeholder="Email" required />
        <Input type="password" name="password" placeholder="Password" required />

        <Button className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Register"}
        </Button>

        {msg && <p className="text-center text-slate-600 mt-2">{msg}</p>}

        <p className="mt-3 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="text-orange-600 font-medium">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
    