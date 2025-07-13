// pages/RealtimeMapPage.tsx
import React from 'react';
import { Layout } from '@/components/custom/layout';
import { TopNav } from '@/components/top-nav';
import { MapView } from './components/mapView';
import { Search } from '@/components/search';
import ThemeSwitch from '@/components/theme-switch';
import { UserNav } from '@/components/user-nav';

const RealtimeMapPage: React.FC = () => (
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
      <div className='h-[calc(100vh-120px)]'>
      <h1 className='text-2xl font-bold tracking-tight mb-4'>
            Realtime Map
            </h1>
        <MapView />
      </div>
    </Layout.Body>
  </Layout>
);

export default RealtimeMapPage;

// Top navigation configuration
const topNav = [
  {
    title: 'Overview',
    href: '/',
    isActive: false,
  },
  {
    title: 'Realtime Map',
    href: '/realtime-map',
    isActive: true,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
];
