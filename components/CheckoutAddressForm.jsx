"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CheckoutAddressForm({ setAddress }) {
  const [msg, setMsg] = useState("");

  const saveAddress = (e) => {
    e.preventDefault();

    const addr = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      city: e.target.city.value,
      pin: e.target.pin.value,
    };

    localStorage.setItem("address", JSON.stringify(addr));
    setAddress(addr);
    setMsg("Address Saved!");
  };

  return (
    <form onSubmit={saveAddress} className="space-y-4 bg-white p-4 shadow rounded-lg">

      <Input name="name" placeholder="Full Name" required />
      <Input name="phone" placeholder="Phone" required />

      <Input name="address" placeholder="Full Address" required />
      <Input name="city" placeholder="City" required />
      <Input name="pin" placeholder="Pincode" required />

      <Button className="w-full bg-orange-600 hover:bg-orange-700">
        Save Address
      </Button>

      {msg && <p className="text-green-600 text-sm text-center">{msg}</p>}
    </form>
  );
}
