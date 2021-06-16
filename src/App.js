import './App.css';
import { Navigation } from './components/Navigation';
import React from 'react';
import AppLayout from "@awsui/components-react/app-layout";
import UploadMenuPage from './UploadMenuPage';
import CreateMenu from './CreateMenu';
import PendingOrders from './components/PendingOrders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

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
    <Router>
            <div>
                <div className="nav-bar">
                    <Navigation />
                </div>
                <div className="main-panel">
                    <Switch>
                        <Route exact path="/"> <UploadMenuPage /> </Route>
                        <Route exact path="/viewPendingOrders"> <PendingOrders /> </Route>
                        <Route exact path="/createMenu"><UploadMenuPage /> </Route>
                    </Switch>
                </div>
            </div>
    </Router>

  )
}

export default App;
