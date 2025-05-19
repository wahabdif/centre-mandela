import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";
import { MapPin, Navigation, Info, Phone, Mail, Clock } from "lucide-react";

// Add TypeScript type for Leaflet
declare global {
  interface Window {
    L: any;
  }
}

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Map initialization function
  useEffect(() => {
    // Enhanced map implementation with Leaflet (open-source)
    const loadLeafletMap = () => {
      // Only load if the map ref exists
      if (!mapRef.current) return;

      // Create and add Leaflet CSS if not present
      if (!document.querySelector('link[href*="leaflet.css"]')) {
        const leafletCss = document.createElement('link');
        leafletCss.rel = 'stylesheet';
        leafletCss.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        leafletCss.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        leafletCss.crossOrigin = '';
        document.head.appendChild(leafletCss);
      }

      // Create and add Leaflet script if not present
      if (!document.querySelector('script[src*="leaflet.js"]')) {
        const leafletScript = document.createElement('script');
        leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        leafletScript.crossOrigin = '';
        leafletScript.onload = initMap;
        document.head.appendChild(leafletScript);
      } else {
        // If script is already loaded, initialize map directly
        initMap();
      }
    };

    // Initialize the map with Leaflet
    function initMap() {
      if (!mapRef.current || !window.L) return;

      // Clear any existing map
      mapRef.current.innerHTML = '';
      
      // Initialize map
      const map = window.L.map(mapRef.current).setView([contactInfo.location.lat, contactInfo.location.lng], 16);

      // Add OpenStreetMap tiles with custom styling
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom icon for marker
      const customIcon = window.L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: #0056b3; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,0,0,0.3);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      // Add marker with custom icon
      const marker = window.L.marker([contactInfo.location.lat, contactInfo.location.lng], {
        icon: customIcon,
        title: "Centre D'Imagerie Benameur"
      }).addTo(map);

      // Create a popup for the marker
      const popupContent = `
        <div style="font-family: 'Open Sans', sans-serif; padding: 10px; min-width: 200px;">
          <h3 style="font-family: 'Poppins', sans-serif; font-weight: bold; margin-bottom: 8px; color: #0056b3; font-size: 16px;">Centre D'Imagerie Benameur</h3>
          <p style="font-size: 14px; margin: 0 0 8px 0;">${contactInfo.address}</p>
          <a href="https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}" 
             target="_blank" 
             style="color: #0056b3; text-decoration: none; font-weight: 600; font-size: 13px; display: inline-flex; align-items: center;">
            <span style="margin-right: 4px;">Itinéraire</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
          </a>
        </div>
      `;

      // Bind popup to marker
      marker.bindPopup(popupContent);
      
      // Open popup on load
      marker.openPopup();

      // Add a more visible circle around the marker to highlight the area
      window.L.circle([contactInfo.location.lat, contactInfo.location.lng], {
        color: '#0056b3',
        fillColor: '#0056b3',
        fillOpacity: 0.15,
        radius: 200,
        weight: 2
      }).addTo(map);
      
      // Add a directional marker to help with orientation
      const directionIcon = window.L.divIcon({
        className: 'direction-icon',
        html: `<div style="font-size: 24px; color: #0056b3; font-weight: bold;">↑</div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });
      
      // Place the directional marker 250m north of the center
      window.L.marker([contactInfo.location.lat + 0.0022, contactInfo.location.lng], {
        icon: directionIcon,
        title: "Centre Ville"
      }).addTo(map);

      setMapLoaded(true);
    }

    loadLeafletMap();

    // Cleanup function
    return () => {
      if (mapRef.current && window.L && window.L.map) {
        // Get all maps and find the one associated with our element
        const maps = Object.values(window.L._leaflet_id_map || {});
        for (const mapInstance of maps) {
          if (mapInstance._container === mapRef.current) {
            mapInstance.remove();
            break;
          }
        }
      }
    };
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <Card className="rounded-xl shadow-lg overflow-hidden md:col-span-8 h-full">
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
        <CardContent className="bg-white p-6">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary mt-1 mr-2 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-primary text-lg">Comment nous trouver</h4>
              <p className="text-gray-700">
                Notre centre est idéalement situé à proximité du centre-ville d'Oran. Parking gratuit disponible pour tous nos patients.
              </p>
              <div className="flex space-x-4 mt-3">
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${contactInfo.location.lat},${contactInfo.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Navigation className="h-4 w-4 mr-1" />
                  <span>Itinéraire</span>
                </a>
                <button 
                  onClick={() => window.open(`https://www.google.com/maps/@${contactInfo.location.lat},${contactInfo.location.lng},18z`, '_blank')}
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Info className="h-4 w-4 mr-1" />
                  <span>Plus d'informations</span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Info Card */}
      <Card className="rounded-xl shadow-lg md:col-span-4 bg-primary text-white overflow-hidden">
        <div className="h-24 bg-gradient-to-r from-primary to-secondary relative">
          <div className="absolute inset-0 opacity-20" 
               style={{backgroundImage: 'url("https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800")', 
                      backgroundSize: 'cover', 
                      backgroundPosition: 'center'}}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-2xl font-bold">Nos coordonnées</h3>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex">
              <MapPin className="h-6 w-6 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Adresse</h4>
                <p className="opacity-90">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex">
              <Phone className="h-6 w-6 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Téléphone</h4>
                <p className="opacity-90">{contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex">
              <Mail className="h-6 w-6 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href={`mailto:${contactInfo.email}`} className="opacity-90 hover:underline">{contactInfo.email}</a>
              </div>
            </div>
            
            <div className="flex">
              <Clock className="h-6 w-6 mr-4 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">Horaires d'ouverture</h4>
                <div className="space-y-1 opacity-90">
                  <p>Lundi - Vendredi: 8h00 - 18h00</p>
                  <p>Samedi: 8h00 - 13h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
