import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import categoryShoeCharms from "@/assets/category-shoe-charms.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";

const Shop = () => {
  const categories = [
    {
      name: "Shoe Charms",
      href: "/shop/shoe-charms",
      description: "Express your personality with our unique shoe charms",
      image: categoryShoeCharms
    },
    {
      name: "Men's Collection",
      href: "/shop/men",
      description: "Chains • Rings • Bracelets & Cuffs",
      image: categoryMen
    },
    {
      name: "Women's Collection", 
      href: "/shop/women",
      description: "Chains • Rings • Bracelets & Cuffs • Anklets • Earrings",
      image: categoryWomen
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop Our Collections
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover premium anti-tarnish 18K gold-plated jewelry designed for modern lifestyles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} to={category.href}>
              <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-background hover:bg-accent-pearl/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;