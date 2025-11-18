import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: "#1A4C8B" }}>
      {/* Top: Brand + Short Info */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold" style={{ color: "#CBA35B" }}>
              FurniMart
            </h2>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#D8E4F5" }}>
              Premium furniture at affordable prices.  
              Style, comfort & quality delivered across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Categories", href: "/categories" },
                { name: "Offers", href: "/offers" },
                { name: "Contact Us", href: "/contact" },
                { name: "About Us", href: "/about" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="hover:text-orange-400 transition"
                    style={{ color: "#D8E4F5" }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: "#CBA35B" }} />
                <span style={{ color: "#D8E4F5" }}>support@furnimart.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" style={{ color: "#CBA35B" }} />
                <span style={{ color: "#D8E4F5" }}>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" style={{ color: "#CBA35B" }} />
                <span style={{ color: "#D8E4F5" }}>Himachal Pradesh, India</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Youtube].map((Icon, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-orange-500 transition"
                  style={{ backgroundColor: "#1A1A1A" }}
                >
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t" style={{ borderColor: "#CBA35B" }}>
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm" style={{ color: "#D8E4F5" }}>
          © {new Date().getFullYear()} FurniMart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
