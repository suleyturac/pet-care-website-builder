import dogCatFooter from "@/assets/dog-cat-footer.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const servicePages = [
  { label: "Dog Walking", path: "/services/dog-walking" },
  { label: "Pet Sitting", path: "/services/pet-sitting" },
  { label: "Boarding", path: "/services/boarding" },
  { label: "Pet Taxi", path: "/services/pet-taxi" },
  { label: "Drop-ins", path: "/services/drop-ins" },
  { label: "Special Pet Care", path: "/services/special-pet-care" },
];

const serviceAreas = [
  { label: "Dyker Heights", path: "/areas/dyker-heights" },
  { label: "Bay Ridge", path: "/areas/bay-ridge" },
  { label: "Bensonhurst", path: "/areas/bensonhurst" },
  { label: "Bath Beach", path: "/areas/bath-beach" },
  { label: "Fort Hamilton", path: "/areas/fort-hamilton" },
  { label: "Gravesend", path: "/areas/gravesend" },
];

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Upper footer */}
      <div className="px-6 md:px-12 lg:px-20 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="text-xl font-heading">🐾 Furrs N' Purrs</Link>
          <p className="mt-2 text-xs text-muted-foreground font-body">
            Copyright © Furrs N' Purrs Pet Care
          </p>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.instagram.com/furrsnpurrs.petcare" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-5 h-5 text-foreground hover:text-muted-foreground transition" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/people/Furrs-N-Purrs-Pet-Care" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-5 h-5 text-foreground hover:text-muted-foreground transition" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-body font-bold text-sm text-foreground mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            {servicePages.map((s) => (
              <li key={s.path}><Link to={s.path} className="hover:text-foreground transition">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-body font-bold text-sm text-foreground mb-3">Service Areas</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            {serviceAreas.map((a) => (
              <li key={a.path}><Link to={a.path} className="hover:text-foreground transition">{a.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-body font-bold text-sm text-foreground mb-3">Pages</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            <li><Link to="/" className="hover:text-foreground transition">Home</Link></li>
            <li><a href="/#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="/#services" className="hover:text-foreground transition">Services</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-body font-bold text-sm text-foreground mb-3">Contact us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground font-body">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-foreground" />
              <span>998 86th St, Brooklyn, NY 11228</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0 text-foreground" />
              <a href="mailto:fnppetcare@gmail.com" className="hover:text-foreground transition">fnppetcare@gmail.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0 text-foreground" />
              <a href="tel:3476338034" className="hover:text-foreground transition">(347) 633-8034</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom CTA with overflow image */}
      <div className="mx-6 md:mx-12 lg:mx-20 mb-8 rounded-3xl bg-pink-soft relative overflow-visible">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 relative">
            <img
              src={dogCatFooter}
              alt="Dog and cat together"
              className="w-[280px] md:w-[320px] h-auto object-cover rounded-2xl md:absolute md:bottom-0 md:left-8 md:-top-16 mx-auto -mt-10 md:mt-0"
              loading="lazy"
              width={512}
              height={640}
            />
          </div>
          <div className="md:w-2/3 p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-heading text-foreground">
              Give your pet the <span className="font-accent">best</span> - Contact us!
            </h3>
            <div className="mt-4 flex items-center justify-center gap-4">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
