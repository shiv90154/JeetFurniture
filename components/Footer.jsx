import Link from "next/link";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Truck,
  CreditCard,
  HeadphonesIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
    { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
    { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Offers", href: "/offers" },
    { name: "New Arrivals", href: "/new" },
    { name: "Best Sellers", href: "/bestsellers" }
  ];

  const customerCare = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "My Account", href: "/account" },
    { name: "Order Tracking", href: "/track-order" },
    { name: "Wishlist", href: "/wishlist" }
  ];

  const policies = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Return Policy", href: "/returns" },
    { name: "FAQ", href: "/faq" }
  ];

  return (
    <footer style={{backgroundColor: '#1A4C8B'}} className="text-white">
      {/* Trust Badges */}
      <div style={{borderColor: '#D8E4F5'}} className="border-b">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div style={{backgroundColor: '#D8E4F5'}} className="w-10 h-10 rounded-full flex items-center justify-center">
                <Truck style={{color: '#1A4C8B'}} className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Free Shipping</p>
                <p style={{color: '#D8E4F5'}} className="text-sm">Above ₹4999</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div style={{backgroundColor: '#D8E4F5'}} className="w-10 h-10 rounded-full flex items-center justify-center">
                <CreditCard style={{color: '#1A4C8B'}} className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">Secure Payment</p>
                <p style={{color: '#D8E4F5'}} className="text-sm">100% Protected</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div style={{backgroundColor: '#D8E4F5'}} className="w-10 h-10 rounded-full flex items-center justify-center">
                <Shield style={{color: '#1A4C8B'}} className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">1 Year Warranty</p>
                <p style={{color: '#D8E4F5'}} className="text-sm">Quality Assured</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div style={{backgroundColor: '#D8E4F5'}} className="w-10 h-10 rounded-full flex items-center justify-center">
                <HeadphonesIcon style={{color: '#1A4C8B'}} className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-white">24/7 Support</p>
                <p style={{color: '#D8E4F5'}} className="text-sm">Always Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
          
          {/* Brand & Newsletter */}
          <div className="xl:col-span-2 space-y-6">
            <div>
              <Link href="/" style={{color: '#CBA35B'}} className="text-3xl font-bold inline-block">
                FurniMart
              </Link>
              <p style={{color: '#D8E4F5'}} className="mt-4 leading-relaxed max-w-md">
                Transforming houses into homes with premium furniture. We deliver comfort, 
                style, and quality across India with a commitment to exceptional customer experience.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-lg">Stay Updated</h3>
              <p style={{color: '#D8E4F5'}} className="text-sm">
                Subscribe for exclusive offers and new arrivals
              </p>
              <div className="flex gap-2 max-w-md">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  style={{backgroundColor: '#1A1A1A', borderColor: '#CBA35B', color: '#FFFFFF'}}
                  className="placeholder-gray-400"
                />
                <Button style={{backgroundColor: '#E66A1F'}} className="hover:bg-orange-700 text-white">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  style={{backgroundColor: '#1A1A1A'}}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-orange-600"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    style={{color: '#D8E4F5'}}
                    className="hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight style={{color: '#E66A1F'}} className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Customer Care</h3>
            <ul className="space-y-3">
              {customerCare.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    style={{color: '#D8E4F5'}}
                    className="hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight style={{color: '#E66A1F'}} className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Policies</h3>
            <ul className="space-y-3">
              {policies.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    style={{color: '#D8E4F5'}}
                    className="hover:text-orange-600 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight style={{color: '#E66A1F'}} className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail style={{color: '#CBA35B'}} className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p style={{color: '#D8E4F5'}} className="text-sm">support@furnimart.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone style={{color: '#CBA35B'}} className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p style={{color: '#D8E4F5'}} className="text-sm">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin style={{color: '#CBA35B'}} className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p style={{color: '#D8E4F5'}} className="text-sm">Himachal Pradesh, India</p>
                </div>
              </div>
            </div>

            {/* App Download Badges */}
            <div className="mt-6 space-y-3">
              <p className="text-white font-medium text-sm">Download Our App</p>
              <div className="flex gap-2">
                <Link href="#" className="flex-1">
                  <div style={{backgroundColor: '#1A1A1A'}} className="w-full h-10 rounded flex items-center justify-center">
                    <span style={{color: '#CBA35B'}} className="text-sm font-bold">Google Play</span>
                  </div>
                </Link>
                <Link href="#" className="flex-1">
                  <div style={{backgroundColor: '#1A1A1A'}} className="w-full h-10 rounded flex items-center justify-center">
                    <span style={{color: '#CBA35B'}} className="text-sm font-bold">App Store</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{borderColor: '#CBA35B'}} className="border-t">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div style={{color: '#D8E4F5'}} className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} FurniMart. All Rights Reserved.
            </div>
            
            <div style={{color: '#D8E4F5'}} className="flex items-center gap-6 text-sm">
              <span>Accepted Payment Methods:</span>
              <div className="flex gap-2">
                {/* Payment Icons */}
                <div style={{backgroundColor: '#FFFFFF'}} className="w-8 h-5 rounded-sm flex items-center justify-center">
                  <span style={{color: '#1A4C8B'}} className="text-xs font-bold">VISA</span>
                </div>
                <div style={{backgroundColor: '#E66A1F'}} className="w-8 h-5 rounded-sm flex items-center justify-center">
                  <span className="text-xs font-bold text-white">PP</span>
                </div>
                <div style={{backgroundColor: '#CBA35B'}} className="w-8 h-5 rounded-sm flex items-center justify-center">
                  <span style={{color: '#1A1A1A'}} className="text-xs font-bold">MC</span>
                </div>
                <div style={{backgroundColor: '#1A1A1A'}} className="w-8 h-5 rounded-sm flex items-center justify-center">
                  <span style={{color: '#CBA35B'}} className="text-xs font-bold">UPI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}