
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import PulgadasAMm from "./pages/PulgadasAMm";
import CentimetrosAPulgadas from "./pages/CentimetrosAPulgadas";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Add a ScrollToTop component to ensure page scrolls to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => {
  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Conversor de pulgadas a centímetros y centímetros a pulgadas. Herramientas de conversión gratuitas y precisas." />
                <link rel="canonical" href="https://pulgadas-a-cm.com" />
              </Helmet>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/pulgadas-a-mm" element={<PulgadasAMm />} />
                <Route path="/centimetros-a-pulgadas" element={<CentimetrosAPulgadas />} />
                <Route path="/contacto" element={<ContactUs />} />
                <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
                <Route path="/aviso-legal" element={<Disclaimer />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

export default App;
