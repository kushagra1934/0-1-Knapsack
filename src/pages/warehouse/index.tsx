import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  XAxis,
  YAxis,
  Bar,
} from 'recharts'
import { warehouseData } from './data/warehouseData'
import ThemeSwitch from '@/components/theme-switch'
import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'

// Sample data for warehouse statistics
const shipmentStatusData = [
  {
    name: 'Active',
    value: warehouseData.reduce(
      (acc, warehouse) => acc + warehouse.activeShipments,
      0
    ),
  },
  {
    name: 'Completed',
    value: warehouseData.reduce(
      (acc, warehouse) => acc + warehouse.completedShipments,
      0
    ),
  },
  {
    name: 'Pending',
    value: warehouseData.reduce(
      (acc, warehouse) => acc + warehouse.pendingShipments,
      0
    ),
  },
]

const warehouseStatsData = warehouseData.map((warehouse) => ({
  name: warehouse.location,
  Shipments: warehouse.totalShipments,
  Workers: warehouse.totalWorkers,
  AvgProcessingTime: warehouse.avgProcessingTime,
}))

const COLORS = [
  '#00C49F',
  '#FF8042',
  '#FFBB28',
  '#8DD1E1',
  '#A4DE6C',
  '#D0ED57',
]

const WarehousePage: React.FC = () => {
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
        <div className='space-y-4 p-6'>
          {/* Warehouse Statistics Cards */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {/* Total Shipments Card */}
            <Card className='bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white'>
              <CardHeader>
                <CardTitle>Total Shipments</CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold'>
                {warehouseData.reduce(
                  (acc, warehouse) => acc + warehouse.totalShipments,
                  0
                )}
              </CardContent>
            </Card>

            {/* Total Workers Card */}
            <Card className='bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white'>
              <CardHeader>
                <CardTitle>Total Workers</CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold'>
                {warehouseData.reduce(
                  (acc, warehouse) => acc + warehouse.totalWorkers,
                  0
                )}
              </CardContent>
            </Card>

            {/* Active Shipments Card */}
            <Card className='bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white'>
              <CardHeader>
                <CardTitle>Active Shipments</CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold'>
                {warehouseData.reduce(
                  (acc, warehouse) => acc + warehouse.activeShipments,
                  0
                )}
              </CardContent>
            </Card>

            {/* Completed Shipments Card */}
            <Card className='bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 text-white'>
              <CardHeader>
                <CardTitle>Completed Shipments</CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold'>
                {warehouseData.reduce(
                  (acc, warehouse) => acc + warehouse.completedShipments,
                  0
                )}
              </CardContent>
            </Card>

            {/* Pending Shipments Card */}
            <Card className='bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white'>
              <CardHeader>
                <CardTitle>Pending Shipments</CardTitle>
              </CardHeader>
              <CardContent className='text-3xl font-bold'>
                {warehouseData.reduce(
                  (acc, warehouse) => acc + warehouse.pendingShipments,
                  0
                )}
              </CardContent>
            </Card>
          </div>

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

          {/* Warehouse Stats Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width='100%' height={400}>
                <BarChart data={warehouseStatsData}>
                  <XAxis dataKey='name' />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey='Shipments' fill='#8884d8' />
                  <Bar dataKey='Workers' fill='#82ca9d' />
                  <Bar dataKey='AvgProcessingTime' fill='#FFBB28' />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </Layout.Body>
    </Layout>
  )
}

export default WarehousePage

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
    isActive: false,
  },
  {
    title: 'Drivers',
    href: '/dashboard/drivers',
    isActive: false,
  },
  {
    title: 'Warehouses',
    href: '#',
    isActive: true,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]
