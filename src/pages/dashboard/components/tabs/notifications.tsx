import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function NotificationsTab() {
  return (
    <div className='space-y-4'>
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {/* Delayed Shipments Notification */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-base font-semibold tracking-tight'>
              Delayed Shipments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12 Delayed Shipments</div>
            <p className='mt-2 text-xs text-muted-foreground'>
              Delays due to weather conditions and road closures.
            </p>
          </CardContent>
        </Card>
        {/* Low Stock Alerts */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Low Stock Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>3 Critical Items</div>
            <p className='mt-2 text-xs text-muted-foreground'>
              Urgent restocking required for high-demand items in the central
              warehouse.
            </p>
          </CardContent>
        </Card>
        {/* New Supplier Updates */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              New Supplier Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>2 New Suppliers Onboarded</div>
            <p className='mt-2 text-xs text-muted-foreground'>
              Review the new supplier contracts and initial performance metrics.
            </p>
          </CardContent>
        </Card>
        {/* System Alerts */}
        <Card className='rounded-xl border border-zinc-300 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>System Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>5 New Alerts</div>
            <p className='mt-2 text-xs text-muted-foreground'>
              System performance and security alerts need immediate attention.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
