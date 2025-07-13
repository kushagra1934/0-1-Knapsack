// components/TruckMarker.tsx
import React from 'react';
import { Marker } from 'react-map-gl';

interface Truck {
  id: number;
  currentLat: number;
  currentLng: number;
  // Include additional truck properties if needed
}

interface TruckMarkerProps {
  truck: Truck;
  selectedTruck: number | null;
  setSelectedTruck: (id: number | null) => void;
}

export const TruckMarker: React.FC<TruckMarkerProps> = ({ truck, selectedTruck, setSelectedTruck }) => {
  return (
    <Marker latitude={truck.currentLat} longitude={truck.currentLng} anchor="center">
      <div
        className='relative'
        onMouseEnter={() => setSelectedTruck(truck.id)}
        onMouseLeave={() => setSelectedTruck(null)}
      >
        <img
          src='/images/truck.png' // Ensure this path is correct
          alt={`Truck ${truck.id}`}
          className='w-8 h-8'
          style={{ transform: 'translate(-50%, -50%)' }} // Center the image on the marker
        />
        {selectedTruck === truck.id && (
          <div className='absolute bg-white text-black p-2 rounded shadow-lg'
            style={{ transform: 'translate(-50%, -100%)', top: -40 }}
          >
            <div><strong>Truck ID:</strong> {truck.id}</div>
            <div><strong>Current Location:</strong> {truck.currentLat.toFixed(2)}, {truck.currentLng.toFixed(2)}</div>
          </div>
        )}
      </div>
    </Marker>
  );
};
