// src/components/ShipmentCard.tsx
import React from 'react'
import { Warehouse } from '../types'

interface ShipmentCardProps {
  warehouse: Warehouse
}

// Define slot status colors
const slotStatusColors = {
  occupied: 'bg-red-500',
  available: 'bg-green-500',
  loading: 'bg-green-500',
  unloading: 'bg-yellow-500',
}

// Define a mapping for status to slot color
const getSlotColor = (status: string) => {
  if (status === 'Occupied') return slotStatusColors.occupied
  if (status === 'Loading') return slotStatusColors.loading
  if (status === 'Unloading') return slotStatusColors.unloading
  return slotStatusColors.available
}

const ShipmentCard: React.FC<ShipmentCardProps> = ({ warehouse }) => {
  return (
    <div className='space-y-4'>
      {/* Display warehouse slots */}
      <div className='grid grid-cols-10 gap-4'>
        {warehouse.slots.map((slot) => (
          <div
            key={slot.slotId}
            className={`relative flex items-center justify-center rounded-lg p-4 shadow-lg ${getSlotColor(slot.isOccupied ? 'Occupied' : 'Available')} h-24`}
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              {slot.isOccupied && (
                <div className='hidden rounded-md bg-gray-800 p-4 text-white group-hover:block'>
                  <h3 className='text-lg font-bold'>Consignment Details</h3>
                  <p>
                    <strong>ID:</strong>{' '}
                    {slot.assignedConsignment?.consignmentId}
                  </p>
                  <p>
                    <strong>Type:</strong> {slot.assignedConsignment?.type}
                  </p>
                  <p>
                    <strong>Delivery Time:</strong>{' '}
                    {slot.assignedConsignment?.deliveryTime
                      ? new Date(
                          slot.assignedConsignment.deliveryTime
                        ).toLocaleString()
                      : ''}
                  </p>
                  <p>
                    <strong>Destination:</strong>{' '}
                    {slot.assignedConsignment?.destination}
                  </p>
                  <p>
                    <strong>Status:</strong> {slot.assignedConsignment?.status}
                  </p>
                  <h3 className='mt-2 text-lg font-bold'>Driver Details</h3>
                  <p>
                    <strong>Name:</strong> {slot.assignedDriver?.name}
                  </p>
                  <p>
                    <strong>Contact:</strong>{' '}
                    {slot.assignedDriver?.contactNumber}
                  </p>
                  <p>
                    <strong>Job Type:</strong>{' '}
                    {slot.assignedDriver?.currentJob.jobType}
                  </p>
                  <p>
                    <strong>Assigned Time:</strong>{' '}
                    {slot.assignedDriver?.currentJob.assignedTime &&
                      new Date(
                        slot.assignedDriver.currentJob.assignedTime
                      ).toLocaleString()}
                  </p>
                  <p>
                    <strong>Estimated Unload Time:</strong>{' '}
                    {slot.estimatedUnloadTime
                      ? new Date(slot.estimatedUnloadTime).toLocaleString()
                      : ''}
                  </p>
                </div>
              )}
            </div>
            <span className='text-white'>{slot.slotId}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShipmentCard
