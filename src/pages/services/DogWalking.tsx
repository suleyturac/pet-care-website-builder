import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dog, Clock, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const DogWalking = () => (
  <>
    <Helmet>
      <title>Dog Walking Services in Brooklyn, NY | Furrs N' Purrs Pet Care</title>
      <meta name="description" content="Professional dog walking services in Dyker Heights, Bay Ridge, Bensonhurst & Brooklyn. Reliable, loving walks for your furry friend. Call (347) 633-8034." />
      <link rel="canonical" href="https://fnppetcare.com/services/dog-walking" />
      <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Dog Walking Services in Brooklyn","provider":{"@type":"LocalBusiness","name":"Furrs N' Purrs Pet Care","telephone":"(347) 633-8034"},"areaServed":["Dyker Heights","Bay Ridge","Bensonhurst","Bath Beach","Fort Hamilton","Gravesend"],"description":"Professional dog walking services in Brooklyn, NY. Reliable, loving walks tailored to your dog's needs."})}</script>
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="px-6 md:px-12 lg:px-20 pt-16 pb-10">
        <Link to="/services" className="text-sm font-body text-muted-foreground hover:text-foreground transition">← All Services</Link>
        <h1 className="text-3xl md:text-5xl font-heading text-foreground mt-6 mb-4">
          Professional Dog <span className="font-accent">Walking</span> Services
        </h1>
        <p className="text-muted-foreground font-body text-base max-w-2xl mb-8">
          At Furrs N' Purrs, we provide reliable, caring dog walking services in Brooklyn, NY. Whether your pup needs a quick midday walk or a longer adventure, our experienced walkers ensure every outing is safe, fun, and tailored to your dog's needs.
        </p>
        <a href="tel:3476338034">
          <Button className="rounded-full bg-primary text-primary-foreground px-8 py-3 font-body">Book a Dog Walk</Button>
        </a>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12 bg-muted">
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-8">Why Choose Our Dog Walking Service?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Dog, title: "Experienced Walkers", desc: "Our team knows how to handle dogs of all sizes and temperaments." },
            { icon: Clock, title: "Flexible Scheduling", desc: "We're open 24 hours — walks whenever your dog needs them." },
            { icon: MapPin, title: "Local to Brooklyn", desc: "We know the best routes in Dyker Heights, Bay Ridge, and beyond." },
            { icon: Heart, title: "Genuine Love for Pets", desc: "Every walk is filled with attention, care, and plenty of treats." },
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
        <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-4">Areas We Serve for Dog Walking</h2>
        <p className="text-muted-foreground font-body text-sm mb-6">We offer dog walking services throughout southern Brooklyn including:</p>
        <div className="flex flex-wrap gap-3">
          {["Dyker Heights", "Bay Ridge", "Bensonhurst", "Bath Beach", "Fort Hamilton", "Gravesend"].map((area) => (
            <Link key={area} to={`/areas/${area.toLowerCase().replace(/ /g, "-")}`} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">
              {area}
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-heading text-foreground mb-3">Explore More Services</h3>
          <div className="flex flex-wrap gap-3">
            {[{l:"Pet Sitting",p:"/services/pet-sitting"},{l:"Boarding",p:"/services/boarding"},{l:"Pet Taxi",p:"/services/pet-taxi"},{l:"Drop-Ins",p:"/services/drop-ins"},{l:"Special Pet Care",p:"/services/special-pet-care"},{l:"Wedding Pet Attendant",p:"/services/wedding-pet-attendant"}].map(s=>(
              <Link key={s.p} to={s.p} className="px-4 py-2 rounded-full border border-border text-sm font-body text-foreground hover:bg-muted transition">{s.l}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-12 bg-lime rounded-3xl mx-6 md:mx-12 lg:mx-20 mb-16">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-heading text-foreground mb-3">Ready to Book a Dog Walk?</h2>
          <p className="text-muted-foreground font-body text-sm mb-6">Call us today or send an email. We'd love to meet your pup!</p>
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

export default DogWalking;
