import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Camera, Shield, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const allServices = [
  { label: "Dog Walking", path: "/services/dog-walking" },
  { label: "Pet Sitting", path: "/services/pet-sitting" },
  { label: "Boarding", path: "/services/boarding" },
  { label: "Pet Taxi", path: "/services/pet-taxi" },
  { label: "Drop-In Visits", path: "/services/drop-ins" },
  { label: "Special Pet Care", path: "/services/special-pet-care" },
];

const WeddingPetAttendant = () => (
  <>
    <Helmet>
      <title>Wedding Pet Attendant in Brooklyn, NY | Furrs N' Purrs Pet Care</title>
      <meta name="description" content="Include your pet in your big day with our wedding pet attendant service in Brooklyn, NY. We handle your furry family member so you can focus on saying 'I do.' Serving Dyker Heights, Bay Ridge & beyond. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services/wedding-pet-attendant" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Wedding Pet Attendant",
        "provider": { "@type": "LocalBusiness", "name": "Furrs N' Purrs Pet Care", "telephone": "(347) 633-8034", "address": { "@type": "PostalAddress", "streetAddress": "998 86th St", "addressLocality": "Brooklyn", "addressRegion": "NY", "postalCode": "11228" } },
        "areaServed": ["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"],
        "description": "Professional wedding pet attendant service in Brooklyn. We keep your pet calm, photo-ready, and happy throughout your ceremony and reception."
      })}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/services" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← All Services</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Wedding Pet <span className="font-accent">Attendant</span>
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-4">
          Your pet is family — why leave them out of the biggest day of your life? Our wedding pet attendant service ensures your furry companion is part of the celebration without the stress. We handle transport, grooming touch-ups, bathroom breaks, and keep your pet calm and photo-ready from the first look to the last dance.
        </p>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          Whether your dog is the ring bearer or your cat makes a cameo in the ceremony photos, Furrs N' Purrs has you covered. We coordinate with your photographer, wedding planner, and venue to make every pet moment seamless.
        </p>
        <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book Your Wedding Pet Attendant</Button></a>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">What Our Wedding Pet Attendant Does</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "Calm & Comfort", desc: "We keep your pet relaxed with familiar toys, treats, and gentle handling throughout the event." },
            { icon: Camera, title: "Photo-Ready", desc: "Quick grooming touch-ups, outfit adjustments, and positioning so your pet looks perfect in every shot." },
            { icon: Shield, title: "Safe Supervision", desc: "Constant one-on-one supervision — bathroom breaks, water, shade, and a quiet retreat when needed." },
            { icon: Sparkles, title: "Full Coordination", desc: "We work with your planner, photographer, and venue to time every pet moment perfectly." },
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
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">We Also Serve Your Pet Beyond the Big Day</h2>
        <p className="text-muted-foreground font-body text-sm mb-6">Explore our other professional pet care services available across Brooklyn:</p>
        <div className="flex flex-wrap gap-3">
          {allServices.map((s) => (
            <Link key={s.path} to={s.path} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{s.label}</Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Wedding Pet Attendant Service Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"].map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{area}</Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Planning a Wedding With Your Pet?</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">Let us make your furry family member part of the celebration — stress-free.</p>
          <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default WeddingPetAttendant;
