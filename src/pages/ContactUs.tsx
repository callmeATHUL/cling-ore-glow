import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-accent-pearl/30">
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send us a message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">Email Us</h3>
                      <p className="text-muted-foreground">support@clingandore.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">WhatsApp</h3>
                      <p className="text-muted-foreground">+966-XXX-XXXX</p>
                      <a 
                        href="https://wa.me/966XXXXXXXX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-500 hover:underline text-sm"
                      >
                        Start a conversation
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">Mon - Fri: 10:00 AM - 6:00 PM AST</p>
                      <p className="text-muted-foreground">Sat - Sun: 12:00 PM - 4:00 PM AST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold">Location</h3>
                      <p className="text-muted-foreground">Saudi Arabia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-accent-linen">
                <CardContent className="p-6">
                  <h3 className="font-serif text-lg font-semibold mb-3">Frequently Asked Questions</h3>
                  <p className="text-muted-foreground mb-4">
                    Looking for quick answers? Check out our comprehensive FAQ section.
                  </p>
                  <Button variant="outline" className="w-full">
                    Visit FAQ Page
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;