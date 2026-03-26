import vetWithDog from "@/assets/vet-with-dog.png";
import { Button } from "@/components/ui/button";
import { FlaskConical, Syringe, ClipboardList, MonitorCheck } from "lucide-react";

const services = [
  { icon: FlaskConical, title: "Dog Walking/Pet Drop-in", price: "$19 USD / Hour", desc: "We provide reliable, caring walks and check-ins for your furry friends.", color: "text-purple-500" },
  { icon: Syringe, title: "Pet Taxi", price: "$39 USD / Complex", desc: "Safe and comfortable transportation for your pet to any destination.", color: "text-green-500" },
  { icon: ClipboardList, title: "Boarding & Sitting", price: "$59 USD / Visit", desc: "Overnight care in a loving environment so your pet feels right at home.", color: "text-blue-500" },
  { icon: MonitorCheck, title: "Special Pet Care", price: "$49 USD / Visit", desc: "Specialized care for reptiles, birds, aquatics and all unique pets.", color: "text-lime-strong" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-background">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground">Our pet care services</h2>
          <p className="mt-3 text-muted-foreground max-w-lg font-body text-sm">
            From dog walking to overnight boarding, we provide comprehensive care for all your beloved pets in Dyker Heights and nearby areas.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-4">
          <a href="tel:3476338034">
            <Button className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-body">
              Book an appointment
            </Button>
          </a>
          <a href="https://fnppetcare.com/" target="_blank" rel="noopener noreferrer" className="text-sm font-body text-foreground hover:text-muted-foreground flex items-center gap-1">
            Browse all services →
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left image */}
        <div className="rounded-2xl overflow-hidden bg-yellow-soft">
          <img src={vetWithDog} alt="Vet caring for a dog" className="w-full h-full object-cover" loading="lazy" />
        </div>

        {/* Right service cards - 2x2 grid */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <s.icon className={`w-8 h-8 ${s.color}`} />
                  <span className="text-xs font-body border border-border rounded-full px-3 py-1 text-foreground">{s.price}</span>
                </div>
                <h3 className="text-lg font-heading text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
