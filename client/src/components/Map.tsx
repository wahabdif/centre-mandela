import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/constants";

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Map initialization function
  useEffect(() => {
    // Create a script element for Google Maps API
    const loadGoogleMapsAPI = () => {
      const googleMapsScript = document.createElement('script');
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY || ''}&callback=initMap`;
      googleMapsScript.async = true;
      googleMapsScript.defer = true;
      
      // Define the global callback function
      window.initMap = function() {
        if (mapRef.current) {
          // Create the map
          const map = new google.maps.Map(mapRef.current, {
            center: { lat: contactInfo.location.lat, lng: contactInfo.location.lng },
            zoom: 16,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: true,
            zoomControl: true,
            styles: [
              {
                featureType: "all",
                elementType: "geometry.fill",
                stylers: [{ weight: "2.00" }]
              },
              {
                featureType: "all",
                elementType: "geometry.stroke",
                stylers: [{ color: "#9c9c9c" }]
              },
              {
                featureType: "all",
                elementType: "labels.text",
                stylers: [{ visibility: "on" }]
              },
              {
                featureType: "landscape",
                elementType: "all",
                stylers: [{ color: "#f2f2f2" }]
              },
              {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [{ color: "#e6e6e6" }]
              },
              {
                featureType: "poi.medical",
                elementType: "geometry.fill",
                stylers: [{ color: "#c2e2f2" }]
              },
              {
                featureType: "poi.medical",
                elementType: "labels.icon",
                stylers: [{ color: "#0056b3" }]
              },
              {
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#a0d1f2" }]
              }
            ]
          });

          // Create a custom marker
          const marker = new google.maps.Marker({
            position: { lat: contactInfo.location.lat, lng: contactInfo.location.lng },
            map: map,
            title: "Centre D'Imagerie Benameur",
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              fillColor: "#0056b3",
              fillOpacity: 1,
              strokeColor: "#fff",
              strokeWeight: 2,
              scale: 10
            },
            animation: google.maps.Animation.DROP
          });

          // Add an info window
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="font-family: 'Open Sans', sans-serif; padding: 8px;">
                <h3 style="font-family: 'Poppins', sans-serif; font-weight: bold; margin-bottom: 5px; color: #0056b3;">Centre D'Imagerie Benameur</h3>
                <p style="font-size: 14px; margin: 0;">${contactInfo.address}</p>
              </div>
            `
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
          
          setMapLoaded(true);
        }
      };

      // Attach the script to the DOM
      document.head.appendChild(googleMapsScript);
    };

    loadGoogleMapsAPI();

    // Cleanup
    return () => {
      // Remove the global callback
      if (window.initMap) {
        window.initMap = undefined;
      }
    };
  }, []);

  return (
    <Card className="rounded-lg shadow-lg overflow-hidden h-full">
      <div 
        ref={mapRef} 
        id="map" 
        className="w-full h-[400px] bg-gray-200 relative"
      >
        {!mapLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}
        {/* Fallback iframe if no API key is provided */}
        {!process.env.GOOGLE_MAPS_API_KEY && (
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6505.926998200266!2d-0.6436311326176894!3d35.699058979230146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7e884f7c2a0b7d%3A0xba7e51b06ac46b9d!2sBoulevard%20Hammou%20Boutlelis%2C%20Oran!5e0!3m2!1sfr!2sdz!4v1644320011234"
            allowFullScreen
            loading="lazy"
          ></iframe>
        )}
      </div>
      <CardContent className="bg-white p-4">
        <h4 className="font-bold text-primary">Comment nous trouver</h4>
        <p className="text-sm text-dark">
          À proximité du centre-ville d'Oran. Parking disponible pour les patients.
        </p>
      </CardContent>
    </Card>
  );
}
