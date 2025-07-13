import React from 'react'
import Table from './components/table'
import { driverData } from './data/driverData'
import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

// Define table columns based on the Driver interface
const columns = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Contact Number',
    accessor: 'contactNumber',
  },
  {
    Header: 'Current Job Type',
    accessor: 'currentJob.jobType',
  },
  {
    Header: 'Assigned Time',
    accessor: 'currentJob.assignedTime',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: 'Location',
    accessor: 'location',
  },
  {
    Header: 'Last Update',
    accessor: 'lastUpdate',
  },
]

const getStatusData = () => {
  const statusCounts = driverData.reduce(
    (acc, driver) => {
      acc[driver.status] = (acc[driver.status] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

  return Object.keys(statusCounts).map((status) => ({
    name: status,
    value: statusCounts[status],
  }))
}

const DriverPage: React.FC = () => {
  const statusChartData = getStatusData()

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
        <div className='p-6'>
          <h1 className='mb-6 text-3xl font-bold text-gray-800'>
            Driver Information
          </h1>
          <div className='mb-8'>
            <h2 className='mb-4 text-xl font-semibold text-gray-700'>
              Driver Status Distribution
            </h2>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={statusChartData}
                  dataKey='value'
                  nameKey='name'
                  outerRadius={80}
                  fill='#8884d8'
                  label
                >
                  {statusChartData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'][index % 4]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className='rounded-lg bg-white p-4 shadow-lg'>
            <h2 className='mb-4 text-xl font-semibold text-gray-800'>
              Driver Details
            </h2>
            <Table data={driverData} columns={columns} />
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: '/dashboard/overview',
    isActive: false,
  },
  {
    title: 'Shipments',
    href: '/dashboard/shipments',
    isActive: false,
  },
  {
    title: 'Drivers',
    href: '#',
    isActive: true,
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

export default DriverPage
