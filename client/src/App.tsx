import React, { useEffect } from "react";
import { Route, Switch } from "wouter";
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

import "@/lib/i18n"; // 👈 initialise i18next ici
import { useTranslation } from "react-i18next";

const rtlLanguages = ["ar", "he", "fa", "ur"];

function useLanguage() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = i18n.language || window.navigator.language;
    document.documentElement.lang = lang;

    if (rtlLanguages.includes(lang.split("-")[0])) {
      document.documentElement.classList.add("rtl");
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.classList.remove("rtl");
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/rendez-vous" component={Appointment} />
        <Route path="/temoignages" component={Testimonials} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  useLanguage();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
