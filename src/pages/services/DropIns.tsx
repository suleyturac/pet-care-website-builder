import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Clock, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const DropIns = () => (
  <>
    <Helmet>
      <title>Pet Drop-In Visits in Brooklyn, NY | Furrs N' Purrs Pet Care</title>
      <meta name="description" content="Pet drop-in visits in Dyker Heights, Bay Ridge & Brooklyn. Quick check-ins for feeding, playtime & medication. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services/drop-ins" />
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Pet Drop-In Visits in Brooklyn","provider":{"@type":"LocalBusiness","name":"Furrs N' Purrs Pet Care","telephone":"(347) 633-8034"},"areaServed":["Dyker Heights","Bay Ridge","Bensonhurst","Bath Beach","Fort Hamilton","Gravesend"]})}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/services" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← All Services</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Pet <span className="font-accent">Drop-In</span> Visits
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          Working long hours? Our pet drop-in service provides quick check-ins at your home for feeding, fresh water, litter box cleaning, playtime, and medication administration.
        </p>
        <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book Drop-In</Button></a>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">What We Do During Drop-Ins</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Feeding & Water", desc: "Fresh food and water according to your pet's schedule." },
            { icon: Clock, title: "Quick 30-Min Visits", desc: "Efficient check-ins that cover all your pet's needs." },
            { icon: Heart, title: "Playtime & Love", desc: "Quality interaction so your pet doesn't feel lonely." },
            { icon: Sparkles, title: "Clean Up", desc: "Litter boxes, waste cleanup, and tidy spaces." },
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
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Drop-In Service Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"].map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{area}</Link>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Schedule a Drop-In Visit</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">Your pet is in great hands, even when you're away.</p>
          <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default DropIns;
