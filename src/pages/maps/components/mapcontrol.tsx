// components/MapControls.tsx
import React from 'react';
import { Search } from '@/components/search';
import ThemeSwitch from '@/components/theme-switch';
import { UserNav } from '@/components/user-nav';


export const MapControls: React.FC = () => (
  <div className='ml-auto flex items-center space-x-4'>
    <Search />
    <ThemeSwitch />
    <UserNav />
  </div>
);
