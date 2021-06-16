import React from 'react';
import { useLocation } from 'react-router-dom';
import { SideNavigation } from '@awsui/components-react';

export const navHeader = { text: 'Alexa As Waitress', href:'' };

export const navItems = [
  { type: 'link', text: 'Create Menu', href: '/createMenu' },
  { type: 'link', text: 'View Pending Orders', href: '/viewPendingOrders' }
];

export const Navigation = () => {
  const location = useLocation();
  const truncatedPathname = location.pathname;
  return (
    <SideNavigation
      activeHref={truncatedPathname}
      items={navItems}
      header={navHeader}
    />
  );
};
