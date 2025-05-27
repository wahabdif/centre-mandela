import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Add TypeScript type for Leaflet
declare global {
  interface Window {
    L: any;
    _leaflet_id_map?: Record<string, any>;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadLeafletMap = () => {
      if (!mapRef.current) return;

      // Load CSS
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const leafletCss = document.createElement("link");
        leafletCss.rel = "stylesheet";
        leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        leafletCss.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        leafletCss.crossOrigin = "";
        document.head.appendChild(leafletCss);
      }

      // Load JS
      if (!document.querySelector('script[src*="leaflet.js"]')) {
        const leafletScript = document.createElement("script");
        leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        leafletScript.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        leafletScript.crossOrigin = "";
        leafletScript.onload = () => waitForLeafletAndInit();
        document.head.appendChild(leafletScript);
      } else {
        waitForLeafletAndInit();
      }
    };

    const waitForLeafletAndInit = (retries = 10) => {
      if (window.L && typeof window.L.map === "function") {
        initMap();
      } else if (retries > 0) {
        setTimeout(() => waitForLeafletAndInit(retries - 1), 200);
      } else {
        console.error("Leaflet n'a pas pu être chargé.");
      }
    };

    function initMap() {
      try {
        if (!mapRef.current || !window.L || !window.L.map) {
          console.warn("Leaflet indisponible.");
          return;
        }

        mapRef.current.innerHTML = "";

        const map = window.L.map(mapRef.current).setView(
          [contactInfo.location.lat, contactInfo.location.lng],
          16
        );

        window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        setTimeout(() => map.invalidateSize(), 500);

        const customIcon = window.L.divIcon({
          className: "custom-div-icon",
          html: `<div style="background-color: #0056b3; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
          iconSize: [30, 30],
          iconAnchor: [15, 15],
        });

        const marker = window.L.marker([contactInfo.location.lat, contactInfo.location.lng], {
          icon: customIcon,
          title: "Centre D'Imagerie Benameur",
        }).addTo(map);

        const popupContent = `
          <div style="font-family: 'Open Sans', sans-serif; padding: 12px; min-width: 220px; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h3 style="font-family: 'Poppins', sans-serif; font-weight: bold; margin-bottom: 10px; color: #0056b3; font-size: 17px; border-bottom: 2px solid #e0f0ff; padding-bottom: 8px;">Centre D'Imagerie Benameur</h3>
            <p style="font-size: 14px; margin: 0 0 12px 0; color: #333;">${contactInfo.address}</p>
            <p style="font-size: 13px; margin: 0 0 12px 0; color: #666;"><span style="color: #0056b3; font-weight: 600;">Tél:</span> ${contactInfo.phone}</p>
            <div style="display: flex; justify-content: space-between;">
              <a href="https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}" 
                 target="_blank" 
                 style="color: #0056b3; text-decoration: none; font-weight: 600; font-size: 13px; display: inline-flex; align-items: center; background-color: #e0f0ff; padding: 6px 10px; border-radius: 4px;">
                <span style="margin-right: 4px;">Itinéraire</span>
              </a>
              <a href="tel:${contactInfo.phone.replace(/\s/g, '')}" 
                 style="color: #0056b3; text-decoration: none; font-weight: 600; font-size: 13px; display: inline-flex; align-items: center; background-color: #e0f0ff; padding: 6px 10px; border-radius: 4px;">
                <span style="margin-right: 4px;">Appeler</span>
              </a>
            </div>
          </div>
        `;
        marker.bindPopup(popupContent);
        marker.openPopup();

        window.L.circle([contactInfo.location.lat, contactInfo.location.lng], {
          color: "#0056b3",
          fillColor: "#0056b3",
          fillOpacity: 0.15,
          radius: 200,
          weight: 2,
        }).addTo(map);

        const directionIcon = window.L.divIcon({
          className: "direction-icon",
          html: `<div style="font-size: 24px; color: #0056b3; font-weight: bold;">↑</div>`,
          iconSize: [24, 24],
          iconAnchor: [12, 12],
        });

        window.L.marker([contactInfo.location.lat + 0.0022, contactInfo.location.lng], {
          icon: directionIcon,
          title: "Centre Ville",
        }).addTo(map);

        setMapLoaded(true);
      } catch (err) {
        console.error("Erreur lors de l'initialisation de la carte :", err);
      }
    }

    loadLeafletMap();

    return () => {
      if (mapRef.current && window.L && window.L.map) {
        const maps = Object.values(window.L._leaflet_id_map || {});
        for (const mapInstance of maps) {
          if (mapInstance && "_container" in mapInstance && mapInstance._container === mapRef.current) {
            (mapInstance as any).remove();
            break;
          }
        }
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <Card className="rounded-xl shadow-lg overflow-hidden md:col-span-8 h-full">
        <div ref={mapRef} id="map" className="w-full h-[450px] bg-gray-100 relative">
          {!mapLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4"></div>
              <p className="text-gray-500">Chargement de la carte...</p>
            </div>
          )}
        </div>
        <CardContent className="bg-white p-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-primary text-lg">Comment nous trouver</h4>
                <p className="text-gray-700">
                  Notre centre est idéalement situé à proximité du centre-ville d'Oran. Parking gratuit disponible pour tous nos patients.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <div className="flex items-center mb-2">
                <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink
