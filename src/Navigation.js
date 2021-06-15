import React from 'react';
import { useLocation } from 'react-router-dom';
import { SideNavigation } from '@awsui/components-react';

export const navHeader = { text: 'Alexa First UI ', href:'' };

export const navItems = [
  { type: 'link', text: 'App', href: '/' },
  { type: 'link', text: '[Mock] Insert Menu Item', href: '/mock/insertItem' },
  { type: 'link', text: '[Mock] Pull Orders', href: '/mock/pullOrders' }
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
