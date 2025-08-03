import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              About CLING & ORE
            </h1>
            <p className="text-muted-foreground text-xl font-serif italic">
              "Wear it. Love it. Live in it."
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border-0 bg-accent-pearl/30">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-semibold mb-6 text-primary">Our Story</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    CLING & ORE was born from a simple yet powerful vision: to create jewelry that seamlessly transitions 
                    from college days to professional milestones, accompanying you through every chapter of your journey.
                  </p>
                  <p>
                    Founded in Saudi Arabia, we recognized the need for high-quality, affordable jewelry that doesn't 
                    compromise on style or durability. Our anti-tarnish 18K gold-plated pieces are designed for the 
                    modern individual who values both elegance and practicality.
                  </p>
                  <p>
                    Every piece in our collection is carefully crafted to embody our core philosophy: jewelry should be 
                    lived in, not just admired. Whether you're presenting in a boardroom, exploring a new city, or 
                    enjoying a quiet evening with friends, CLING & ORE pieces are designed to be your constant companions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 bg-background">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-semibold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To democratize luxury jewelry by offering premium anti-tarnish pieces that fit every lifestyle and budget. 
                    We believe everyone deserves to wear beautiful jewelry that lasts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-8">
                  <h3 className="font-serif text-xl font-semibold mb-4 text-primary">Our Values</h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Quality craftsmanship in every piece</li>
                    <li>• Inclusive, gender-neutral designs</li>
                    <li>• Sustainable and ethical sourcing</li>
                    <li>• Exceptional customer experience</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-accent-linen">
              <CardContent className="p-8">
                <h2 className="font-serif text-2xl font-semibold mb-6 text-primary">Why Anti-Tarnish?</h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Traditional jewelry requires constant maintenance and careful handling. Our anti-tarnish technology 
                    changes the game, allowing you to wear your favorite pieces daily without worry about discoloration 
                    or damage.
                  </p>
                  <p>
                    This innovative coating protects your jewelry from environmental factors while maintaining the 
                    beautiful luster of 18K gold plating. It's jewelry designed for real life – perfect for the person 
                    who wants to look effortlessly elegant every day.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="font-serif text-2xl font-semibold mb-4">Join Our Journey</h2>
                <p className="text-lg mb-6">
                  Become part of the CLING & ORE community and discover jewelry that grows with you.
                </p>
                <p className="font-serif italic text-xl">
                  "Wear it. Love it. Live in it."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;