// src/types/index.ts
export interface ShipmentData {
  id: string
  status: string
  date: string
  destination: string
  weight: string
}

export interface Consignment {
  consignmentId: string
  type: string
  deliveryTime: string
  destination: string
  status: string
}

export interface Driver {
  driverId: string
  name: string
  contactNumber: string
  currentJob: {
    jobId: string
    jobType: string
    assignedTime: string
  }
}

export interface Slot {
  slotId: string
  isOccupied: boolean
  assignedConsignment: Consignment | null
  assignedDriver: Driver | null
  estimatedUnloadTime: string | null
}

export interface Warehouse {
  warehouseId: string
  location: string
  slots: Slot[]
}
