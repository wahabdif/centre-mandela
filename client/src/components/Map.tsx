import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    L?: any;  // facultatif, car on vérifie son existence
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const lat = contactInfo?.location?.lat;
  const lng = contactInfo?.location?.lng;

  useEffect(() => {
    if (!lat || !lng) return;

    // Injection des fichiers CSS et JS Leaflet
    const injectLeafletAssets = () => {
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity =
          "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      if (!document.querySelector('script[src*="leaflet.js"]')) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = initMapWhenReady;
        document.head.appendChild(script);
      } else {
        initMapWhenReady();
      }
    };

    // Initialiser la carte dès que Leaflet est disponible
    const initMapWhenReady = () => {
      const interval = setInterval(() => {
        if (window.L && mapRef.current) {
          clearInterval(interval);
          initMap();
        }
      }, 100);
    };

    // Initialisation de la carte Leaflet
    const initMap = () => {
      if (!window.L || !mapRef.current) return;

      mapRef.current.innerHTML = ""; // nettoyer

      const map = window.L.map(mapRef.current).setView([lat, lng], 16);
      mapInstanceRef.current = map;

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Recalcul taille carte après affichage
      setTimeout(() => map.invalidateSize(), 500);

      const marker = window.L.marker([lat, lng]).addTo(map);

      const phone = contactInfo.phone.replace(/\s/g, "");
      const safeAddress = contactInfo.address.replace(/</g, "&lt;").replace(/>/g, "&gt;");

      marker.bindPopup(`
        <strong>Centre D'Imagerie Benameur</strong><br />
        ${safeAddress}<br />
        <a href="tel:${phone}">${contactInfo.phone}</a>
      `);

      marker.openPopup();
      setMapLoaded(true);
    };

    injectLeafletAssets();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [lat, lng]);

  if (!lat || !lng) {
    return (
      <div className="p-6 bg-red-50 text-red-700 rounded-md">
        Les coordonnées de la carte sont manquantes.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <Card className="rounded-xl shadow-lg md:col-span-8">
        <div
          ref={mapRef}
          id="map"
          className="w-full h-[450px] bg-gray-100 relative"
        >
          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
              <p className="text-gray-500">Chargement de la carte...</p>
            </div>
          )}
        </div>
        <CardContent className="p-6 bg-white">
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mr-2 mt-1" />
              <div>
                <h4 className="font-bold text-primary mb-1 text-lg">
                  Comment nous trouver
                </h4>
