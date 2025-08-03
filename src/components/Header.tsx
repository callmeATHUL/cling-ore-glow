import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import logo from "@/assets/cling-ore-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "HOME", href: "/" },
    { 
      name: "SHOP", 
      href: "/shop",
      submenu: [
        { name: "Shoe Charms", href: "/shop/shoe-charms" },
        { 
          name: "Men", 
          href: "/shop/men",
          subcategories: ["Chains", "Rings", "Bracelets & Cuffs"]
        },
        { 
          name: "Women", 
          href: "/shop/women",
          subcategories: ["Chains", "Rings", "Bracelets & Cuffs", "Anklets", "Earrings"]
        }
      ]
    },
    { name: "JEWELRY CARE", href: "/jewelry-care" },
    { name: "ABOUT", href: "/about-us" },
    { name: "CONTACT", href: "/contact-us" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="CLING & ORE" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="font-sans font-medium text-sm tracking-wide">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4">
                          {item.submenu.map((subitem) => (
                            <NavigationMenuLink key={subitem.name} asChild>
                              <Link
                                to={subitem.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none font-serif">
                                  {subitem.name}
                                </div>
                                {subitem.subcategories && (
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subitem.subcategories.join(" • ")}
                                  </p>
                                )}
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                        location.pathname === item.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4" />
                <span className="ml-2 font-medium">Sign In</span>
              </Button>
            </Link>
            
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                0
              </span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-6 space-y-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;