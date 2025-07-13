import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

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

const orderVolumeData = [
  { name: 'Processed', value: 75 },
  { name: 'Pending', value: 20 },
  { name: 'Returned', value: 5 },
]

export function ReportsTab() {
  return (
    <div className='space-y-6'>
      {/* Supplier Performance Report */}
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
            Supplier on-time vs delayed deliveries
          </p>
        </CardContent>
      </Card>
      {/* Order Fulfillment Report */}
      <Card className='rounded-xl border border-zinc-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-base font-semibold tracking-tight'>
            Order Fulfillment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={360}>
            <BarChart data={orderFulfillmentData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#888' />
              <YAxis stroke='#888' />
              <Tooltip />
              <Bar dataKey='Completed' fill='#82ca9d' />
              <Bar dataKey='In Progress' fill='#8884d8' />
              <Bar dataKey='Cancelled' fill='#ff8042' />
            </BarChart>
          </ResponsiveContainer>
          <p className='mt-4 text-xs text-muted-foreground'>
            Order status breakdown
          </p>
        </CardContent>
      </Card>
      {/* Shipment Volume Report */}
      <Card className='rounded-xl border border-zinc-300 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-base font-semibold tracking-tight'>
            Shipment Volume
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={360}>
            <BarChart data={orderVolumeData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#888' />
              <YAxis stroke='#888' />
              <Tooltip />
              <Bar dataKey='value' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
          <p className='mt-4 text-xs text-muted-foreground'>
            Shipment volume by status
          </p>
        </CardContent>
      </Card>
      {/* Inventory Turnover Report */}
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
    </div>
  )
}
