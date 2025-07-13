// src/data/driverData.ts

export interface Driver {
  id: string
  name: string
  contactNumber: string
  currentJob: {
    jobType: string
    assignedTime: string
  }
  status: string
  location: string
  lastUpdate: string
}

export const driverData: Driver[] = [
  {
    id: 'DR001',
    name: 'John Doe',
    contactNumber: '+1234567890',
    currentJob: {
      jobType: 'Unloading',
      assignedTime: '2024-08-13T09:00:00Z',
    },
    status: 'In Transit',
    location: 'Mumbai',
    lastUpdate: '2024-08-13T09:30:00Z',
  },
  {
    id: 'DR002',
    name: 'Jane Smith',
    contactNumber: '+0987654321',
    currentJob: {
      jobType: 'Loading',
      assignedTime: '2024-08-13T10:00:00Z',
    },
    status: 'Available',
    location: 'Delhi',
    lastUpdate: '2024-08-13T10:15:00Z',
  },
  {
    id: 'DR003',
    name: 'Alice Johnson',
    contactNumber: '+1122334455',
    currentJob: {
      jobType: 'Delivering',
      assignedTime: '2024-08-13T11:00:00Z',
    },
    status: 'In Transit',
    location: 'Pune',
    lastUpdate: '2024-08-13T11:20:00Z',
  },
  {
    id: 'DR004',
    name: 'Bob Brown',
    contactNumber: '+2233445566',
    currentJob: {
      jobType: 'Resting',
      assignedTime: '2024-08-13T12:00:00Z',
    },
    status: 'Resting',
    location: 'Mumbai',
    lastUpdate: '2024-08-13T12:10:00Z',
  },
  // Add more driver entries as needed
]
