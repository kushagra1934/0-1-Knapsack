// src/data/truckData.ts
import { fetchRouteWithTraffic } from '@/services/mapboxService';
import { Truck } from './realtimeData';

export const initializeTrucks = async (): Promise<Truck[]> => {
  const trucks: Truck[] = [
    {
      id: 1,
      driverId: 'D1',
      consignmentId: 'C1',
      start: { lat: 19.0760, lng: 72.8777 }, // Mumbai
      destination: { lat: 28.7041, lng: 77.1025 }, // Delhi
      startCity: 'Mumbai',
      destinationCity: 'Delhi',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 19.0760, lng: 72.8777 },
        { lat: 28.7041, lng: 77.1025 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 19.0760,
      currentLng: 72.8777,
      speed: 50 + Math.random() * 10,
      estimatedTime: 180,
    },
    {
      id: 2,
      driverId: 'D2',
      consignmentId: 'C2',
      start: { lat: 13.0827, lng: 80.2707 }, // Chennai
      destination: { lat: 22.5726, lng: 88.3639 }, // Kolkata
      startCity: 'Chennai',
      destinationCity: 'Kolkata',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 13.0827, lng: 80.2707 },
        { lat: 22.5726, lng: 88.3639 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 13.0827,
      currentLng: 80.2707,
      speed: 50 + Math.random() * 10,
      estimatedTime: 360,
    },
    {
      id: 3,
      driverId: 'D3',
      consignmentId: 'C3',
      start: { lat: 12.9716, lng: 77.5946 }, // Bengaluru
      destination: { lat: 22.7196, lng: 75.8577 }, // Indore
      startCity: 'Bengaluru',
      destinationCity: 'Indore',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 12.9716, lng: 77.5946 },
        { lat: 22.7196, lng: 75.8577 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 12.9716,
      currentLng: 77.5946,
      speed: 50 + Math.random() * 10,
      estimatedTime: 300,
    },
    {
      id: 4,
      driverId: 'D4',
      consignmentId: 'C4',
      start: { lat: 26.9124, lng: 75.7873 }, // Jaipur
      destination: { lat: 23.0225, lng: 72.5714 }, // Ahmedabad
      startCity: 'Jaipur',
      destinationCity: 'Ahmedabad',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 26.9124, lng: 75.7873 },
        { lat: 23.0225, lng: 72.5714 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 26.9124,
      currentLng: 75.7873,
      speed: 50 + Math.random() * 10,
      estimatedTime: 240,
    },
    {
      id: 5,
      driverId: 'D5',
      consignmentId: 'C5',
      start: { lat: 25.5941, lng: 85.1376 }, // Patna
      destination: { lat: 27.1767, lng: 78.0081 }, // Agra
      startCity: 'Patna',
      destinationCity: 'Agra',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 25.5941, lng: 85.1376 },
        { lat: 27.1767, lng: 78.0081 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 25.5941,
      currentLng: 85.1376,
      speed: 50 + Math.random() * 10,
      estimatedTime: 300,
    },
    {
      id: 6,
      driverId: 'D6',
      consignmentId: 'C6',
      start: { lat: 15.3173, lng: 75.7139 }, // Hubli
      destination: { lat: 12.2958, lng: 76.6394 }, // Mysore
      startCity: 'Hubli',
      destinationCity: 'Mysore',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 15.3173, lng: 75.7139 },
        { lat: 12.2958, lng: 76.6394 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 15.3173,
      currentLng: 75.7139,
      speed: 50 + Math.random() * 10,
      estimatedTime: 240,
    },
    {
      id: 7,
      driverId: 'D7',
      consignmentId: 'C7',
      start: { lat: 21.1702, lng: 72.8311 }, // Surat
      destination: { lat: 19.9975, lng: 73.7898 }, // Nashik
      startCity: 'Surat',
      destinationCity: 'Nashik',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 21.1702, lng: 72.8311 },
        { lat: 19.9975, lng: 73.7898 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 21.1702,
      currentLng: 72.8311,
      speed: 50 + Math.random() * 10,
      estimatedTime: 180,
    },
    {
      id: 8,
      driverId: 'D8',
      consignmentId: 'C8',
      start: { lat: 23.2599, lng: 77.4126 }, // Bhopal
      destination: { lat: 18.5204, lng: 73.8567 }, // Pune
      startCity: 'Bhopal',
      destinationCity: 'Pune',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 23.2599, lng: 77.4126 },
        { lat: 18.5204, lng: 73.8567 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 23.2599,
      currentLng: 77.4126,
      speed: 50 + Math.random() * 10,
      estimatedTime: 300,
    },
    {
      id: 9,
      driverId: 'D9',
      consignmentId: 'C9',
      start: { lat: 17.3850, lng: 78.4867 }, // Hyderabad
      destination: { lat: 15.8281, lng: 78.0373 }, // Kurnool
      startCity: 'Hyderabad',
      destinationCity: 'Kurnool',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 17.3850, lng: 78.4867 },
        { lat: 15.8281, lng: 78.0373 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 17.3850,
      currentLng: 78.4867,
      speed: 50 + Math.random() * 10,
      estimatedTime: 240,
    },
    {
      id: 10,
      driverId: 'D10',
      consignmentId: 'C10',
      start: { lat: 11.0168, lng: 76.9558 }, // Coimbatore
      destination: { lat: 9.9391, lng: 76.2599 }, // Kochi
      startCity: 'Coimbatore',
      destinationCity: 'Kochi',
      trafficFactor: 1,
      route: (await fetchRouteWithTraffic(
        { lat: 11.0168, lng: 76.9558 },
        { lat: 9.9391, lng: 76.2599 }
      )).route,
      currentIndex: 0,
      progress: 0,
      currentLat: 11.0168,
      currentLng: 76.9558,
      speed: 50 + Math.random() * 10,
      estimatedTime: 120,
    },
  ];

  return trucks;
};
