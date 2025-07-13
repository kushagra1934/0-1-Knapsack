import { Layout } from '@/components/custom/layout'
import { Button } from '@/components/custom/button'
import { Search } from '@/components/search'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ThemeSwitch from '@/components/theme-switch'
import { TopNav } from '@/components/top-nav'
import { UserNav } from '@/components/user-nav'
import { OverviewTab } from './components/tabs/overview'
import { AnalyticsTab } from './components/tabs/analytics'
import { ReportsTab } from './components/tabs/reports'
import { NotificationsTab } from './components/tabs/notifications'
// import { OverviewTab, AnalyticsTab, ReportsTab, NotificationsTab } from './components/tabs/tabs'

export default function Dashboard() {
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
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>
            Supply Chain Dashboard
          </h1>
          <div className='flex items-center space-x-2'>
            <Button>Download Report</Button>
          </div>
        </div>

        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics'>Analytics</TabsTrigger>
              <TabsTrigger value='reports'>Reports</TabsTrigger>
              <TabsTrigger value='notifications'>Notifications</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value='overview'>
            <OverviewTab />
          </TabsContent>
          <TabsContent value='analytics'>
            <AnalyticsTab />
          </TabsContent>
          <TabsContent value='reports'>
            <ReportsTab />
          </TabsContent>
          <TabsContent value='notifications'>
            <NotificationsTab />
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'Shipments',
    href: 'dashboard/shipments',
    isActive: false,
  },
  {
    title: 'Drivers',
    href: 'dashboard/drivers',
    isActive: false,
  },
  {
    title: 'Warehouses',
    href: 'dashboard/warehouses',
    isActive: false,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]
