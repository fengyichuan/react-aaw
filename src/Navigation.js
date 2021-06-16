import React from 'react';
import { useLocation } from 'react-router-dom';
import { SideNavigation } from '@awsui/components-react';

export const navHeader = { text: 'Alexa As Waitress', href:'' };

export const navItems = [
  { type: 'link', text: 'Home', href: '/' },
  { type: 'link', text: 'Add Menu Items', href: '/insertItem' },
  { type: 'link', text: 'Pull Order Info', href: '/pullOrders' },
  { type: 'link', text: '[Mock] Insert Menu', href: '/mockInsert' },
  { type: 'link', text: '[Mock] Pull Orders', href: '/mockPull' },
];

export const Navigation = () => {
  const location = useLocation();
  console.log("location", location);
  const truncatedPathname = location.pathname;
  return (
    <SideNavigation
      activeHref={truncatedPathname}
      items={navItems}
      header={navHeader}
    />
  );
};
