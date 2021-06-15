import logo from './logo.svg';
import './App.css';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {listMenus} from './graphql/queries';
import CreateMenu from './CreateMenu'

import React, { Component } from 'react';

const initialState = {}

async function fetchMenus() {
    try {
        const menu = await API.graphql(graphqlOperation(listMenus))
        console.log(menu);
    } catch (err) {
        console.log('error fetching menus')
    }
}

function App() {
  return (
    <div className="App">
        <CreateMenu />
    </div>
  );
}

export default App;
