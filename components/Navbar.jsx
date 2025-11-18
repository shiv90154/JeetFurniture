"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
  Menu,
  X,
  Home,
  Grid3X3,
  Tag,
  Info,
  Phone,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainColor = "#1A4C8B";
  const highlight = "#E66A1F";
  const lightBg = "#D8E4F5";

  const links = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { href: "/categories", label: "Categories", icon: <Grid3X3 className="w-4 h-4" /> },
    { href: "/offers", label: "Offers", icon: <Tag className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
    { href: "/contact", label: "Contact", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* ───────────────────────────────────────────────────────────── */}
      {/* TOP NAVBAR */}
      {/* ───────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50 border-b"
        style={{ borderColor: lightBg }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain rounded-md"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-[#1A1A1A]">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-1 hover:text-[#E66A1F] transition"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-[#1A4C8B]">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#1A4C8B]">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-[#1A4C8B]">
              <User className="w-5 h-5" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger className="md:hidden">
              {isMenuOpen ? (
                <X className="w-7 h-7 text-[#1A4C8B]" />
              ) : (
                <Menu className="w-7 h-7 text-[#1A4C8B]" />
              )}
            </SheetTrigger>

            <SheetContent side="right" className="p-0 w-full sm:max-w-md">
              {/* Mobile Menu Header */}
              <div
                className="p-5 border-b"
                style={{ backgroundColor: lightBg, borderColor: mainColor }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: mainColor }}
                  >
                    <span className="text-white font-bold text-xl">F</span>
                  </div>

                  <div>
                    <h2 className="font-bold text-xl" style={{ color: mainColor }}>
                      FurniMart
                    </h2>
                    <p className="text-sm">Your Furniture Store</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    style={{ borderColor: mainColor, color: mainColor }}
                  >
                    <User className="w-4 h-4 mr-2" /> Account
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1"
                    style={{ borderColor: highlight, color: highlight }}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" /> Cart (0)
                  </Button>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <div className="p-4 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#D8E4F5] hover:text-[#E66A1F] transition"
                  >
                    {link.icon}
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* BOTTOM NAV (Mobile Only) */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div
        className="fixed bottom-0 left-0 w-full border-t shadow-lg md:hidden z-40"
        style={{ backgroundColor: mainColor, borderColor: "#CBA35B" }}
      >
        <div className="flex justify-around items-center py-2 text-white">
          {[
            { href: "/", icon: <Home className="w-5 h-5" />, label: "Home" },
            { href: "/categories", icon: <Grid3X3 className="w-5 h-5" />, label: "Shop" },
            { href: "/search", icon: <Search className="w-5 h-5" />, label: "Search" },
            {
              href: "/cart",
              icon: <ShoppingCart className="w-5 h-5" />,
              label: "Cart",
              badge: 3,
            },
            { href: "/account", icon: <User className="w-5 h-5" />, label: "Account" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="relative flex flex-col items-center">
              {item.icon}
              {item.badge && (
                <span
                  className="absolute -top-1 -right-2 bg-[#E66A1F] text-white text-xs w-4 h-4 rounded-full flex items-center justify-center"
                >
                  {item.badge}
                </span>
              )}
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="pb-16 md:pb-0" />
    </>
  );
}
