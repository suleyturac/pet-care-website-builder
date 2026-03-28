import dogGreen from "@/assets/dog-green-bg.jpg";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="rounded-3xl bg-lime overflow-visible flex flex-col md:flex-row items-center relative">
        {/* Image container - overflows top only on desktop */}
        <div className="md:w-1/2 h-[300px] md:h-full relative md:self-stretch">
          <img
            src={dogGreen}
            alt="Happy dog"
            className="w-full h-full object-cover rounded-tl-3xl md:absolute md:bottom-0 md:left-0 md:w-full md:h-[calc(100%+96px)] md:object-cover md:object-bottom md:rounded-tl-3xl"
            loading="lazy"
            width={768}
            height={1024}
          />
        </div>
        <div className="md:w-1/2 p-8 md:p-14">
          <h2 className="text-3xl md:text-5xl font-heading text-foreground leading-tight">
            Schedule your <span className="font-accent">appointment</span> today!
          </h2>
          <p className="mt-4 text-muted-foreground font-body text-sm max-w-md">
            Give your pet the care they deserve. Contact Furrs N' Purrs for reliable, loving pet care services in Dyker Heights and surrounding Brooklyn areas.
          </p>
          <div className="mt-6">
            <a href="tel:3476338034">
              <Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">
                Book an appointment
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
