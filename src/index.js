import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import './index.css';
import App from './App';
import PendingOrders from './PendingOrders';
import CreateMenu from './CreateMenu';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { Navigation } from './Navigation';


Amplify.configure(awsExports);

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <div>
            <div class="nav-bar">
                <Navigation />
            </div>
            <div class="main-panel">
                <Switch>
                    <Route exact path="/"> <App /> </Route>
                    <Route exact path="/viewPendingOrder"> <PendingOrders /> </Route>
                    <Route exact path="/createMenu"><CreateMenu /> </Route>
                </Switch>
            </div>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
