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

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 border-b"
        style={{ borderColor: "#D8E4F5" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.jpg" 
                alt="Logo"
                width={40} 
                height={40}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className="hidden md:flex gap-6 font-medium"
            style={{ color: "#1A1A1A" }}
          >
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-orange-600"
              style={{ color: "#1A1A1A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E66A1F")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#1A1A1A")}
            >
              <Home className="w-4 h-4" />
              Home
            </Link>
            <Link
              href="/categories"
              className="flex items-center gap-1 transition-colors hover:text-orange-600"
              style={{ color: "#1A1A1A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E66A1F")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#1A1A1A")}
            >
              <Grid3X3 className="w-4 h-4" />
              Categories
            </Link>
            <Link
              href="/offers"
              className="flex items-center gap-1 transition-colors hover:text-orange-600"
              style={{ color: "#1A1A1A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E66A1F")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#1A1A1A")}
            >
              <Tag className="w-4 h-4" />
              Offers
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-1 transition-colors hover:text-orange-600"
              style={{ color: "#1A1A1A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E66A1F")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#1A1A1A")}
            >
              <Info className="w-4 h-4" />
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-1 transition-colors hover:text-orange-600"
              style={{ color: "#1A1A1A" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#E66A1F")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#1A1A1A")}
            >
              <Phone className="w-4 h-4" />
              Contact
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              style={{ color: "#1A4C8B" }}
            >
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              style={{ color: "#1A4C8B" }}
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              style={{ color: "#1A4C8B" }}
            >
              <User className="w-5 h-5" />
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger className="md:hidden">
                {isMenuOpen ? (
                  <X className="w-6 h-6" style={{ color: "#1A4C8B" }} />
                ) : (
                  <Menu className="w-6 h-6" style={{ color: "#1A4C8B" }} />
                )}
              </SheetTrigger>

              <SheetContent side="right" className="p-0 w-full sm:max-w-md">
                {/* Mobile Menu Header */}
                <div
                  className="p-6 border-b"
                  style={{ backgroundColor: "#D8E4F5", borderColor: "#1A4C8B" }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#1A4C8B" }}
                    >
                      <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <div>
                      <h2
                        className="font-bold text-lg"
                        style={{ color: "#1A4C8B" }}
                      >
                        FurniMart
                      </h2>
                      <p className="text-sm" style={{ color: "#1A1A1A" }}>
                        Your Furniture Store
                      </p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      style={{ borderColor: "#1A4C8B", color: "#1A4C8B" }}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Account
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      style={{ borderColor: "#E66A1F", color: "#E66A1F" }}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Cart (0)
                    </Button>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="p-4">
                  <div className="space-y-1">
                    <Link
                      href="/"
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                      style={{
                        color: "#1A1A1A",
                        backgroundColor: "transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#E66A1F";
                        e.currentTarget.style.backgroundColor = "#D8E4F5";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#1A1A1A";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Home className="w-5 h-5" />
                      <span className="font-medium">Home</span>
                    </Link>

                    <Link
                      href="/categories"
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                      style={{
                        color: "#1A1A1A",
                        backgroundColor: "transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#E66A1F";
                        e.currentTarget.style.backgroundColor = "#D8E4F5";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#1A1A1A";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Grid3X3 className="w-5 h-5" />
                      <span className="font-medium">Categories</span>
                    </Link>

                    <Link
                      href="/offers"
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                      style={{
                        color: "#1A1A1A",
                        backgroundColor: "transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#E66A1F";
                        e.currentTarget.style.backgroundColor = "#D8E4F5";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#1A1A1A";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Tag className="w-5 h-5" />
                      <span className="font-medium">Offers</span>
                      <span
                        className="ml-auto text-xs px-2 py-1 rounded-full"
                        style={{ backgroundColor: "#E66A1F", color: "#FFFFFF" }}
                      >
                        Hot
                      </span>
                    </Link>

                    <Link
                      href="/about"
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                      style={{
                        color: "#1A1A1A",
                        backgroundColor: "transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#E66A1F";
                        e.currentTarget.style.backgroundColor = "#D8E4F5";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#1A1A1A";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Info className="w-5 h-5" />
                      <span className="font-medium">About Us</span>
                    </Link>

                    <Link
                      href="/contact"
                      className="flex items-center gap-3 p-3 rounded-lg transition-colors"
                      style={{
                        color: "#1A1A1A",
                        backgroundColor: "transparent",
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.color = "#E66A1F";
                        e.currentTarget.style.backgroundColor = "#D8E4F5";
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.color = "#1A1A1A";
                        e.currentTarget.style.backgroundColor = "transparent";
                      }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">Contact</span>
                    </Link>
                  </div>

                  {/* Additional Mobile Sections */}
                  <div
                    className="mt-6 pt-6 border-t"
                    style={{ borderColor: "#D8E4F5" }}
                  >
                    <h3
                      className="font-semibold mb-3 px-3"
                      style={{ color: "#1A4C8B" }}
                    >
                      Quick Links
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/track-order"
                        className="block p-3 rounded-lg text-sm transition-colors"
                        style={{
                          color: "#1A1A1A",
                          backgroundColor: "transparent",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#E66A1F";
                          e.currentTarget.style.backgroundColor = "#D8E4F5";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "#1A1A1A";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        Track Your Order
                      </Link>
                      <Link
                        href="/support"
                        className="block p-3 rounded-lg text-sm transition-colors"
                        style={{
                          color: "#1A1A1A",
                          backgroundColor: "transparent",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#E66A1F";
                          e.currentTarget.style.backgroundColor = "#D8E4F5";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "#1A1A1A";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        Customer Support
                      </Link>
                      <Link
                        href="/returns"
                        className="block p-3 rounded-lg text-sm transition-colors"
                        style={{
                          color: "#1A1A1A",
                          backgroundColor: "transparent",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#E66A1F";
                          e.currentTarget.style.backgroundColor = "#D8E4F5";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "#1A1A1A";
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        Returns & Refunds
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Like Phone Apps */}
      <div
        className="fixed bottom-0 left-0 w-full border-t shadow-lg md:hidden z-40"
        style={{ backgroundColor: "#1A4C8B", borderColor: "#CBA35B" }}
      >
        <div className="flex justify-around items-center py-2">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 p-2 transition-colors"
            style={{ color: "#FFFFFF" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CBA35B")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </Link>

          <Link
            href="/categories"
            className="flex flex-col items-center gap-1 p-2 transition-colors"
            style={{ color: "#FFFFFF" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CBA35B")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <Grid3X3 className="w-5 h-5" />
            <span className="text-xs">Shop</span>
          </Link>

          <Link
            href="/search"
            className="flex flex-col items-center gap-1 p-2 transition-colors"
            style={{ color: "#FFFFFF" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CBA35B")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs">Search</span>
          </Link>

          <Link
            href="/cart"
            className="flex flex-col items-center gap-1 p-2 relative transition-colors"
            style={{ color: "#FFFFFF" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CBA35B")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="text-xs">Cart</span>
            <span
              className="absolute -top-1 -right-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
              style={{ backgroundColor: "#E66A1F" }}
            >
              3
            </span>
          </Link>

          <Link
            href="/account"
            className="flex flex-col items-center gap-1 p-2 transition-colors"
            style={{ color: "#FFFFFF" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#CBA35B")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#FFFFFF")}
          >
            <User className="w-5 h-5" />
            <span className="text-xs">Account</span>
          </Link>
        </div>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="pb-16 md:pb-0"></div>
    </>
  );
}
