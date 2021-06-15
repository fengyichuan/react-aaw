import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import CreateMenu from './CreateMenu';
import PendingOrders from './PendingOrders';
import UploadMenuPage from './UploadMenuPage';
import NotFound from './NotFound';

export default function Routes() {
  return (
      <Switch>
        <Route exact path='/' render={() => <App />} />
        <Route exact path='/mock/insertItem' render={() => <CreateMenu />} />
        <Route exact path='/mock/pullOrders' render={() => <PendingOrders />} />
        <Route exact path='/insertItem' render={() => <UploadMenuPage />} />
        <Route render={() => <NotFound />} />
      </Switch>
  );
}
