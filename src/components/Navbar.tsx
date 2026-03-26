import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 bg-background">
      <div className="flex items-center gap-2">
        <span className="text-xl font-heading">🐾 Furrs N' Purrs</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-body text-sm">
        <a href="#" className="text-foreground hover:text-muted-foreground transition">Home</a>
        <a href="#about" className="text-foreground hover:text-muted-foreground transition">About</a>
        <a href="#services" className="text-foreground hover:text-muted-foreground transition">Services</a>
        <a href="tel:3476338034" className="text-foreground hover:text-muted-foreground transition">Contact</a>
      </div>
      <a href="tel:3476338034">
        <Button className="rounded-full bg-primary text-primary-foreground px-6 py-2 text-sm font-body">
          Book an appointment
        </Button>
      </a>
    </nav>
  );
};

export default Navbar;
