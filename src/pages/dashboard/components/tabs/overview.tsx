import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { RecentShipments } from '../recent-shipments'
import { SupplyChainOverview } from '../supply-chain-overview'

export function OverviewTab() {
  return (
    <div className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {/* Total Shipments Card */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-base font-semibold tracking-tight'>
              Total Shipments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>1,234</div>
            <p className='text-xs text-muted-foreground'>
              +15% from last month
            </p>
          </CardContent>
        </Card>
        {/* Pending Deliveries Card */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Pending Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+320</div>
            <p className='text-xs text-muted-foreground'>+8% from last month</p>
          </CardContent>
        </Card>
        {/* On-Time Deliveries Card */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              On-Time Deliveries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>95%</div>
            <p className='text-xs text-muted-foreground'>-3% from last month</p>
          </CardContent>
        </Card>
        {/* Active Drivers Card */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Drivers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+128</div>
            <p className='text-xs text-muted-foreground'>+12 from last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
        <Card className='col-span-1 border border-zinc-300 dark:border-zinc-800 lg:col-span-4'>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Supply Chain Overview
            </CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <SupplyChainOverview />
          </CardContent>
        </Card>
        <Card className='col-span-1 border border-zinc-300 dark:border-zinc-800 lg:col-span-3'>
          <CardHeader>
            <CardTitle className='text-sm font-medium'>
              Recent Shipments
            </CardTitle>
            <p className='text-sm text-muted-foreground'>
              57 shipments dispatched today.
            </p>
          </CardHeader>
          <CardContent>
            <RecentShipments />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
