import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Droplets, Sun, Heart } from "lucide-react";

const JewelryCare = () => {
  const careSteps = [
    {
      icon: Shield,
      title: "Daily Protection",
      description: "Keep your jewelry away from perfumes, lotions, and cleaning products"
    },
    {
      icon: Droplets,
      title: "Gentle Cleaning",
      description: "Use mild soap and warm water with a soft cloth for regular cleaning"
    },
    {
      icon: Sun,
      title: "Proper Storage",
      description: "Store in a dry place, preferably in individual pouches or compartments"
    },
    {
      icon: Heart,
      title: "Regular Maintenance",
      description: "Bring your jewelry for professional cleaning and inspection annually"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Jewelry Care Guide
            </h1>
            <p className="text-muted-foreground text-lg">
              Keep your CLING & ORE pieces looking beautiful for years to come
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {careSteps.map((step) => (
              <Card key={step.title} className="border-0 bg-accent-pearl/30">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="prose prose-lg max-w-none">
            <Card className="border-0 bg-background">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-semibold mb-6">Complete Care Instructions</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Anti-Tarnish Technology</h3>
                    <p className="text-muted-foreground">
                      Our jewelry features advanced anti-tarnish coating that protects your pieces from oxidation and discoloration. 
                      This special treatment ensures your jewelry maintains its beautiful luster with minimal care.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Daily Wear Guidelines</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Put on jewelry last when getting dressed</li>
                      <li>• Remove jewelry first when undressing</li>
                      <li>• Avoid contact with water, perfumes, and lotions</li>
                      <li>• Remove before swimming, exercising, or sleeping</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Cleaning Instructions</h3>
                    <p className="text-muted-foreground mb-3">
                      For regular maintenance:
                    </p>
                    <ol className="text-muted-foreground space-y-2">
                      <li>1. Mix mild soap with warm water</li>
                      <li>2. Gently clean with a soft-bristled brush</li>
                      <li>3. Rinse thoroughly with clean water</li>
                      <li>4. Pat dry with a soft, lint-free cloth</li>
                      <li>5. Allow to air dry completely before storing</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Storage Tips</h3>
                    <p className="text-muted-foreground">
                      Store each piece separately in soft pouches or lined jewelry boxes to prevent scratching. 
                      Keep jewelry in a cool, dry place away from direct sunlight and humidity.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-3 text-primary">Professional Care</h3>
                    <p className="text-muted-foreground">
                      We recommend professional cleaning and inspection annually to maintain your jewelry's beauty and integrity. 
                      Contact our customer service team to schedule a care appointment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JewelryCare;