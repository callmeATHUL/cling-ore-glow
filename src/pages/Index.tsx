import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Shield, Truck, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const categories = [
    { name: "Men's Collection", href: "/shop/men", description: "Chains, Rings & Bracelets" },
    { name: "Women's Collection", href: "/shop/women", description: "Earrings, Rings & Anklets" },
    { name: "Shoe Charms", href: "/shop/shoe-charms", description: "Express Your Style" }
  ];

  const features = [
    { icon: Shield, title: "Anti-Tarnish", description: "18K Gold-Plated Excellence" },
    { icon: Truck, title: "Free Shipping", description: "On orders above SAR 400" },
    { icon: Heart, title: "Lifetime Care", description: "Expert maintenance support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* Featured Categories */}
      <section className="py-16 bg-gradient-to-b from-background to-accent-pearl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Our Collections
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium anti-tarnish jewelry designed for the modern lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background/60 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  <Link to={category.href}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Shop Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-16 bg-accent-linen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 bg-background/80 backdrop-blur">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Beautiful jewelry that doesn't tarnish. Perfect for daily wear!"
                  </p>
                  <h4 className="font-semibold">Satisfied Customer</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay in Style
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and styling tips.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-foreground"
            />
            <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
