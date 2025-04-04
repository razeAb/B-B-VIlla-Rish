import React, { useEffect } from "react";

function GoogleMaps() {
  useEffect(() => {
    const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    // Attach initMap to the global window object
    window.initMap = function () {
      if (!window.google) {
        console.error("Google Maps API is not loaded.");
        return;
      }

      const location = { lat: 32.960784, lng: 35.218707 };
      const map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
      });

      new window.google.maps.Marker({
        position: location,
        map: map,
        title: "Your Location",
      });

      document.getElementById("googleMapsLink").href = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
      document.getElementById("wazeLink").href = `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes`;
    };

    // Only load script if Google Maps isn't already loaded
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script); // Clean up
        delete window.initMap; // Clean up global
      };
    } else {
      window.initMap();
    }
  }, []);

  return (
    <div>
      <div id="map" style={{ height: "400px", width: "100%" }}></div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a id="googleMapsLink" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              padding: "10px 20px",
              margin: "5px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ניווט דרך Google Maps
          </button>
        </a>
        <a id="wazeLink" target="_blank" rel="noopener noreferrer">
          <button
            style={{
              padding: "10px 20px",
              margin: "5px",
              background: "black",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            ניווט דרך Waze
          </button>
        </a>
      </div>
    </div>
  );
}

export default GoogleMaps;
