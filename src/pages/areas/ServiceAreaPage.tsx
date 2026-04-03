import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dog, Home, Car, Sparkles, Clock, MapPin } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const areaData: Record<string, { name: string; description: string; nearby: string[] }> = {
  "dyker-heights": {
    name: "Dyker Heights",
    description: "Dyker Heights is a beautiful residential neighborhood in southwestern Brooklyn known for its stunning Christmas lights displays and tree-lined streets. Furrs N' Purrs is proud to call Dyker Heights home, providing top-quality pet care services to this wonderful community. Whether you need daily dog walking, overnight boarding, or specialized care for exotic pets, we're right around the corner.",
    nearby: ["Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"],
  },
  "bay-ridge": {
    name: "Bay Ridge",
    description: "Bay Ridge is a vibrant Brooklyn neighborhood with stunning views of the Verrazzano-Narrows Bridge and a strong sense of community. Pet owners in Bay Ridge trust Furrs N' Purrs for reliable dog walking, pet sitting, boarding, and specialized pet care. We know the best walking routes along Shore Road and throughout the neighborhood.",
    nearby: ["Dyker Heights", "Fort Hamilton", "Bensonhurst", "Bath Beach", "Gravesend"],
  },
  "bensonhurst": {
    name: "Bensonhurst",
    description: "Bensonhurst is a diverse, family-friendly neighborhood in southern Brooklyn with beautiful parks and quiet residential streets — perfect for dog walks! Furrs N' Purrs serves Bensonhurst pet owners with professional dog walking, pet sitting, drop-in visits, boarding, and care for all types of pets including cats, birds, and reptiles.",
    nearby: ["Dyker Heights", "Bath Beach", "Gravesend", "Bay Ridge", "Fort Hamilton"],
  },
  "bath-beach": {
    name: "Bath Beach",
    description: "Bath Beach is a peaceful waterfront neighborhood in Brooklyn offering beautiful coastal views and quiet streets. Pet owners in Bath Beach rely on Furrs N' Purrs for dependable dog walking along the waterfront, pet sitting, boarding, and specialized care for all types of animals. We bring the same love and attention to every pet in the neighborhood.",
    nearby: ["Dyker Heights", "Bensonhurst", "Gravesend", "Bay Ridge", "Fort Hamilton"],
  },
  "fort-hamilton": {
    name: "Fort Hamilton",
    description: "Fort Hamilton is a historic Brooklyn neighborhood at the foot of the Verrazzano-Narrows Bridge, home to the Fort Hamilton Army Base and beautiful waterfront parks. Furrs N' Purrs provides trusted pet care services to Fort Hamilton residents including dog walking along Shore Road, pet sitting, boarding, and pet taxi services.",
    nearby: ["Bay Ridge", "Dyker Heights", "Bensonhurst", "Bath Beach", "Gravesend"],
  },
  "gravesend": {
    name: "Gravesend",
    description: "Gravesend is one of Brooklyn's oldest neighborhoods with a rich history and strong community spirit. Pet owners in Gravesend choose Furrs N' Purrs for professional, caring pet services. From daily dog walks and drop-in visits to overnight boarding and exotic pet care, we serve the Gravesend community with dedication and love.",
    nearby: ["Bensonhurst", "Bath Beach", "Dyker Heights", "Bay Ridge", "Fort Hamilton"],
  },
};

const services = [
  { icon: Dog, title: "Dog Walking", path: "/services/dog-walking" },
  { icon: Home, title: "Pet Sitting", path: "/services/pet-sitting" },
  { icon: Home, title: "Boarding", path: "/services/boarding" },
  { icon: Car, title: "Pet Taxi", path: "/services/pet-taxi" },
  { icon: Clock, title: "Drop-In Visits", path: "/services/drop-ins" },
  { icon: Sparkles, title: "Special Pet Care", path: "/services/special-pet-care" },
  { icon: Dog, title: "Wedding Pet Attendant", path: "/services/wedding-pet-attendant" },
];

const ServiceAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = areaData[slug || ""];

  if (!area) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="px-6 md:px-12 lg:px-20 py-24 text-center">
          <h1 className="text-3xl font-heading text-foreground">Area not found</h1>
          <Link to="/" className="mt-4 inline-block text-sm font-body text-muted-foreground hover:text-foreground">← Back to Home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Pet Care Services in {area.name}, Brooklyn NY | Furrs N' Purrs</title>
        <meta name="description" content={`Professional dog walking, pet sitting, boarding & pet care in ${area.name}, Brooklyn. Serving ${area.name} and nearby areas. Open 24 hours. Call (347) 633-8034.`} />
        <link rel="canonical" href={`https://fnppetcare.com/areas/${slug}`} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
          <Link to="/services" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← All Services</Link>
          <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
            Pet Care in <span className="font-accent">{area.name}</span>, Brooklyn
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-3xl mb-8">{area.description}</p>
          <div className="flex items-center gap-4">
            <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
            <a href="mailto:fnppetcare@gmail.com" className="text-sm font-body text-foreground hover:text-muted-foreground">Email Us →</a>
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">Services Available in {area.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <Link key={i} to={s.path} className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition group">
                <s.icon className="w-8 h-8 text-lime-strong mb-3" />
                <h3 className="font-heading text-lg text-foreground mb-2 group-hover:text-lime-strong transition">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body">Professional {s.title.toLowerCase()} services in {area.name}, Brooklyn.</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-16">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Why {area.name} Pet Owners Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: MapPin, title: "Local & Trusted", desc: `We're based in Brooklyn and know ${area.name} inside and out.` },
              { icon: Clock, title: "Open 24 Hours", desc: "Early morning walks, late-night emergencies — we're always here." },
              { icon: Dog, title: "All Pets Welcome", desc: "Dogs, cats, birds, reptiles, aquatics — no pet is too big or too small." },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-6">
                <item.icon className="w-8 h-8 text-lime-strong mb-3" />
                <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Nearby Service Areas</h2>
          <div className="flex flex-wrap gap-3">
            {area.nearby.map((a) => (
              <Link key={a} to={`/areas/${a.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{a}</Link>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Need Pet Care in {area.name}?</h2>
            <p className="text-muted-foreground font-body text-sm mb-6">We're your neighbors — and we'd love to meet your pet!</p>
            <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default ServiceAreaPage;
