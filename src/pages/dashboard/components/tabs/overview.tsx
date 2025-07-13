import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentShipments } from "../recent-shipments";
import { SupplyChainOverview } from "../supply-chain-overview";

export function OverviewTab() {
  return (
    <div className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {/* Total Shipments Card */}
        <Card className='bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 text-white'>
            <CardTitle className='text-sm font-medium'>Total Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-white'>1,234</div>
            <p className='text-xs text-gray-200'>+15% from last month</p>
          </CardContent>
        </Card>

        {/* Pending Deliveries Card */}
        <Card className='bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 text-white'>
            <CardTitle className='text-sm font-medium'>Pending Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-white'>+320</div>
            <p className='text-xs text-gray-200'>+8% from last month</p>
          </CardContent>
        </Card>

        {/* On-Time Deliveries Card */}
        <Card className='bg-gradient-to-r from-green-600 via-green-500 to-green-400'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 text-white'>
            <CardTitle className='text-sm font-medium'>On-Time Deliveries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-white'>95%</div>
            <p className='text-xs text-gray-200'>-3% from last month</p>
          </CardContent>
        </Card>

        {/* Active Drivers Card */}
        <Card className='bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2 text-white'>
            <CardTitle className='text-sm font-medium'>Active Drivers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-white'>+128</div>
            <p className='text-xs text-gray-200'>+12 from last hour</p>
          </CardContent>
        </Card>
      </div>

      {/* Supply Chain Overview and Recent Shipments */}
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
        <Card className='col-span-1 lg:col-span-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400'>
          <CardHeader>
            <CardTitle className='text-white'>Supply Chain Overview</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <SupplyChainOverview />
          </CardContent>
        </Card>
        <Card className='col-span-1 lg:col-span-3 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400'>
          <CardHeader>
            <CardTitle className='text-white'>Recent Shipments</CardTitle>
            <p className='text-sm text-gray-200'>57 shipments dispatched today.</p>
          </CardHeader>
          <CardContent>
            <RecentShipments />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
