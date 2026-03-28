import heroDogs from "@/assets/hero-dogs.jpg";
import { Button } from "@/components/ui/button";

const services = [
  "Dog Walking", "Pet Sitting", "Boarding", "Drop-ins",
  "Cat Care", "Reptile Care", "Bird Care", "Aquatic Pets",
  "Dog Walking", "Pet Sitting", "Boarding", "Drop-ins",
  "Cat Care", "Reptile Care", "Bird Care", "Aquatic Pets",
];

const dotColors = ["bg-yellow-400", "bg-blue-400", "bg-green-400", "bg-red-400", "bg-pink-400", "bg-purple-400", "bg-orange-400", "bg-lime-strong"];

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="text-center pt-10 px-4 relative z-10">
        <h1 className="text-3xl md:text-3xl lg:text-4xl font-heading text-foreground leading-tight max-w-3xl mx-auto">
          The Pet Care that <span className="font-accent">works</span> for you
        </h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto font-body text-sm md:text-base">
          Furrs N' Purrs provides dog walking services as well as drop-ins, sitting/boarding for all animals big or small. We also cater to cats, birds, reptiles, aquatics, and any other loving pets!
        </p>
        <div className="mt-4 mb-0">
          <a href="tel:3476338034">
            <Button className="rounded-full bg-primary text-primary-foreground px-10 py-6 text-base font-body">
              Call Us
            </Button>
          </a>
        </div>
      </div>

      {/* Image tight under text */}
      <div className="-mt-10 md:-mt-16 w-full relative z-0 flex justify-center">
        <img
          src={heroDogs}
          alt="Two happy dogs - a schnauzer and a pitbull"
          className="w-[85%] object-contain md:w-full md:object-cover md:object-top md:h-auto md:max-h-[650px]"
          width={1200}
          height={600}
        />
      </div>

      {/* Scrolling services marquee */}
      <div className="bg-background py-4 overflow-hidden border-t border-border">
        <div className="flex animate-marquee whitespace-nowrap">
          {services.map((service, i) => (
            <div key={i} className="flex items-center mx-4">
              <span className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground">
                {service}
              </span>
              <span className={`w-2 h-2 rounded-full ml-4 ${dotColors[i % dotColors.length]}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
