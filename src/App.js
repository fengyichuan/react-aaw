import logo from './logo.svg';
import './App.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listMenus} from './graphql/queries';
import CreateMenu from './CreateMenu'
import PendingOrders from './PendingOrders'
import UploadMenuPage from './UploadMenuPage';

import React, { Component } from 'react';

const initialState = {}

function App() {
  return (
    <div className="App">
        <CreateMenu />
        <PendingOrders />
        <UploadMenuPage/>
    </div>
  );
}

export default App;
