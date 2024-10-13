'use client';

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; // Import Mapbox CSS

const InteractiveMapComponent: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Check if map was previously initialized
  const mapInitialized = useRef(false);

  useEffect(() => {
    // Ensure the access token is set
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || '';

    // Check if the browser supports Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([longitude, latitude]);
        },
        (error) => {
          console.error("Error fetching user's location:", error);
          setUserLocation([-74.5, 40]); // Default location if geolocation fails
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setUserLocation([-74.5, 40]); // Default location
    }
  }, []);

  useEffect(() => {
    // Initialize the map if it has not been initialized
    if (userLocation && mapContainerRef.current && !mapInitialized.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current, // Container ID
        style: 'mapbox://styles/mapbox/streets-v11', // Map style
        center: userLocation, // Center the map at the user's location
        zoom: 12, // Initial zoom level
      });

      // Add navigation controls (zoom buttons)
      mapRef.current.addControl(new mapboxgl.NavigationControl());

      // Add a marker at the user's location
      new mapboxgl.Marker()
        .setLngLat(userLocation)
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Your Location</h3>'))
        .addTo(mapRef.current);

      // Mark the map as initialized
      mapInitialized.current = true;
    }

    // Clean up on unmount
    return () => {
      if (mapRef.current) mapRef.current.remove();
    };
  }, [userLocation]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-full rounded-lg shadow-md"
    />
  );
};

export default InteractiveMapComponent;
