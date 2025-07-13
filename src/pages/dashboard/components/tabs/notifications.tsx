import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function NotificationsTab() {
  return (
    <div className='space-y-4'>
      {/* Delayed Shipments Notification */}
      <Card className='bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white'>
        <CardHeader>
          <CardTitle>Delayed Shipments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>12 Delayed Shipments</div>
          <p className='text-xs text-gray-200'>
            Delays due to weather conditions and road closures.
          </p>
        </CardContent>
      </Card>

      {/* Low Stock Alerts */}
      <Card className='bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white'>
        <CardHeader>
          <CardTitle>Low Stock Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>3 Critical Items</div>
          <p className='text-xs text-gray-200'>
            Urgent restocking required for high-demand items in the central
            warehouse.
          </p>
        </CardContent>
      </Card>

      {/* New Supplier Updates */}
      <Card className='bg-gradient-to-r from-green-600 via-green-500 to-green-400 text-white'>
        <CardHeader>
          <CardTitle>New Supplier Updates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>2 New Suppliers Onboarded</div>
          <p className='text-xs text-gray-200'>
            Review the new supplier contracts and initial performance metrics.
          </p>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card className='bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white'>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='text-2xl font-bold'>5 New Alerts</div>
          <p className='text-xs text-gray-200'>
            System performance and security alerts need immediate attention.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
