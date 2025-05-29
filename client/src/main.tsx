import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container introuvable");
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>
);
