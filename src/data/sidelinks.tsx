import {
  IconLayoutDashboard,
  IconMessages,
  IconSettings,
  IconUsers,
  IconPackage,
  IconMap,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Shipments',
    label: '',
    href: '/dashboard/shipments',
    icon: <IconPackage size={18} />,
  },
  {
    title: 'Drivers',
    label: '',
    href: '/dashboard/drivers',
    icon: <IconUsers size={18} />,
  },

  {
    title: 'Warehouses',
    label: '',
    href: '/dashboard/warehouses',
    icon: <IconUsers size={18} />,
  },

  {
    title: 'Realtime Tracking',
    label: '',
    href: '/tracking',
    icon: <IconMap size={18} />,
  },

  {
    title: 'Chats',
    label: '9',
    href: '/chats',
    icon: <IconMessages size={18} />,
  },
  {
    title: 'Users',
    label: '',
    href: '/users',
    icon: <IconUsers size={18} />,
  },

  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
