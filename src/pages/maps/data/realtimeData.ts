// data/realtimeData.ts

import { fetchRouteWithTraffic } from '@/services/mapboxService';

interface LatLng {
  lat: number;
  lng: number;
}

export interface Truck {
  id: number;
  driverId: string;
  consignmentId: string;
  startCity: string;
  destinationCity: string;
  start: LatLng;
  destination: LatLng;
  route: LatLng[];
  currentIndex: number;
  progress: number; // Progress along the segment
  currentLat: number;
  currentLng: number;
  speed: number; // Speed in km/h
  estimatedTime: number; // in minutes
  trafficFactor: number; // New field to store current traffic factor
}

const SECONDS_IN_HOUR = 3600;
const METERS_IN_KM = 1000;
const UPDATE_INTERVAL = 1; // 1 second

export const updateTruckPositions = async (trucks: Truck[]): Promise<Truck[]> => {
  return Promise.all(trucks.map(async (truck) => {
    const path = truck.route;
    if (path.length === 0) return truck;

    const start = path[truck.currentIndex];
    const end = path[(truck.currentIndex + 1) % path.length];

    // Fetch route data with traffic
    const routeData = await fetchRouteWithTraffic(start, end);
    
    const distance = routeData.distance / METERS_IN_KM; // Convert to km
    const adjustedSpeed = truck.speed * routeData.speedFactor;
    
    // Calculate how far the truck moved in this update interval
    const timeInHours = UPDATE_INTERVAL / SECONDS_IN_HOUR;
    const distanceTraveled = adjustedSpeed * timeInHours;
    
    const segmentProgress = distanceTraveled / distance;
    const newProgress = truck.progress + segmentProgress;

    // Recalculate estimated time based on the entire remaining route
    const remainingDistance = calculateRemainingDistance(truck);
    const newEstimatedTime = (remainingDistance / adjustedSpeed) * 60; // Convert to minutes

    if (newProgress >= 1) {
      // Move to the next segment
      const nextIndex = (truck.currentIndex + 1) % path.length;
      return {
        ...truck,
        currentIndex: nextIndex,
        progress: newProgress - 1,
        currentLat: end.lat,
        currentLng: end.lng,
        estimatedTime: newEstimatedTime,
        trafficFactor: routeData.speedFactor,
      };
    } else {
      // Update position within the current segment
      const newLat = start.lat + (end.lat - start.lat) * newProgress;
      const newLng = start.lng + (end.lng - start.lng) * newProgress;

      return {
        ...truck,
        currentLat: newLat,
        currentLng: newLng,
        progress: newProgress,
        estimatedTime: newEstimatedTime,
        trafficFactor: routeData.speedFactor,
      };
    }
  }));
};

const calculateRemainingDistance = (truck: Truck): number => {
  let remainingDistance = 0;
  for (let i = truck.currentIndex; i < truck.route.length - 1; i++) {
    remainingDistance += calculateDistance(truck.route[i], truck.route[i + 1]);
  }
  return remainingDistance;
};

const calculateDistance = (start: LatLng, end: LatLng): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (end.lat - start.lat) * (Math.PI / 180);
  const dLng = (end.lng - start.lng) * (Math.PI / 180);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(start.lat * (Math.PI / 180)) * Math.cos(end.lat * (Math.PI / 180)) * 
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance; // Keep in kilometers
};