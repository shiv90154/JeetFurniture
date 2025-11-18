import { Card, CardContent } from "@/components/ui/card";
import ProductCard from "./ProductCard";

export default function OffersPage({ offers, products }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Header */}
      <div className="text-center mb-12">
        <h1 style={{color: '#1A1A1A'}} className="text-4xl font-bold mb-4">Special Offers</h1>
        <p style={{color: '#1A1A1A'}} className="text-lg max-w-2xl mx-auto">
          Discover amazing deals and discounts on premium furniture for your home
        </p>
      </div>

      {/* Offer Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {offers.map((offer) => (
          <Card 
            key={offer.id} 
            style={{backgroundColor: '#FFFFFF'}}
            className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative">
              <img
                src={offer.banner}
                className="w-full h-48 object-cover"
                alt={offer.title}
              />
              <div 
                style={{backgroundColor: '#E66A1F'}}
                className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-bold"
              >
                {offer.discount} OFF
              </div>
            </div>
            <CardContent className="p-6">
              <h2 style={{color: '#E66A1F'}} className="text-xl font-semibold mb-2">
                {offer.title}
              </h2>
              <p style={{color: '#1A1A1A'}} className="mb-4">{offer.description}</p>
              <div className="flex items-center justify-between">
                <span style={{color: '#1A4C8B'}} className="font-semibold">
                  {offer.validity}
                </span>
                <button 
                  style={{backgroundColor: '#1A4C8B', color: '#FFFFFF'}}
                  className="px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Shop Now
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Discounted Products */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h2 style={{color: '#1A1A1A'}} className="text-3xl font-bold mb-2">Deals of the Day</h2>
          <p style={{color: '#1A1A1A'}} className="text-lg">
            Limited time offers on our best-selling products
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.discount)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>

      {/* Additional Offers Section */}
      <div style={{backgroundColor: '#D8E4F5'}} className="rounded-2xl p-8 mb-12">
        <div className="text-center mb-8">
          <h2 style={{color: '#1A4C8B'}} className="text-3xl font-bold mb-2">Flash Sale</h2>
          <p style={{color: '#1A1A1A'}} className="text-lg mb-4">
            Limited stock at unbelievable prices
          </p>
          <div style={{backgroundColor: '#1A4C8B'}} className="inline-flex items-center gap-4 px-6 py-3 rounded-full text-white">
            <span className="font-bold">Ends in:</span>
            <div className="flex gap-2">
              <div className="text-center">
                <div style={{backgroundColor: '#E66A1F'}} className="w-8 h-8 rounded flex items-center justify-center font-bold">02</div>
                <span className="text-xs">HRS</span>
              </div>
              <div className="text-center">
                <div style={{backgroundColor: '#E66A1F'}} className="w-8 h-8 rounded flex items-center justify-center font-bold">45</div>
                <span className="text-xs">MIN</span>
              </div>
              <div className="text-center">
                <div style={{backgroundColor: '#E66A1F'}} className="w-8 h-8 rounded flex items-center justify-center font-bold">30</div>
                <span className="text-xs">SEC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Offer */}
      <Card style={{backgroundColor: '#1A4C8B'}} className="border-0 text-white">
        <CardContent className="p-8 text-center">
          <h3 style={{color: '#CBA35B'}} className="text-2xl font-bold mb-4">
            Get Additional 10% Off
          </h3>
          <p style={{color: '#D8E4F5'}} className="mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive offers, 
            new arrivals, and special discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{backgroundColor: '#FFFFFF', color: '#1A1A1A'}}
              className="px-4 py-3 rounded-lg flex-1 placeholder-gray-500"
            />
            <button 
              style={{backgroundColor: '#E66A1F'}}
              className="px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Subscribe & Save
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}