import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent-linen border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link to="/shop/men" className="text-muted-foreground hover:text-primary transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop/women" className="text-muted-foreground hover:text-primary transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Policies
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/returns-refunds" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/jewelry-care" className="text-muted-foreground hover:text-primary transition-colors">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/orders-tracking" className="text-muted-foreground hover:text-primary transition-colors">
                  Orders & Tracking
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                <a href="mailto:support@clingandore.com" className="hover:text-primary transition-colors">
                  support@clingandore.com
                </a>
              </p>
              <p className="text-muted-foreground">
                <a href="https://wa.me/966XXXXXXXX" className="hover:text-primary transition-colors flex items-center">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp: +966-XXX-XXXX
                </a>
              </p>
              <Link to="/customer-support" className="text-muted-foreground hover:text-primary transition-colors block">
                Customer Support
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4 text-foreground">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to get updates on new collections and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 CLING & ORE. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-serif italic">
                "WEAR IT. LOVE IT. LIVE IN IT."
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-xs text-muted-foreground">
                Premium Anti-Tarnish Jewelry • Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/966XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-colors z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;