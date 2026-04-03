import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Car, Shield, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PetTaxi = () => (
  <>
    <Helmet>
      <title>Pet Taxi Service in Brooklyn, NY | Furrs N' Purrs Pet Care</title>
      <meta name="description" content="Safe, comfortable pet transportation in Brooklyn. Vet visits, grooming appointments & more. Serving Dyker Heights, Bay Ridge & beyond. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services/pet-taxi" />
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Pet Taxi in Brooklyn","provider":{"@type":"LocalBusiness","name":"Furrs N' Purrs Pet Care","telephone":"(347) 633-8034"},"areaServed":["Dyker Heights","Bay Ridge","Bensonhurst","Bath Beach","Fort Hamilton","Gravesend"]})}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← Back to Home</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Pet <span className="font-accent">Taxi</span> Service
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          Need to get your pet to the vet, groomer, or a new home? Our Pet Taxi provides safe and comfortable transportation for your pet to any destination in the Brooklyn area.
        </p>
        <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book Pet Taxi</Button></a>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">Why Use Our Pet Taxi?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Car, title: "Comfortable Rides", desc: "Climate-controlled, pet-friendly vehicles for a stress-free trip." },
            { icon: Shield, title: "Safe Transport", desc: "Secure carriers and experienced handlers for your pet's safety." },
            { icon: Clock, title: "On-Time Service", desc: "We arrive on schedule so you never miss an appointment." },
            { icon: MapPin, title: "Any Destination", desc: "Vet clinics, groomers, airports, or anywhere your pet needs to go." },
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
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Pet Taxi Service Areas</h2>
        <div className="flex flex-wrap gap-3">
          {["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"].map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{area}</Link>
          ))}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Schedule a Pet Taxi</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">We'll get your pet there safely and on time.</p>
          <a href="tel:3476338034"><Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Call (347) 633-8034</Button></a>
        </div>
      </section>
      <Footer />
    </div>
  </>
);

export default PetTaxi;
