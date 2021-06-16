import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CreateMenu from './CreateMenu';
import PendingOrders from './PendingOrders';
import UploadMenuPage from './UploadMenuPage';
import NotFound from './NotFound';
import PendingOrdersPage from './PendingOrdersPage';
import Home from './Home';

export default function Routes() {
  return (
    <Switch>
    <Route exact path='/' render={() => <Home />} />
    <Route exact path='/insertItem' render={() => <UploadMenuPage />} />
    <Route exact path='/pullOrders' render={() => <PendingOrdersPage />} />
    <Route exact path='/mockInsert' render={() => <CreateMenu />} />
    <Route exact path='/mockPull' render={() => <PendingOrders />} />
    </Switch>
  );
}
