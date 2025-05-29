import React, { useEffect } from "react";
import { Route, Routes } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Appointment from "./pages/Appointment";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

import { useTranslation } from "react-i18next";

// Hook personnalisé pour gérer langue et classe RTL
function useLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || navigator.language || "fr";

    // Appliquer la langue au <html>
    document.documentElement.lang = lang;

    // Liste des langues RTL
    const rtlLanguages = new Set(["ar", "he", "fa", "ur"]);
    const baseLang = lang.split("-")[0];

    if (rtlLanguages.has(baseLang)) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }, [i18n.language]);
}

function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/rendez-vous" element={<Appointment />} />
        <Route path="/temoignages" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  useLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
