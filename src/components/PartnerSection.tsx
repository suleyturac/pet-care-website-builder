import vetWithDog from "@/assets/vet-with-dog.png";
import beaglePink from "@/assets/beagle-pink.png";
import { Button } from "@/components/ui/button";

const PartnerSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-foreground leading-tight">
            Your trusted partner in pet <span className="font-accent">health</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-sm max-w-md">
            Furrs N' Purrs provides dog walking services as well as drop-ins, sitting/boarding for all animals big or small. We also cater to cats, birds, reptiles, aquatics, and any other loving pets you have in your family!
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="tel:3476338034">
              <Button className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-body">
                Book a appointment
              </Button>
            </a>
            <a href="https://fnppetcare.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-body text-foreground hover:text-muted-foreground flex items-center gap-1">
              Browse all services →
            </a>
          </div>
        </div>

        <div className="flex gap-4 h-[400px]">
          <div className="flex-1 rounded-2xl overflow-hidden bg-yellow-soft">
            <img src={vetWithDog} alt="Vet with happy dog" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-1 rounded-2xl overflow-hidden bg-pink-soft">
            <img src={beaglePink} alt="Happy beagle" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
