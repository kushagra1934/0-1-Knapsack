const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2h1ZW5jZSIsImEiOiJjbG9wcmt3czMwYnZsMmtvNnpmNTRqdnl6In0.vLBhYMBZBl2kaOh1Fh44Bw';

interface LatLng {
  lat: number;
  lng: number;
}

interface RouteData {
  route: LatLng[];
  duration: number;
  distance: number;
  speedFactor: number;
}

export const fetchRouteWithTraffic = async (start: LatLng, destination: LatLng): Promise<RouteData> => {
  try {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start.lng},${start.lat};${destination.lng},${destination.lat}?steps=true&geometries=geojson&annotations=duration,speed,congestion&overview=full&access_token=${MAPBOX_TOKEN}`
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    // Debug logging to inspect the raw data
    console.log('API Response:', data);

    if (!data.routes || data.routes.length === 0) {
      throw new Error('No routes found in the API response.');
    }

    const route = data.routes[0];
    
    const coordinates = route.geometry.coordinates.map(([lng, lat]: [number, number]) => ({
      lat,
      lng,
    }));

    // Calculate average congestion level
    const congestionLevels = route.legs[0].annotation.congestion;
    const avgCongestion = congestionLevels.reduce((sum: number, level: string) => {
      switch (level) {
        case 'low': return sum + 1;
        case 'moderate': return sum + 0.7;
        case 'heavy': return sum + 0.4;
        case 'severe': return sum + 0.2;
        default: return sum + 1;
      }
    }, 0) / congestionLevels.length;

    // Use the average congestion level as the speed factor
    const speedFactor = avgCongestion;

    return {
      route: coordinates,
      duration: route.duration,
      distance: route.distance,
      speedFactor: speedFactor,
    };
  } catch (error) {
    console.error('Error fetching route with traffic:', error);
    throw error; // Re-throw to be handled by the caller
  }
};
