import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <Navbar />
        <CartProvider>
           <WishlistProvider>
          {children}
          </WishlistProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
