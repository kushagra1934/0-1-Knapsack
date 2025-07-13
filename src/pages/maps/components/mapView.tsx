import React, { useState, useEffect } from 'react';
import Map, { Marker, Popup, Source, Layer, NavigationControl, ScaleControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Truck, updateTruckPositions } from '../data/realtimeData';
import { initializeTrucks } from '../data/trucks';
import truckImage from '/images/truck.png'; // Ensure this path is correct

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw';

export const MapView: React.FC = () => {
  const [truckLocations, setTruckLocations] = useState<Truck[]>([]);
  const [selectedTruck, setSelectedTruck] = useState<Truck | null>(null);
  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    const setupTrucks = async () => {
      const trucks = await initializeTrucks();
      setTruckLocations(trucks);
    };

    setupTrucks();
  }, []);

  useEffect(() => {
    const interval = setInterval(async () => {
      const updatedTrucks = await updateTruckPositions(truckLocations);
      setTruckLocations(updatedTrucks);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [truckLocations]);

  const getRouteGeojson = (route: { lat: number; lng: number }[]) => ({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: route.map(r => [r.lng, r.lat]),
        },
      },
    ],
  });

  const handlePopupClose = () => {
    setSelectedTruck(null);
    setShowRoute(false);
  };

  return (
    <Map
      initialViewState={{
        latitude: 20.5937,
        longitude: 78.9629,
        zoom: 4,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v11'
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {/* Add Navigation Control */}
      <NavigationControl position="bottom-right" />
      {/* Add Scale Control */}
      <ScaleControl />

      {truckLocations.map(truck => (
        <Marker
          key={truck.id}
          latitude={truck.currentLat}
          longitude={truck.currentLng}
          anchor="center"
        >
          <div
            className='relative cursor-pointer'
            onClick={() => {
              setSelectedTruck(truck);
              setShowRoute(false);
            }}
          >
            <img
              src={truckImage}
              alt={`Truck ${truck.id}`}
              className='w-10 h-10'
              style={{ transform: 'translate(-50%, -50%)' }}
            />
          </div>
        </Marker>
      ))}
      {selectedTruck && (
        <>
          <Popup
            longitude={selectedTruck.currentLng}
            latitude={selectedTruck.currentLat}
            anchor="top"
            onClose={handlePopupClose}
            closeOnClick={false}
            className="custom-popup"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-lg font-bold mb-2">Truck Information</h3>
              <div className="grid grid-cols-2 gap-2">
                <div><strong>Truck ID:</strong></div><div>{selectedTruck.id}</div>
                <div><strong>Driver ID:</strong></div><div>{selectedTruck.driverId}</div>
                <div><strong>Consignment ID:</strong></div><div>{selectedTruck.consignmentId}</div>
                <div><strong>Speed:</strong></div><div>{selectedTruck.speed.toFixed(2)} km/h</div>
                <div><strong>Est. Time:</strong></div><div>{selectedTruck.estimatedTime.toFixed(2)} min</div>
                <div><strong>Start:</strong></div><div>{selectedTruck.startCity}</div>
                <div><strong>Destination:</strong></div><div>{selectedTruck.destinationCity}</div>
              </div>
              <button
                onClick={() => setShowRoute(!showRoute)}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                {showRoute ? 'Hide Route' : 'Show Route'}
              </button>
            </div>
          </Popup>
          {showRoute && (
            <Source id={`route-${selectedTruck.id}`} type="geojson" data={getRouteGeojson(selectedTruck.route)}>
              <Layer
                id={`route-${selectedTruck.id}`}
                type="line"
                paint={{
                  'line-color': '#0080ff',
                  'line-width': 3,
                }}
              />
            </Source>
          )}
        </>
      )}
    </Map>
  );
};
