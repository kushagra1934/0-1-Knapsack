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
  Legend,
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
    <div className='space-y-4'>
      {/* Shipment Analytics */}
      <Card className='bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>Shipment Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This chart displays the monthly shipment trends, providing insights
            into the shipment volumes over the last six months.
          </p>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={shipmentData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' stroke='#fff' />
              <YAxis stroke='#fff' />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='Shipments' stroke='#8884d8' />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Inventory Turnover */}
      <Card className='bg-gradient-to-r from-green-800 via-green-700 to-green-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>
            Inventory Turnover Rate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This bar chart illustrates the inventory turnover rate each month,
            reflecting how efficiently inventory is being managed.
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

      {/* Supplier Performance */}
      <Card className='bg-gradient-to-r from-purple-800 via-purple-700 to-purple-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>Supplier Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            The pie chart below shows the percentage of on-time versus delayed
            deliveries from suppliers, which is crucial for assessing supplier
            reliability.
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

      {/* Order Fulfillment Status */}
      <Card className='bg-gradient-to-r from-teal-800 via-teal-700 to-teal-600'>
        <CardHeader>
          <CardTitle className='text-gray-100'>
            Order Fulfillment Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-2 text-sm text-gray-200'>
            This chart breaks down the current status of orders into three
            categories: In Progress, Completed, and Cancelled. It helps in
            understanding the order processing efficiency.
          </p>
          <ResponsiveContainer width='100%' height={300}>
            <PieChart>
              <Pie
                data={orderFulfillmentData}
                cx='50%'
                cy='50%'
                outerRadius={80}
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
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}
