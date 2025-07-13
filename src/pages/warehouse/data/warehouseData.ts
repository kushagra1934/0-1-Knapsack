// src/data/warehouseData.ts

interface Warehouse {
  warehouseId: string
  location: string
  totalShipments: number
  totalWorkers: number
  activeShipments: number
  completedShipments: number
  pendingShipments: number
  totalSlots: number // New metric
  occupiedSlots: number // New metric
  avgProcessingTime: number // Average processing time in hours
}

export const warehouseData: Warehouse[] = [
  {
    warehouseId: 'WH001',
    location: 'Location A',
    totalShipments: 150,
    totalWorkers: 25,
    activeShipments: 45,
    completedShipments: 100,
    pendingShipments: 5,
    totalSlots: 100,
    occupiedSlots: 60,
    avgProcessingTime: 12, // Example: 12 hours
  },
  {
    warehouseId: 'WH002',
    location: 'Location B',
    totalShipments: 200,
    totalWorkers: 30,
    activeShipments: 70,
    completedShipments: 120,
    pendingShipments: 10,
    totalSlots: 150,
    occupiedSlots: 80,
    avgProcessingTime: 15, // Example: 15 hours
  },
  {
    warehouseId: 'WH003',
    location: 'Location C',
    totalShipments: 180,
    totalWorkers: 28,
    activeShipments: 55,
    completedShipments: 110,
    pendingShipments: 15,
    totalSlots: 120,
    occupiedSlots: 75,
    avgProcessingTime: 10, // Example: 10 hours
  },
  {
    warehouseId: 'WH004',
    location: 'Location D',
    totalShipments: 210,
    totalWorkers: 32,
    activeShipments: 65,
    completedShipments: 130,
    pendingShipments: 15,
    totalSlots: 180,
    occupiedSlots: 85,
    avgProcessingTime: 13, // Example: 13 hours
  },
  {
    warehouseId: 'WH005',
    location: 'Location E',
    totalShipments: 170,
    totalWorkers: 20,
    activeShipments: 50,
    completedShipments: 100,
    pendingShipments: 20,
    totalSlots: 90,
    occupiedSlots: 55,
    avgProcessingTime: 14, // Example: 14 hours
  },
  // Add more warehouse entries as needed
]
