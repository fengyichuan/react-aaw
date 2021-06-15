import './App.css';
import { Navigation } from './Navigation';
import React from 'react';
import Routes from './Routes';
import AppLayout from "@awsui/components-react/app-layout";
import UploadMenuPage from './UploadMenuPage';

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

function App() {

  return (
    <AppLayout
    content={<UploadMenuPage />}
    navigation={<Navigation />}
  />
  );
}

export default App;
