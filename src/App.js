import './App.css';
import { Navigation } from './Navigation';
import React from 'react';
import Routes from './Routes';
import AppLayout from "@awsui/components-react/app-layout";
import UploadMenuPage from './UploadMenuPage';
import CreateMenu from './CreateMenu';
import PendingOrders from './PendingOrders';

function reducer(draft, action) {
  switch (action.type) {
    case 'SET_TOOLS_OPEN': {
      draft.toolsOpen = action.payload;
      return;
    }
    case 'SET_NAVIGATION_OPEN': {
      draft.navigationOpen = action.payload;
      return;
    }
    case 'SET_BREADCRUMB_ITEMS': {
      draft.breadcrumbItems = action.payload;
      return;
    }
  }
}

const initialState = {}
const currentLocation = window.location.href;

function App() {

  // return (
  //   <AppLayout
  //   content={<UploadMenuPage />}
  //   navigation={<Navigation />}
  // />
  // );
  return (
    <div>
    <CreateMenu />
    <PendingOrders />
    <UploadMenuPage />
    </div>
  )
}

export default App;
