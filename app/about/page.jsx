import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Truck, 
  Heart, 
  Sparkles, 
  Users, 
  Award,
  Target,
  Globe,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "About Us | FurniMart",
  description:
    "FurniMart – India's trusted online furniture platform. Discover our story, vision, quality standards, and commitment to comfort.",
};

export default function AboutPage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Every product tested for durability, strength, and comfort"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Affordable Luxury",
      description: "Direct-from-manufacturer pricing ensures maximum value"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick and safe doorstep delivery across India"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Modern Designs",
      description: "Stylish, minimalistic, and functional for every home"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Support",
      description: "Friendly and responsive help whenever you need it"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Secure Shopping",
      description: "Safe payment methods and easy returns for peace of mind"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Cities Served" },
    { number: "10K+", label: "Products" },
    { number: "4.8/5", label: "Customer Rating" }
  ];

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-white to-slate-50">
      {/* Hero Section */}
      <section style={{backgroundColor: '#D8E4F5'}} className="relative py-16 mb-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div style={{backgroundColor: '#FFFFFF', color: '#1A4C8B'}} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Star style={{color: '#CBA35B'}} className="w-4 h-4" />
                Trusted by 50,000+ Indian Homes
              </div>
              
              <h1 style={{color: '#1A1A1A'}} className="text-5xl lg:text-6xl font-bold leading-tight">
                Crafting Comfort, 
                <span style={{color: '#E66A1F'}}> Designing</span> Homes
              </h1>
              
              <p style={{color: '#1A1A1A'}} className="text-xl leading-relaxed">
                FurniMart is redefining furniture shopping in India with curated designs, 
                premium quality, and exceptional value—making beautiful homes accessible to everyone.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  style={{backgroundColor: '#E66A1F'}} 
                  className="hover:bg-orange-700 text-white"
                >
                  Explore Collections
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  style={{borderColor: '#1A4C8B', color: '#1A4C8B'}}
                >
                  Our Story
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div style={{backgroundColor: '#FFFFFF'}} className="rounded-2xl p-4 shadow-lg">
                    <img 
                      src="/banners/modern-sofa.jpg" 
                      className="w-full h-48 object-cover rounded-lg"
                      alt="Modern Sofa"
                    />
                  </div>
                  <div style={{backgroundColor: '#FFFFFF'}} className="rounded-2xl p-4 shadow-lg">
                    <img 
                      src="/banners/contemporary-bed.jpg" 
                      className="w-full h-32 object-cover rounded-lg"
                      alt="Contemporary Bed"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div style={{backgroundColor: '#FFFFFF'}} className="rounded-2xl p-4 shadow-lg">
                    <img 
                      src="/banners/dining-set.jpg" 
                      className="w-full h-32 object-cover rounded-lg"
                      alt="Dining Set"
                    />
                  </div>
                  <div style={{backgroundColor: '#FFFFFF'}} className="rounded-2xl p-4 shadow-lg">
                    <img 
                      src="/banners/workspace.jpg" 
                      className="w-full h-48 object-cover rounded-lg"
                      alt="Workspace"
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div style={{backgroundColor: '#FFFFFF'}} className="absolute -bottom-6 -left-6 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div style={{backgroundColor: '#D8E4F5'}} className="w-12 h-12 rounded-full flex items-center justify-center">
                    <CheckCircle style={{color: '#1A4C8B'}} className="w-6 h-6" />
                  </div>
                  <div>
                    <p style={{color: '#1A4C8B'}} className="font-bold text-2xl">4.8/5</p>
                    <p style={{color: '#1A1A1A'}} className="text-sm">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Stats Section */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} style={{backgroundColor: '#FFFFFF'}} className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <p style={{color: '#E66A1F'}} className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </p>
                <p style={{color: '#1A1A1A'}} className="font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 style={{color: '#1A1A1A'}} className="text-4xl font-bold mb-4">
              Our Journey
            </h2>
            <p style={{color: '#1A1A1A'}} className="text-xl max-w-2xl mx-auto">
              From a simple idea to transforming homes across India
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div style={{backgroundColor: '#1A4C8B'}} className="rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Beginning</h3>
                <p style={{color: '#D8E4F5'}} className="leading-relaxed">
                  FurniMart started with a vision to make premium furniture accessible to every Indian home. 
                  We partnered with skilled artisans and modern manufacturers to bridge the gap between 
                  luxury and affordability.
                </p>
              </div>
              
              <Card style={{backgroundColor: '#FFFFFF'}} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 style={{color: '#1A1A1A'}} className="text-xl font-semibold mb-3">
                    Where We Are Today
                  </h3>
                  <p style={{color: '#1A1A1A'}} className="leading-relaxed">
                    Today, we're proud to serve thousands of happy customers across 100+ cities, 
                    offering carefully curated furniture that combines contemporary design with 
                    traditional craftsmanship.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <img
                src="/banners/about-showroom.jpg"
                className="w-full rounded-2xl shadow-2xl"
                alt="FurniMart Showroom"
              />
              <div style={{backgroundColor: '#FFFFFF'}} className="absolute -bottom-6 -right-6 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <Target style={{color: '#E66A1F'}} className="w-8 h-8" />
                  <div>
                    <p style={{color: '#1A4C8B'}} className="font-bold text-lg">2020</p>
                    <p style={{color: '#1A1A1A'}} className="text-sm">Founded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card style={{backgroundColor: '#D8E4F5'}} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div style={{backgroundColor: '#1A4C8B'}} className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Target style={{color: '#FFFFFF'}} className="w-6 h-6" />
                </div>
                <h3 style={{color: '#1A1A1A'}} className="text-2xl font-bold mb-4">
                  Our Vision
                </h3>
                <p style={{color: '#1A1A1A'}} className="text-lg leading-relaxed">
                  To become India's most loved furniture brand by creating spaces that inspire, 
                  products that last, and experiences that delight—making every house a home.
                </p>
              </CardContent>
            </Card>

            <Card style={{backgroundColor: '#FFFFFF'}} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div style={{backgroundColor: '#E66A1F'}} className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Globe style={{color: '#FFFFFF'}} className="w-6 h-6" />
                </div>
                <h3 style={{color: '#1A1A1A'}} className="text-2xl font-bold mb-4">
                  Our Mission
                </h3>
                <p style={{color: '#1A1A1A'}} className="text-lg leading-relaxed">
                  To redefine furniture shopping with seamless digital experiences, 
                  sustainable practices, and customer-centric innovation that brings 
                  comfort and style to every corner of India.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 style={{color: '#1A1A1A'}} className="text-4xl font-bold mb-4">
              Why Choose FurniMart?
            </h2>
            <p style={{color: '#1A1A1A'}} className="text-xl max-w-2xl mx-auto">
              Experience the difference that makes us India's fastest-growing furniture brand
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                style={{backgroundColor: '#FFFFFF'}} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div style={{backgroundColor: '#D8E4F5'}} className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <div style={{color: '#1A4C8B'}}>
                      {feature.icon}
                    </div>
                  </div>
                  <h4 style={{color: '#1A1A1A'}} className="font-semibold text-xl mb-3">
                    {feature.title}
                  </h4>
                  <p style={{color: '#1A1A1A'}} className="leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team & Values */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 style={{color: '#1A1A1A'}} className="text-4xl font-bold mb-6">
                Our Values
              </h2>
              <div className="space-y-4">
                {[
                  "Quality craftsmanship in every piece",
                  "Customer-first approach in all decisions",
                  "Innovation in design and technology",
                  "Sustainable and ethical practices",
                  "Transparency and trust"
                ].map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle style={{color: '#E66A1F'}} className="w-5 h-5 flex-shrink-0" />
                    <span style={{color: '#1A1A1A'}} className="text-lg">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card style={{backgroundColor: '#D8E4F5'}} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div style={{backgroundColor: '#1A4C8B'}} className="w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Users style={{color: '#FFFFFF'}} className="w-6 h-6" />
                </div>
                <h3 style={{color: '#1A1A1A'}} className="text-2xl font-bold mb-4">
                  Our Team
                </h3>
                <p style={{color: '#1A1A1A'}} className="text-lg leading-relaxed mb-6">
                  FurniMart is powered by passionate designers, craftsmen, tech innovators, 
                  and customer champions who believe that great furniture should be accessible to all.
                </p>
                <blockquote style={{borderColor: '#E66A1F', color: '#1A1A1A'}} className="border-l-4 pl-4 italic">
                  "We don't just sell furniture. We create comfort, style, and memories 
                  that become a part of your home's story."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{backgroundColor: '#1A4C8B'}} className="text-center rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Space?
          </h2>
          <p style={{color: '#D8E4F5'}} className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers who've found their perfect furniture with FurniMart
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              style={{backgroundColor: '#E66A1F', color: '#FFFFFF'}} 
              className="hover:bg-orange-700"
            >
              Start Shopping
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              style={{borderColor: '#CBA35B', color: '#CBA35B'}}
              className="hover:bg-white/10"
            >
              Contact Our Team
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}