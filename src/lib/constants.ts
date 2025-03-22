import { JSX } from 'react';

// Navigation items
export type NavItem = {
  title: string;
  icon: string;
  href: string;
  isActive?: boolean;
};

export const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    href: '/',
    isActive: true,
  },
  {
    title: 'Users',
    icon: 'user',
    href: '/users',
  },
  {
    title: 'Ocoins',
    icon: 'resources',
    href: '/ocoins',
  },
  {
    title: 'Assets',
    icon: 'assets',
    href: '/assets',
  },
  {
    title: 'Apps',
    icon: 'apps',
    href: '/apps',
  },
  {
    title: 'Alerts',
    icon: 'alert',
    href: '/alerts',
  },
  {
    title: 'Resources',
    icon: 'resources',
    href: '/resources',
  },
  {
    title: 'Roles',
    icon: 'roles',
    href: '/roles',
  },
];

export const bottomNavItems: NavItem[] = [
  {
    title: 'Help',
    icon: 'help',
    href: '/help',
  },
  {
    title: 'Setting',
    icon: 'settings',
    href: '/settings',
  },
  {
    title: 'Logout',
    icon: 'logout',
    href: '/logout',
  },
];

// Stats data
export type StatCard = {
  title: string;
  value: number;
  icon: string;
};

export const statsData: StatCard[] = [
  {
    title: 'Online users',
    value: 6522,
    icon: 'userIconSvg',
  },
  {
    title: 'new signups',
    value: 685,
    icon: 'userAvatar',
  },
  {
    title: 'New Subscribers',
    value: 474,
    icon: 'mail',
  },
  {
    title: 'Unsubscribes',
    value: 8,
    icon: 'mailOpen',
  },
];

// User data
export type UserItem = {
  username: string;
  img: string;
  date: string;
  value: number;
  label: string;
  badge?: string;
  avatarUrl?: string;
  isImage?:boolean
};

export type userData = {
  headerTitle: string;
  userList: UserItem[];
  headerAction: JSX.Element;
}[]

export const hallOfFarmers: UserItem[] = [
  {
    username: '@MikeReyes',
    img: '/assets/user.png',
    date: '12.10.2024',
    value: 7500,
    label: 'Spent',
    isImage:true,
  },
  {
    username: '@MikeReyes',
    img: '/assets/user(1).png',
    date: '12.10.2024',
    value: 7500,
    label: 'Spent',
    isImage:true,
  },
  {
    username: '@MikeReyes',
    img: '/assets/user(2).png',
    date: '12.10.2024',
    value: 7500,
    label: 'Spent',
    isImage:true,
  },
  {
    username: '@MikeReyes',
    img: '/assets/user(3).png',
    date: '12.10.2024',
    value: 7500,
    label: 'Spent',
    isImage:true,
  },
];

export const allStars: UserItem[] = [
  {
    username: '@MikeReyes',
    img: '/assets/user.png',
    date: '12.10.2024',
    value: 7500,
    label: 'Active Strike',
    badge: 'Explorer',
  },
  {
    username: '@MikeReyes',
    img: '/assets/user(1).png',
    date: '12.10.2024',
    value: 7500,
    label: 'Active Strike',
    badge: 'Creator',
  },
  {
    username: '@MikeReyes',
    img: '/assets/user(2).png',
    date: '12.10.2024',
    value: 7500,
    label: 'Active Strike',
    badge: 'Designer',
  },
  {
    username: '@MikeReyes',
    img: '/assets/user(3).png',
    date: '12.10.2024',
    value: 7500,
    label: 'Active Strike',
    badge: 'Visionary',
  },
];

export const theBench = [...allStars];

// Financial data
export type FinancialItem = {
  title: string;
  value: string;
  description: string;
  icon: string;
  color: string;
};

export const financialData: FinancialItem[] = [
  {
    title: 'Total Income',
    value: '$50 000',
    description: 'Total Income',
    icon: 'dollar',
    color: 'bg-purple-600',
  },
  {
    title: 'Income from Subscriptions',
    value: '$20 000',
    description: 'Income from Subscriptions',
    icon: 'dataBase',
    color: 'bg-cyan-500',
  },
  {
    title: 'Income from Ocoin Purchases',
    value: '$30 000',
    description: 'Income from Ocoin Purchases',
    icon: 'income',
    color: 'bg-pink-500',
  },
];

// Ocoin spending data
export type SpendingData = {
  label: string;
  value: number;
};

export const ocoinSpendingData: SpendingData[] = [
  { label: 'Remixes', value: 180 },
  { label: 'Downloads', value: 220 },
  { label: 'App 1', value: 100 },
  { label: 'App 2', value: 160 },
  { label: 'App 3', value: 140 },
  { label: 'App 4', value: 200 },
  { label: 'App 5', value: 80 },
];

// Product data
export type ProductItem = {
  name: string;
  date: string;
  timeRemixed: number;
  downloads: number;
  views: number;
  imageUrl?: string;
};

export const remixedProducts: ProductItem[] = [
  {
    name: 'Product Name',
    imageUrl: '/assets/product(1).png',
    date: '12.10.2024',
    timeRemixed: 675,
    downloads: 5670,
    views: 9860,
  },
  {
    name: 'Product Name',
    imageUrl: '/assets/product(2).png',
    date: '12.10.2024',
    timeRemixed: 675,
    downloads: 5670,
    views: 9860,
  },
  {
    name: 'Product Name',
    imageUrl: '/assets/product(3).png',
    date: '12.10.2024',
    timeRemixed: 675,
    downloads: 5670,
    views: 9860,
  },
];

// App usage data
export type AppUsageItem = {
  name: string;
  date: string;
  timeUsed: number;
};

export const topUsedApps: AppUsageItem[] = [
  {
    name: 'App Name',
    date: '12.10.2024',
    timeUsed: 4500,
  },
  {
    name: 'App Name',
    date: '12.10.2024',
    timeUsed: 4500,
  },
  {
    name: 'App Name',
    date: '12.10.2024',
    timeUsed: 4500,
  },
  {
    name: 'App Name',
    date: '12.10.2024',
    timeUsed: 4500,
  },
  {
    name: 'App Name',
    date: '12.10.2024',
    timeUsed: 4500,
  },
];
