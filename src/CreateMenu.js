import React, { Component } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {createMenu} from './graphql/mutations';
import * as qu from './graphql/queries';
import * as mu from './graphql/mutations';

class CreateMenu extends Component {

state = {
    "input" : {
        "name" : "Another pizza",
        "price" : 10,
        "customization" : "",
        "status": "IN_STOCK"
    }
}

createMenu() {
    try {
        console.log("Creating menu");
        const menus = API.graphql({query: qu.listMenus});
        console.log(menus);

        API.graphql(graphqlOperation(mu.createMenu, {input: this.state.input}));

    } catch (err) {
        console.log('Error when creating a menu', err);
    }
}

  render() {
    return (
      <div>
            This is where menu should be created
          <button onClick={() => this.createMenu()}>
            Insert dummy pizza into dynamo
          </button>
      </div>
    );
  }
}

export default CreateMenu;