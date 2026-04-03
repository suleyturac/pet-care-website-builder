import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dog, Home, Car, Sparkles, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Dog, title: "Dog Walking & Pet Drop-Ins", desc: "Daily walks and quick check-in visits for feeding, playtime, medication, and companionship. We keep your pet active and happy while you're at work or away.", path: "/services/dog-walking", alt: "/services/drop-ins" },
  { icon: Home, title: "Pet Sitting", desc: "In-home pet sitting so your pet stays comfortable in their own environment. We follow your routines — feeding, walks, medication, and plenty of love.", path: "/services/pet-sitting" },
  { icon: Home, title: "Pet Boarding", desc: "Overnight boarding in a warm, cage-free home environment. Your pet gets round-the-clock attention, personalized care, and a cozy place to sleep.", path: "/services/boarding" },
  { icon: Car, title: "Pet Taxi", desc: "Safe, comfortable pet transportation to vet appointments, groomers, airports, or anywhere your pet needs to go in Brooklyn.", path: "/services/pet-taxi" },
  { icon: Sparkles, title: "Special & Exotic Pet Care", desc: "Expert care for reptiles, birds, aquatic pets, hamsters, rabbits, and other exotic companions. We understand their unique needs.", path: "/services/special-pet-care" },
  { icon: Heart, title: "Wedding Pet Attendant", desc: "Include your furry family member in your big day. We handle transport, grooming touch-ups, photo coordination, and supervision so you can focus on saying 'I do.'", path: "/services/wedding-pet-attendant" },
];

const areas = ["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"];

const ServicesIndex = () => (
  <>
    <Helmet>
      <title>Pet Care Services in Brooklyn, NY | Furrs N' Purrs Pet Care</title>
      <meta name="description" content="Full-service pet care in Brooklyn — dog walking, pet sitting, boarding, pet taxi, exotic pet care & wedding pet attendant. Serving Dyker Heights, Bay Ridge, Bensonhurst & more. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Furrs N' Purrs Pet Care",
        "telephone": "(347) 633-8034",
        "email": "fnppetcare@gmail.com",
        "address": { "@type": "PostalAddress", "streetAddress": "998 86th St", "addressLocality": "Brooklyn", "addressRegion": "NY", "postalCode": "11228" },
        "openingHours": "Mo-Su 00:00-23:59",
        "url": "https://fnppetcare.com/services"
      })}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← Back to Home</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Our Pet Care <span className="font-accent">Services</span>
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          From daily dog walks to wedding day pet attendants, Furrs N' Purrs offers comprehensive, professional pet care for every member of your family — furry, feathered, or scaled. Based in Dyker Heights, Brooklyn, we proudly serve the surrounding neighborhoods with love and reliability.
        </p>
        <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book a Service</Button></a>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link key={i} to={s.path} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition group flex flex-col justify-between">
              <div>
                <s.icon className="w-8 h-8 text-lime-strong mb-4" />
                <h2 className="font-heading text-xl text-foreground mb-2 group-hover:text-lime-strong transition">{s.title}</h2>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </div>
              <span className="mt-4 text-sm font-body text-foreground group-hover:text-lime-strong transition">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Service Areas</h2>
        <p className="text-muted-foreground font-body text-sm mb-6">We actively serve these Brooklyn neighborhoods — find pet care near you:</p>
        <div className="flex flex-wrap gap-3">
          {areas.map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{area}</Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Ready to Book?</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">Call us anytime — we're open 24 hours, 7 days a week.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
            <a href="mailto:fnppetcare@gmail.com" className="text-sm font-body text-foreground hover:text-muted-foreground">Email Us →</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default ServicesIndex;
