"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle,
  MessageCircle,
  User,
  Building
} from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState<"success" | "error">("success");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    const formData = {
      name: e.currentTarget.name.value,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone?.value,
      subject: e.currentTarget.subject?.value,
      message: e.currentTarget.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Message sent successfully! We'll get back to you within 24 hours.");
        setMsgType("success");
        e.currentTarget.reset();
      } else {
        setMsg("Something went wrong. Please try again later.");
        setMsgType("error");
      }
    } catch (err) {
      setMsg("Error sending message. Please check your connection and try again.");
      setMsgType("error");
    }

    setLoading(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "We'll respond quickly",
      details: "support@furnimart.com",
      link: "mailto:support@furnimart.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Sun, 9AM-9PM",
      details: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Showroom location",
      details: "Himachal Pradesh, India",
      link: "#"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "We're here to help",
      details: "9:00 AM - 9:00 PM (IST)",
      link: "#"
    }
  ];

  const faqs = [
    {
      question: "What's your delivery time?",
      answer: "Usually 3-7 business days depending on your location."
    },
    {
      question: "Do you offer assembly services?",
      answer: "Yes, we offer professional assembly for an additional fee."
    },
    {
      question: "What's your return policy?",
      answer: "30-day return policy for unused items in original packaging."
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div style={{backgroundColor: '#D8E4F5'}} className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 style={{color: '#1A1A1A'}} className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h1>
          <p style={{color: '#1A1A1A'}} className="text-xl max-w-2xl mx-auto">
            We're here to help you create the home of your dreams. Reach out with any questions!
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 style={{color: '#1A1A1A'}} className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle style={{color: '#E66A1F'}} className="w-6 h-6" />
                Let's Connect
              </h2>
              <p style={{color: '#1A1A1A'}} className="mb-8">
                Have questions about our furniture? Need help with your order? 
                Our friendly team is here to help you every step of the way.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} style={{backgroundColor: '#FFFFFF'}} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-4">
                    <a 
                      href={method.link} 
                      className="flex items-start gap-4 group"
                    >
                      <div 
                        style={{backgroundColor: '#D8E4F5', color: '#1A4C8B'}}
                        className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300"
                      >
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 
                          style={{color: '#1A1A1A'}}
                          className="font-semibold group-hover:text-orange-600 transition-colors duration-300"
                        >
                          {method.title}
                        </h3>
                        <p style={{color: '#1A1A1A'}} className="text-sm mb-1">{method.description}</p>
                        <p style={{color: '#1A4C8B'}} className="font-medium">{method.details}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-8">
              <h3 style={{color: '#1A4C8B'}} className="text-lg font-semibold mb-4">
                Quick Answers
              </h3>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <details 
                    key={index} 
                    style={{backgroundColor: '#FFFFFF', borderColor: '#D8E4F5'}}
                    className="group rounded-lg border p-4 hover:border-orange-300 transition-colors duration-300"
                  >
                    <summary style={{color: '#1A1A1A'}} className="font-medium cursor-pointer list-none">
                      <div className="flex justify-between items-center">
                        {faq.question}
                        <div 
                          style={{backgroundColor: '#D8E4F5'}}
                          className="w-5 h-5 rounded-full flex items-center justify-center group-open:rotate-180 transition-transform duration-300"
                        >
                          <svg style={{color: '#1A4C8B'}} className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </summary>
                    <p style={{color: '#1A1A1A'}} className="mt-3 text-sm">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card style={{backgroundColor: '#FFFFFF'}} className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div 
                    style={{backgroundColor: '#D8E4F5'}}
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <MessageCircle style={{color: '#1A4C8B'}} className="w-8 h-8" />
                  </div>
                  <h2 style={{color: '#1A1A1A'}} className="text-2xl font-bold mb-2">
                    Send us a Message
                  </h2>
                  <p style={{color: '#1A1A1A'}}>
                    Fill out the form below and we'll get back to you ASAP
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" style={{color: '#1A1A1A'}} className="text-sm font-medium flex items-center gap-2">
                        <User style={{color: '#1A4C8B'}} className="w-4 h-4" />
                        Full Name *
                      </label>
                      <Input 
                        id="name"
                        name="name" 
                        placeholder="Enter your full name" 
                        required 
                        style={{borderColor: '#D8E4F5'}}
                        className="focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" style={{color: '#1A1A1A'}} className="text-sm font-medium flex items-center gap-2">
                        <Mail style={{color: '#1A4C8B'}} className="w-4 h-4" />
                        Email Address *
                      </label>
                      <Input 
                        id="email"
                        name="email" 
                        placeholder="your.email@example.com" 
                        type="email" 
                        required 
                        style={{borderColor: '#D8E4F5'}}
                        className="focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" style={{color: '#1A1A1A'}} className="text-sm font-medium flex items-center gap-2">
                        <Phone style={{color: '#1A4C8B'}} className="w-4 h-4" />
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        name="phone" 
                        placeholder="+91 98765 43210" 
                        type="tel"
                        style={{borderColor: '#D8E4F5'}}
                        className="focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" style={{color: '#1A1A1A'}} className="text-sm font-medium flex items-center gap-2">
                        <Building style={{color: '#1A4C8B'}} className="w-4 h-4" />
                        Subject
                      </label>
                      <Input 
                        id="subject"
                        name="subject" 
                        placeholder="What's this about?" 
                        style={{borderColor: '#D8E4F5'}}
                        className="focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" style={{color: '#1A1A1A'}} className="text-sm font-medium">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us how we can help you..."
                      rows={6}
                      required
                      style={{borderColor: '#D8E4F5'}}
                      className="focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={loading} 
                    style={{backgroundColor: '#E66A1F'}}
                    className="w-full text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:bg-orange-700"
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {msg && (
                    <div 
                      style={{
                        backgroundColor: msgType === "success" ? '#f0f9ff' : '#fef2f2',
                        borderColor: msgType === "success" ? '#bae6fd' : '#fecaca',
                        color: msgType === "success" ? '#0369a1' : '#dc2626'
                      }}
                      className="p-4 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        {msgType === "success" ? (
                          <CheckCircle style={{color: '#16a34a'}} className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <AlertCircle style={{color: '#dc2626'}} className="w-5 h-5 flex-shrink-0" />
                        )}
                        <p className="text-sm">{msg}</p>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <Card style={{backgroundColor: '#D8E4F5'}} className="border-0">
                <CardContent className="p-6">
                  <h3 style={{color: '#1A1A1A'}} className="font-semibold mb-2">Bulk Orders & Corporate</h3>
                  <p style={{color: '#1A1A1A'}} className="text-sm mb-3">
                    Looking to furnish your office or multiple properties?
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    style={{borderColor: '#1A4C8B', color: '#1A4C8B'}}
                    className="w-full"
                  >
                    Contact Sales Team
                  </Button>
                </CardContent>
              </Card>

              <Card style={{backgroundColor: '#FFFFFF'}} className="border-0">
                <CardContent className="p-6">
                  <h3 style={{color: '#1A1A1A'}} className="font-semibold mb-2">Design Consultation</h3>
                  <p style={{color: '#1A1A1A'}} className="text-sm mb-3">
                    Need help choosing the right furniture for your space?
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    style={{borderColor: '#E66A1F', color: '#E66A1F'}}
                    className="w-full"
                  >
                    Book Free Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}