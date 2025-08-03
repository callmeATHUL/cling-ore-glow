import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  {
    image: hero1,
    title: "Premium Anti-Tarnish Jewelry",
    subtitle: "Wear it. Love it. Live in it.",
    cta: "Shop Collection"
  },
  {
    image: hero2,
    title: "18K Gold-Plated Excellence",
    subtitle: "Crafted for everyday elegance",
    cta: "Discover Now"
  },
  {
    image: hero3,
    title: "From College to Professional",
    subtitle: "Jewelry that grows with you",
    cta: "Shop Now"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-lg">
                  <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                    {slide.subtitle}
                  </p>
                  <Link to="/shop">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 text-lg">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
      >
        <ChevronLeft className="h-6 w-6 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 hover:bg-background transition-colors z-10"
      >
        <ChevronRight className="h-6 w-6 text-foreground" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-primary" : "bg-background/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;