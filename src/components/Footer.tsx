import dogCatFooter from "@/assets/dog-cat-footer.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background">
      {/* Upper footer */}
      <div className="px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <span className="text-xl font-heading">🐾 Furrs N' Purrs</span>
          <p className="mt-2 text-xs text-muted-foreground font-body">
            Copyright © Furrs N' Purrs Pet Care
          </p>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-body font-bold text-sm text-foreground mb-3">Pages</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            <li><a href="#" className="hover:text-foreground transition">Home</a></li>
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#services" className="hover:text-foreground transition">Services</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-body font-bold text-sm text-foreground mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground font-body">
            <li>Dog Walking</li>
            <li>Pet Sitting</li>
            <li>Boarding</li>
            <li>Drop-ins</li>
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

      {/* Bottom CTA */}
      <div className="mx-6 md:mx-12 lg:mx-20 mb-8 rounded-3xl bg-pink-soft flex flex-col md:flex-row items-center overflow-hidden">
        <div className="md:w-1/3 h-[200px] md:h-auto">
          <img src={dogCatFooter} alt="Dog and cat together" className="w-full h-full object-cover" loading="lazy" width={512} height={640} />
        </div>
        <div className="md:w-2/3 p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-heading text-foreground">
            Give your pet the best - Contact us!
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
    </footer>
  );
};

export default Footer;
