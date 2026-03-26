import catGreen from "@/assets/cat-green.jpg";

const testimonials = [
  { quote: "My kitten always feels calm thanks to his loving attention.", name: "Sarah M.", location: "Dyker Heights, NY" },
  { quote: "Best pet walking service in Brooklyn! My dog loves every visit.", name: "Mike R.", location: "Bay Ridge, NY" },
  { quote: "They take care of my reptiles with such expertise and kindness.", name: "Jenny L.", location: "Bensonhurst, NY" },
];

const TestimonialsSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background overflow-hidden">
      <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, i) => (
          <div key={i} className="flex gap-4 min-w-[600px] snap-center">
            <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 bg-lime">
              <img src={catGreen} alt="Happy cat" className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
            </div>
            <div className="flex-1 rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
              <div>
                <span className="text-3xl font-heading text-muted-foreground">"</span>
                <p className="text-lg font-heading text-foreground mt-2">{t.quote}</p>
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
          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-foreground" : "bg-border"}`} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
