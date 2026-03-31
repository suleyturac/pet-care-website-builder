import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import DogWalking from "./pages/services/DogWalking.tsx";
import PetSitting from "./pages/services/PetSitting.tsx";
import Boarding from "./pages/services/Boarding.tsx";
import PetTaxi from "./pages/services/PetTaxi.tsx";
import DropIns from "./pages/services/DropIns.tsx";
import SpecialPetCare from "./pages/services/SpecialPetCare.tsx";
import ServiceAreaPage from "./pages/areas/ServiceAreaPage.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/dog-walking" element={<DogWalking />} />
            <Route path="/services/pet-sitting" element={<PetSitting />} />
            <Route path="/services/boarding" element={<Boarding />} />
            <Route path="/services/pet-taxi" element={<PetTaxi />} />
            <Route path="/services/drop-ins" element={<DropIns />} />
            <Route path="/services/special-pet-care" element={<SpecialPetCare />} />
            <Route path="/areas/:slug" element={<ServiceAreaPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
