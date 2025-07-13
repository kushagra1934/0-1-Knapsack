import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from 'recharts'
import Table from './component/Table'
import { shipmentData, sampleWarehouses } from './data/shipmentData'
import ThemeSwitch from '@/components/theme-switch'
import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import ShipmentCard from './component/shipment'

// Sample data for the charts
const shipmentStatusData = [
  { name: 'On-Time', value: 70 },
  { name: 'Delayed', value: 20 },
  { name: 'Cancelled', value: 10 },
]

const shipmentVolumeData = [
  { name: 'Jan', Shipments: 300 },
  { name: 'Feb', Shipments: 400 },
  { name: 'Mar', Shipments: 500 },
  { name: 'Apr', Shipments: 600 },
  { name: 'May', Shipments: 700 },
  { name: 'Jun', Shipments: 800 },
]

const COLORS = ['#0088FE', '#FF8042', '#FFBB28']

const ShipmentPage: React.FC = () => {
  return (
    <Layout>
      <Layout.Header>
        <TopNav links={topNav} />
        <div className='ml-auto flex items-center space-x-4'>
          <Search />
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>
      <Layout.Body>
        <div className='space-y-4'>
          {/* Shipments Table */}
          <Card>
            <CardHeader>
              <CardTitle>Shipments Table</CardTitle>
            </CardHeader>
            <CardContent>
              <Table
                data={shipmentData}
                columns={[
                  { Header: 'ID', accessor: 'id' },
                  { Header: 'Status', accessor: 'status' },
                  { Header: 'Date', accessor: 'date' },
                  { Header: 'Destination', accessor: 'destination' },
                  { Header: 'Weight', accessor: 'weight' },
                ]}
              />
            </CardContent>
          </Card>

          {/* Shipment Status Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Shipment Status</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <PieChart>
                  <Pie
                    data={shipmentStatusData}
                    cx='50%'
                    cy='50%'
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'
                  >
                    {shipmentStatusData.map((_entry, index) => (
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

          {/* Shipment Volume Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Shipment Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={300}>
                <BarChart data={shipmentVolumeData}>
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='Shipments' fill='#8884d8' />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Warehouse Shipment Cards */}
          {sampleWarehouses.map((warehouse) => (
            <div key={warehouse.warehouseId}>
              <h2 className='text-lg font-bold'>{warehouse.location}</h2>
              <ShipmentCard warehouse={warehouse} />
            </div>
          ))}
        </div>
      </Layout.Body>
    </Layout>
  )
}

export default ShipmentPage

// Ensure topNav is correctly defined in the context where it's used
const topNav = [
  {
    title: 'Overview',
    href: '/',
    isActive: false,
  },
  {
    title: 'Shipments',
    href: '/dashboard/shipments',
    isActive: true,
  },
  {
    title: 'Drivers',
    href: '/dashboard/drivers',
    isActive: false,
  },
  {
    title: 'Warehouses',
    href: '/dashboard/warehouses',
    isActive: false,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]
