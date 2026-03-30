import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, Bird, Fish, Bug } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialPetCare = () => (
  <>
    <Helmet>
      <title>Exotic & Special Pet Care in Brooklyn, NY | Furrs N' Purrs</title>
      <meta name="description" content="Specialized care for reptiles, birds, aquatics & exotic pets in Brooklyn. Expert handlers in Dyker Heights & surrounding areas. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services/special-pet-care" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← Back to Home</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Special Pet <span className="font-accent">Care</span> Services
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          Not every pet is a dog or cat — and that's what makes them special! We provide expert care for reptiles, birds, aquatic pets, and other unique animals. Our handlers are trained to meet the specific needs of your exotic companions.
        </p>
        <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book Special Care</Button></a>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">Pets We Care For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Bug, title: "Reptiles", desc: "Snakes, lizards, turtles — we know their temperature, habitat, and feeding needs." },
            { icon: Bird, title: "Birds", desc: "Parrots, finches, cockatiels — cage cleaning, feeding, and socialization." },
            { icon: Fish, title: "Aquatic Pets", desc: "Fish tank maintenance, feeding schedules, and water quality checks." },
            { icon: Sparkles, title: "Other Exotics", desc: "Hamsters, rabbits, guinea pigs, ferrets — we love them all." },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6">
              <item.icon className="w-8 h-8 text-lime-strong mb-3" />
              <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Special Pet Care Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"].map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{area}</Link>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Have an Exotic Pet?</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">We've got the expertise to care for them. Reach out today!</p>
          <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default SpecialPetCare;
