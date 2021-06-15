import React, { Component } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {createMenu} from './graphql/mutations';

class CreateMenu extends Component {


state = {
    "name" : "",
    "price" : 0,
    "customization" : {},
    "status": "IN_STOCK"
}

createMenu() {
    try {
        console.log("Creating menu");
        API.graphql(graphqlOperation(createMenu));
    } catch (err) {
        console.log('error fetching menus');
    }
}

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.createMenu()}>
        Click me
      </button>
    );
  }
}

export default CreateMenu;