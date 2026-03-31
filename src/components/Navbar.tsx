import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="relative bg-background z-50">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <div className="flex items-center gap-2">
          <a href="/" className="text-xl font-heading hover:opacity-80 transition">🐾 Furrs N' Purrs</a>
        </div>
        <div className="hidden md:flex items-center gap-8 font-body text-sm">
          <a href="#" className="text-foreground hover:text-muted-foreground transition">Home</a>
          <a href="#about" className="text-foreground hover:text-muted-foreground transition">About</a>
          <a href="#services" className="text-foreground hover:text-muted-foreground transition">Services</a>
          <a href="#contact" className="text-foreground hover:text-muted-foreground transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:3476338034" className="hidden md:block">
            <Button className="rounded-full bg-primary text-primary-foreground px-6 py-2 text-sm font-body">
              Book an appointment
            </Button>
          </a>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-50">
          <div className="flex flex-col px-6 py-4 gap-4 font-body text-base">
            <a href="#" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-muted-foreground transition py-2">Home</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-muted-foreground transition py-2">About</a>
            <a href="#services" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-muted-foreground transition py-2">Services</a>
            <a href="#contact" onClick={() => setMobileOpen(false)} className="text-foreground hover:text-muted-foreground transition py-2">Contact</a>
            <a href="tel:3476338034" onClick={() => setMobileOpen(false)}>
              <Button className="rounded-full bg-primary text-primary-foreground w-full py-3 font-body">
                Book an appointment
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
