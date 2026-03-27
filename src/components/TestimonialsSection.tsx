import { useRef, useState } from "react";
import catGreen from "@/assets/cat-green.jpg";

const testimonials = [
  { quote: "My kitten always feels calm thanks to his loving attention.", name: "Sarah M.", location: "Dyker Heights, NY" },
  { quote: "Best pet walking service in Brooklyn! My dog loves every visit.", name: "Mike R.", location: "Bay Ridge, NY" },
  { quote: "They take care of my reptiles with such expertise and kindness.", name: "Jenny L.", location: "Bensonhurst, NY" },
  { quote: "Absolutely wonderful care for my birds. Highly recommended!", name: "David K.", location: "Bath Beach, NY" },
];

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.firstElementChild
      ? (scrollRef.current.firstElementChild as HTMLElement).offsetWidth + 24
      : 1;
    setActiveIndex(Math.round(scrollLeft / cardWidth));
  };

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-8">What our clients say</h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((t, i) => (
          <div key={i} className="flex gap-4 min-w-[85vw] md:min-w-[550px] snap-center flex-shrink-0">
            <div className="w-36 h-36 md:w-48 md:h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-lime">
              <img src={catGreen} alt="Happy cat" className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-5 md:p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-heading text-muted-foreground">"</span>
                <p className="text-base md:text-lg font-heading text-foreground mt-1">{t.quote}</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-pink-soft" />
                <div>
                  <p className="text-sm font-body font-medium text-foreground">{t.name}</p>
                  <p className="text-xs font-body text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex ? "bg-foreground" : "bg-border"}`} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
