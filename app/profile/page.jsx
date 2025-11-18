"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState("");

  // Fetch current user
  useEffect(() => {
    async function loadUser() {
      const res = await fetch("/api/me");
      const data = await res.json();
      setUser(data.user);
    }
    loadUser();
  }, []);

  // Update user
  const updateProfile = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/profile", {
      method: "PUT",
      body: JSON.stringify({
        name: e.target.name.value,
      }),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  // Logout
  const logout = async () => {
    await fetch("/api/logout");
    window.location.href = "/login";
  };

  if (!user) {
    return <div className="pt-24 p-4">Loading...</div>;
  }

  return (
    <div className="pt-24 pb-20 max-w-xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <form onSubmit={updateProfile} className="space-y-5">

        <Input name="name" defaultValue={user.name} required />

        <Input value={user.email} disabled className="opacity-70" />

        <Button className="w-full">Update Profile</Button>

        {msg && <p className="text-center text-green-600">{msg}</p>}
      </form>

      <Button
        onClick={logout}
        className="mt-6 w-full bg-red-600 hover:bg-red-700"
      >
        Logout
      </Button>
    </div>
  );
}
