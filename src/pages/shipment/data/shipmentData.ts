// src/data/shipmentData.ts
import { ShipmentData, Warehouse } from '../types'

// Existing shipment data
export const shipmentData: ShipmentData[] = [
  {
    id: 'S001',
    status: 'On-Time',
    date: '2024-08-01',
    destination: 'Mumbai',
    weight: '120 kg',
  },
  {
    id: 'S002',
    status: 'Delayed',
    date: '2024-08-02',
    destination: 'Delhi',
    weight: '200 kg',
  },
  {
    id: 'S003',
    status: 'On-Time',
    date: '2024-08-03',
    destination: 'Pune',
    weight: '150 kg',
  },
  {
    id: 'S004',
    status: 'On-Time',
    date: '2024-08-04',
    destination: 'Bangalore',
    weight: '180 kg',
  },
  {
    id: 'S005',
    status: 'Delayed',
    date: '2024-08-05',
    destination: 'Hyderabad',
    weight: '220 kg',
  },
]

// Generate random slot status
const getRandomStatus = () => {
  const statuses = ['Occupied', 'Available', 'Loading', 'Unloading']
  return statuses[Math.floor(Math.random() * statuses.length)]
}

// Sample warehouses with 10 slots each
export const sampleWarehouses: Warehouse[] = [
  {
    warehouseId: 'WH001',
    location: 'Location A',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 1}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 1}`,
        type: 'Electronics',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 1}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 1}`,
        name: `Driver ${index + 1}`,
        contactNumber: `+123456789${index}`,
        currentJob: {
          jobId: `JOB${index + 1}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH002',
    location: 'Location B',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 11}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 11}`,
        type: 'Furniture',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 11}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 11}`,
        name: `Driver ${index + 11}`,
        contactNumber: `+123456789${index + 10}`,
        currentJob: {
          jobId: `JOB${index + 11}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH003',
    location: 'Location C',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 21}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 21}`,
        type: 'Clothing',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 21}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 21}`,
        name: `Driver ${index + 21}`,
        contactNumber: `+123456789${index + 20}`,
        currentJob: {
          jobId: `JOB${index + 21}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH004',
    location: 'Location D',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 31}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 31}`,
        type: 'Books',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 31}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 31}`,
        name: `Driver ${index + 31}`,
        contactNumber: `+123456789${index + 30}`,
        currentJob: {
          jobId: `JOB${index + 31}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH005',
    location: 'Location E',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 41}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 41}`,
        type: 'Toys',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 41}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 41}`,
        name: `Driver ${index + 41}`,
        contactNumber: `+123456789${index + 40}`,
        currentJob: {
          jobId: `JOB${index + 41}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH006',
    location: 'Location F',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 51}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 51}`,
        type: 'Appliances',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 51}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 51}`,
        name: `Driver ${index + 51}`,
        contactNumber: `+123456789${index + 50}`,
        currentJob: {
          jobId: `JOB${index + 51}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH007',
    location: 'Location G',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 61}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 61}`,
        type: 'Furniture',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 61}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 61}`,
        name: `Driver ${index + 61}`,
        contactNumber: `+123456789${index + 60}`,
        currentJob: {
          jobId: `JOB${index + 61}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH008',
    location: 'Location H',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 71}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 71}`,
        type: 'Clothing',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 71}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 71}`,
        name: `Driver ${index + 71}`,
        contactNumber: `+123456789${index + 70}`,
        currentJob: {
          jobId: `JOB${index + 71}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH009',
    location: 'Location I',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 81}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 81}`,
        type: 'Books',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 81}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 81}`,
        name: `Driver ${index + 81}`,
        contactNumber: `+123456789${index + 80}`,
        currentJob: {
          jobId: `JOB${index + 81}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
  {
    warehouseId: 'WH010',
    location: 'Location J',
    slots: Array.from({ length: 10 }, (_, index) => ({
      slotId: `SLOT${index + 91}`,
      isOccupied: getRandomStatus() !== 'Available',
      assignedConsignment: {
        consignmentId: `CON${index + 91}`,
        type: 'Appliances',
        deliveryTime: new Date(
          Date.now() + (index + 1) * 3600000
        ).toISOString(),
        destination: `Destination ${index + 91}`,
        status: 'In Transit',
      },
      assignedDriver: {
        driverId: `DRIVER${index + 91}`,
        name: `Driver ${index + 91}`,
        contactNumber: `+123456789${index + 90}`,
        currentJob: {
          jobId: `JOB${index + 91}`,
          jobType: getRandomStatus() === 'Loading' ? 'Loading' : 'Unloading',
          assignedTime: new Date(
            Date.now() - (index + 1) * 3600000
          ).toISOString(),
        },
      },
      estimatedUnloadTime: new Date(
        Date.now() + (index + 1) * 3600000
      ).toISOString(),
    })),
  },
]
