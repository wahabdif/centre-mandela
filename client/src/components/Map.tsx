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
  const lat = contactInfo?.location?.lat;
  const lng = contactInfo?.location?.lng;

  useEffect(() => {
    if (!lat || !lng) return;

    const loadLeaflet = () => {
      if (!mapRef.current) return;

      // Inject CSS Leaflet si nécessaire
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        link.integrity =
          "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=";
        link.crossOrigin = "";
        document.head.appendChild(link);
      }

      // Inject JS Leaflet si nécessaire
      if (!document.querySelector('script[src*="leaflet.js"]')) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.integrity =
          "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=";
        script.crossOrigin = "";
        script.onload = () => waitForLeaflet();
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    const waitForLeaflet = () => {
      const interval = setInterval(() => {
        if (window.L) {
          clearInterval(interval);
          initMap();
        }
      }, 100);
    };

    const initMap = () => {
      if (!window.L || !mapRef.current) return;

      mapRef.current.innerHTML = "";

      const map = window.L.map(mapRef.current).setView([lat, lng], 16);

      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      setTimeout(() => map.invalidateSize(), 500);

      const marker = window.L.marker([lat, lng]).addTo(map);

      marker.bindPopup(`
        <strong>Centre D'Imagerie Benameur</strong><br />
        ${contactInfo.address}<br />
        <a href="tel:${contactInfo.phone.replace(/\s/g, "")}">${contactInfo.phone}</a>
      `);

      marker.openPopup();

      setMapLoaded(true);
    };

    loadLeaflet();

    return () => {
      // Clean up
      if (mapRef.current && window.L?.map) {
        try {
          window.L.map(mapRef.current).remove();
        } catch (e) {
          // ignore
        }
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
                <p className="text-gray-700">
                  Le centre est situé à proximité du centre-ville d'Oran.
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
                <strong>GPS :</strong> {lat.toFixed(6)}, {lng.toFixed(6)}
              </p>
              <div className="flex gap-4 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
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
