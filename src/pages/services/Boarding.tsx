import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Home, Moon, Heart, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Boarding = () => (
  <>
    <Helmet>
      <title>Pet Boarding Services in Brooklyn, NY | Furrs N' Purrs Pet Care</title>
      <meta name="description" content="Overnight pet boarding in Dyker Heights & Brooklyn. Your pet sleeps in a loving home environment. All animals welcome. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services/boarding" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← Back to Home</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Pet <span className="font-accent">Boarding</span> Services
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          Traveling and need a safe place for your pet? Our boarding service provides overnight care in a warm, loving environment where your pet will feel right at home. We accommodate dogs, cats, and all types of pets.
        </p>
        <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book Boarding</Button></a>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">Our Boarding Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Home, title: "Home-Like Setting", desc: "No cages — your pet stays in a comfortable, home environment." },
            { icon: Moon, title: "Overnight Care", desc: "Round-the-clock supervision and attention for your pet." },
            { icon: Heart, title: "Personalized Attention", desc: "We follow your pet's routine, diet, and medication schedule." },
            { icon: Shield, title: "Safe & Clean", desc: "A clean, secure space where your pet can relax and play." },
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
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Boarding Service Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"].map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{area}</Link>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Book Boarding Today</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">Your pet deserves a vacation too — in a loving home.</p>
          <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default Boarding;
