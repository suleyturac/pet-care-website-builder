import { useState, useCallback, useRef } from "react";
import catGreen from "@/assets/cat-green.jpg";
import testimonialDog from "@/assets/testimonial-dog.jpg";
import testimonialReptile from "@/assets/testimonial-reptile.jpg";
import testimonialBird from "@/assets/testimonial-bird.jpg";
import { ChevronLeft, ChevronRight, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  { quote: "My kitten always feels calm thanks to his loving attention.", name: "Sahara Connor", location: "New York, NY", image: catGreen, alt: "Happy cat" },
  { quote: "Best pet walking service in Brooklyn! My dog loves every visit and gets so excited when they arrive at the door.", name: "Mike Rodriguez", location: "Bay Ridge, NY", image: testimonialDog, alt: "Happy dog being walked" },
  { quote: "They take care of my reptiles with such expertise and kindness. Not many services understand exotic pets like they do.", name: "Jenny Lee", location: "Bensonhurst, NY", image: testimonialReptile, alt: "Bearded dragon reptile" },
  { quote: "Absolutely wonderful care for my birds. Highly recommended to anyone looking for trustworthy pet care!", name: "David Kim", location: "Bath Beach, NY", image: testimonialBird, alt: "Colorful parrot" },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setActiveIndex((prev) => Math.min(testimonials.length - 1, prev + 1));
      } else {
        setActiveIndex((prev) => Math.max(0, prev - 1));
      }
    }
  };

  const t = testimonials[activeIndex];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      {/* Desktop layout */}
      <div className="hidden md:block" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className="rounded-3xl bg-muted/50 p-10 lg:p-14">
          <div className="grid grid-cols-[1fr_1px_1.2fr_auto] gap-8 lg:gap-12 items-center">
            {/* Left: heading */}
            <div>
              <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center mb-6">
                <PawPrint className="w-6 h-6 text-yellow-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-heading text-foreground leading-tight">
                This is what<br />our <span className="font-accent">clients</span> say
              </h2>
              <p className="mt-4 text-sm font-body text-muted-foreground max-w-[280px]">
                Hear from pet owners across Brooklyn who trust us with their beloved companions every day.
              </p>
            </div>

            {/* Divider */}
            <div className="w-px h-full bg-border" />

            {/* Center: quote */}
            <div className="min-h-[220px] flex flex-col justify-between">
              <div>
                <span className="text-4xl font-heading text-muted-foreground/40 leading-none">"</span>
                <p className="text-2xl lg:text-3xl font-heading text-foreground leading-snug mt-2">
                  {t.quote}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-base font-body font-medium text-foreground">{t.name}</p>
                <p className="text-sm font-body text-muted-foreground">{t.location}</p>
              </div>
            </div>

            {/* Right: image + button */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-48 h-56 lg:w-56 lg:h-64 rounded-2xl overflow-hidden bg-lime flex-shrink-0">
                <img src={t.image} alt={t.alt} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
              </div>
              <a href="tel:3476338034">
                <Button className="rounded-full bg-foreground text-background px-6 py-3 font-body hover:bg-foreground/90">
                  Book a schedule
                </Button>
              </a>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === activeIndex ? "bg-foreground" : "bg-border"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            onClick={() => goTo(Math.max(0, activeIndex - 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={() => goTo(Math.min(testimonials.length - 1, activeIndex + 1))}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <PawPrint className="w-5 h-5 text-yellow-500" />
          </div>
          <h2 className="text-2xl font-heading text-foreground">
            What our <span className="font-accent">clients</span> say
          </h2>
        </div>

        <div className="rounded-2xl bg-muted/50 p-6" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div className="w-full h-48 rounded-xl overflow-hidden bg-lime mb-5">
            <img src={t.image} alt={t.alt} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
          </div>

          <span className="text-3xl font-heading text-muted-foreground/40 leading-none">"</span>
          <p className="text-lg font-heading text-foreground leading-snug mt-1">
            {t.quote}
          </p>

          <div className="mt-4">
            <p className="text-sm font-body font-medium text-foreground">{t.name}</p>
            <p className="text-xs font-body text-muted-foreground">{t.location}</p>
          </div>

          <a href="tel:3476338034" className="block mt-5">
            <Button className="w-full rounded-full bg-foreground text-background py-3 font-body hover:bg-foreground/90">
              Book a schedule
            </Button>
          </a>
        </div>

        {/* Mobile dots + arrows */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={() => goTo(Math.max(0, activeIndex - 1))}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-foreground" : "bg-border"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => goTo(Math.min(testimonials.length - 1, activeIndex + 1))}
            className="w-8 h-8 rounded-full border border-border flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
