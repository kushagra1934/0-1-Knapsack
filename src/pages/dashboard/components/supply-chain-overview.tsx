export const SupplyChainOverview = () => {
  const overviewData = {
    totalShipments: 120,
    activeDrivers: 45,
    onTimeDeliveries: 95,
    delayedDeliveries: 10,
    totalDistanceCovered: '12,000 km',
    averageDeliveryTime: '5 hrs 30 mins',
    warehouseCapacityUtilization: '85%',
    topPerformingRoute: 'Mumbai to Pune',
    totalorders: 100,
    totalRevenue: '$120,000',
    totalCost: '$80,000',
    totalProfit: '$40,000',
  }

  return (
    <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Total Shipments</h3>
        <div className='text-2xl font-bold'>{overviewData.totalShipments}</div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Active Drivers</h3>
        <div className='text-2xl font-bold'>{overviewData.activeDrivers}</div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>On-Time Deliveries</h3>
        <div className='text-2xl font-bold text-green-600'>
          {overviewData.onTimeDeliveries}
        </div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Delayed Deliveries</h3>
        <div className='text-2xl font-bold text-red-600'>
          {overviewData.delayedDeliveries}
        </div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Total Distance Covered</h3>
        <div className='text-2xl font-bold'>
          {overviewData.totalDistanceCovered}
        </div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Average Delivery Time</h3>
        <div className='text-2xl font-bold'>
          {overviewData.averageDeliveryTime}
        </div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Warehouse Capacity Utilization</h3>
        <div className='text-2xl font-bold'>
          {overviewData.warehouseCapacityUtilization}
        </div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Top Performing Route</h3>
        <div className='text-2xl font-bold'>
          {overviewData.topPerformingRoute}
        </div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Total Orders</h3>
        <div className='text-2xl font-bold'>{overviewData.totalorders}</div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Total Revenue</h3>
        <div className='text-2xl font-bold'>{overviewData.totalRevenue}</div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Total Cost</h3>
        <div className='text-2xl font-bold'>{overviewData.totalCost}</div>
      </div>
      <div className='rounded-lg border p-4'>
        <h3 className='text-sm font-medium'>Total Profit</h3>
        <div className='text-2xl font-bold'>{overviewData.totalProfit}</div>
      </div>
    </div>
  )
}
