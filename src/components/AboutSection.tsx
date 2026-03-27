import vetExamining from "@/assets/vet-examining.jpg";
import catBlue from "@/assets/cat-blue.jpg";

const stats = [
  { number: "254", suffix: "+", label: "Happy clients", color: "text-yellow-500" },
  { number: "30", suffix: "+", label: "Expert caregivers", color: "text-blue-500" },
  { number: "360", suffix: "+", label: "Healthy pets", color: "text-green-500" },
  { number: "8Y", suffix: "+", label: "Years of experience", color: "text-lime-strong" },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-6">About us</h2>

      {/* Desktop: two columns mismatched. Mobile: one paragraph + one photo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Left column: text top, image bottom */}
        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            Furrs N' Purrs provides dog walking services as well as drop-ins, sitting/boarding for all animals big or small. We cater to dogs, cats, birds, reptiles, aquatics, and any other loving pets you have in your family. Located in Brooklyn, NY, we serve Dyker Heights and nearby areas.
          </p>
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[350px] bg-yellow-soft hidden md:block">
            <img src={vetExamining} alt="Vet examining a pet" className="w-full h-full object-cover" loading="lazy" width={768} height={1024} />
          </div>
        </div>

        {/* Right column: image top, text bottom (mismatched) */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl overflow-hidden h-[300px] md:h-[350px] bg-blue-soft">
            <img src={catBlue} alt="Beautiful cat with blue eyes" className="w-full h-full object-cover" loading="lazy" width={768} height={1024} />
          </div>
          <p className="text-muted-foreground font-body text-sm leading-relaxed hidden md:block">
            Our team of dedicated pet caregivers ensures your furry, feathered, or scaled companions receive the love and attention they deserve. We're open 24 hours to accommodate your schedule and provide peace of mind.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i}>
            <div className="text-4xl md:text-6xl font-heading font-black text-foreground">
              {stat.number}<span className={`${stat.color} font-black`}>{stat.suffix}</span>
            </div>
            <p className="mt-1 text-sm font-body text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
