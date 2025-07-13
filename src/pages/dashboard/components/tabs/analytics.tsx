import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from 'recharts'

const shipmentData = [
  { name: 'Jan', Shipments: 300 },
  { name: 'Feb', Shipments: 400 },
  { name: 'Mar', Shipments: 500 },
  { name: 'Apr', Shipments: 700 },
  { name: 'May', Shipments: 800 },
  { name: 'Jun', Shipments: 1000 },
]

const inventoryData = [
  { name: 'Jan', Turnover: 4.5 },
  { name: 'Feb', Turnover: 5.0 },
  { name: 'Mar', Turnover: 5.2 },
  { name: 'Apr', Turnover: 5.7 },
  { name: 'May', Turnover: 6.0 },
  { name: 'Jun', Turnover: 6.5 },
]

const supplierPerformanceData = [
  { name: 'On-Time', value: 85 },
  { name: 'Delayed', value: 15 },
]

const orderFulfillmentData = [
  { name: 'In Progress', value: 40 },
  { name: 'Completed', value: 50 },
  { name: 'Cancelled', value: 10 },
]

const COLORS = ['#00C49F', '#FF8042', '#FFBB28', '#8E44AD']

export function AnalyticsTab() {
  return (
    <div className='space-y-6'>
      {/* Shipment Trends */}
      <Card className='rounded-xl border border-zinc-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-base font-semibold tracking-tight'>
            Shipment Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={360}>
            <LineChart data={shipmentData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#888' />
              <YAxis stroke='#888' />
              <Tooltip />
              <Line type='monotone' dataKey='Shipments' stroke='#8884d8' />
            </LineChart>
          </ResponsiveContainer>
          <p className='mt-4 text-xs text-muted-foreground'>
            Monthly shipment volumes (last 6 months)
          </p>
        </CardContent>
      </Card>
      {/* Inventory Turnover */}
      <Card className='rounded-xl border border-zinc-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-base font-semibold tracking-tight'>
            Inventory Turnover
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={360}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#888' />
              <YAxis stroke='#888' />
              <Tooltip />
              <Bar dataKey='Turnover' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
          <p className='mt-4 text-xs text-muted-foreground'>
            Inventory turnover rate per month
          </p>
        </CardContent>
      </Card>
      {/* Supplier Performance */}
      <Card className='rounded-xl border border-zinc-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-base font-semibold tracking-tight'>
            Supplier Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={360}>
            <PieChart>
              <Pie
                data={supplierPerformanceData}
                cx='50%'
                cy='50%'
                outerRadius={90}
                fill='#8884d8'
                dataKey='value'
              >
                {supplierPerformanceData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className='mt-4 text-xs text-muted-foreground'>
            On-time vs Delayed deliveries
          </p>
        </CardContent>
      </Card>
      {/* Order Fulfillment */}
      <Card className='rounded-xl border border-zinc-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-base font-semibold tracking-tight'>
            Order Fulfillment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={360}>
            <PieChart>
              <Pie
                data={orderFulfillmentData}
                cx='50%'
                cy='50%'
                outerRadius={90}
                fill='#82ca9d'
                dataKey='value'
              >
                {orderFulfillmentData.map((_entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <p className='mt-4 text-xs text-muted-foreground'>
            Order status breakdown
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
