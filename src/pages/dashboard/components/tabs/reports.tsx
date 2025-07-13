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
  Legend,
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
    <div className='space-y-4'>
      {/* Supplier Performance Report */}
      <Card className='bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>
            Supplier Performance Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This report details the performance metrics of our suppliers,
            including delivery times, quality scores, and compliance rates.
          </p>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={supplierPerformanceData}
                cx='50%'
                cy='50%'
                outerRadius={80}
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
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Order Fulfillment Report */}
      <Card className='bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>
            Order Fulfillment Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This report provides an overview of order fulfillment efficiency,
            including order processing times, delivery statuses, and any issues
            encountered.
          </p>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={orderFulfillmentData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#fff' />
              <YAxis stroke='#fff' />
              <Tooltip />
              <Legend />
              <Bar dataKey='Completed' fill='#82ca9d' />
              <Bar dataKey='In Progress' fill='#8884d8' />
              <Bar dataKey='Cancelled' fill='#ff8042' />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Shipment Volume Report */}
      <Card className='bg-gradient-to-r from-green-800 via-green-700 to-green-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>
            Shipment Volume Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This report tracks shipment volumes across different time periods,
            helping to identify trends and plan for future capacity needs.
          </p>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={orderVolumeData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#fff' />
              <YAxis stroke='#fff' />
              <Tooltip />
              <Legend />
              <Bar dataKey='Volume' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Inventory Turnover Report */}
      <Card className='bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>
            Inventory Turnover Report
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This report shows the rate at which inventory is being sold and
            replaced over time, offering insights into inventory management
            effectiveness.
          </p>
          <ResponsiveContainer width='100%' height={300}>
            <BarChart data={inventoryData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#fff' />
              <YAxis stroke='#fff' />
              <Tooltip />
              <Legend />
              <Bar dataKey='Turnover' fill='#82ca9d' />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
