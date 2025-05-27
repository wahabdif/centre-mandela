import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";
import { MapPin, Navigation, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

declare global {
  interface Window {
    L: any;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const loadLeafletMap = () => {
      if (!mapRef.current) return;

      // Charger la feuille de style si absente
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const leafletCss = document.createElement("link");
        leafletCss.rel = "stylesheet";
        leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        leafletCss.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        leafletCss.crossOrigin = "";
        document.head.appendChild(leafletCss);
      }

      // Charger le script Leaflet si absent
      if (!document.querySelector('script[src*="leaflet.js"]')) {
        const leafletScript = document.createElement("script");
        leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        leafletScript.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        leafletScript.crossOrigin = "";
        leafletScript.onload = () => {
          const interval = setInterval(() => {
            if (window.L) {
              clearInterval(interval);
              initializeMap();
            }
          }, 100);
        };
        document.head.appendChild(leafletScript);
      } else {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.L) return;

      mapRef.current.innerHTML = "";

      const { lat, lng } = contactInfo.location;
      const map = window.L.map(mapRef.current).setView([lat, lng], 16);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      setTimeout(() => map.invalidateSize(), 500);

      const customIcon = window.L.divIcon({
        className: "custom-div-icon",
        html: `<div style="background-color: #0056b3; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15],
      });

      const marker = window.L.marker([lat, lng], {
        icon: customIcon,
        title: "Centre D'Imagerie Benameur",
      }).addTo(map);

      const popupContent = `
        <div style="font-family: 'Poppins', sans-serif; padding: 12px; min-width: 220px;">
          <h3 style="font-weight: bold; margin-bottom: 8px; color: #0056b3;">Centre D'Imagerie Benameur</h3>
          <p style="margin-bottom: 6px; color: #333;">${contactInfo.address}</p>
          <p style="margin-bottom: 12px; color: #555;"><strong>Tél:</strong> ${contactInfo.phone}</p>
          <div style="display: flex; gap: 8px;">
            <a href="https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}" target="_blank" style="text-decoration:none;color:#0056b3;font-weight:600;">Itinéraire</a>
            <a href="tel:${contactInfo.phone.replace(/\s/g, "")}" style="text-decoration:none;color:#0056b3;font-weight:600;">Appeler</a>
          </div>
        </div>
      `;
      marker.bindPopup(popupContent).openPopup();

      window.L.circle([lat, lng], {
        color: "#0056b3",
        fillColor: "#0056b3",
        fillOpacity: 0.15,
        radius: 200,
      }).addTo(map);

      setMapLoaded(true);
    };

    loadLeafletMap();

    return () => {
      if (mapRef.current && window.L?.map) {
        const el = mapRef.current;
        const mapInstances = window.L.DomUtil.get(el);
        if (mapInstances) {
          window.L.map(el).remove();
        }
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Carte */}
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
                <p className="text-gray-700">
                  Le centre est situé à proximité du centre-ville d'Oran. Un
                  parking gratuit est à disposition.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 space-y-2">
              <p className="text-gray-800">
                <strong>Adresse :</strong> {contactInfo.address}
              </p>
              <p className="text-gray-800">
                <strong>Téléphone :</strong> {contactInfo.phone}
              </p>
              <p className="text-gray-800">
                <strong>Coordonnées GPS :</strong>{" "}
                {contactInfo.location.lat.toFixed(6)},{" "}
                {contactInfo.location.lng.toFixed(6)}
              </p>
              <div className="flex gap-4 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}`,
                      "_blank"
                    )
                  }
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Itinéraire
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    (window.location.href = `tel:${contactInfo.phone.replace(
                      /\s/g,
                      ""
                    )}`)
                  }
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Coordonnées */}
      <Card className="rounded-xl shadow-lg md:col-span-4 bg-primary text-white">
        <div className="h-24 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
          <h3 className="text-xl font-bold">Nos coordonnées</h3>
        </div>
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start">
            <MapPin className="w-5 h-5 mr-3" />
            <div>
              <h4 className="font-semibold">Adresse</h4>
              <p>{contactInfo.address}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Phone className="w-5 h-5 mr-3" />
            <div>
              <h4 className="font-semibold">Téléphone</h4>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
          <div className="flex items-start">
            <Mail className="w-5 h-5 mr-3" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <a href={`mailto:${contactInfo.email}`} className="underline">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <Clock className="w-5 h-5 mr-3" />
            <div>
              <h4 className="font-semibold mb-1">Horaires</h4>
              <p>Lun-Ven : 08h00 - 18h00</p>
              <p>Samedi : 08h00 - 13h00</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
