import React, { Component } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {createMenu} from './graphql/mutations';
import * as qu from './graphql/queries';
import * as mu from './graphql/mutations';

class CreateMenu extends Component {

state = {
    "menuInput" : {
        "name" : "Another pizza with new schema",
        "basePrice" : 10,
        "alternativeNames" : ["Another", "Pizza", "Hallelujah pizza"],
        "customization" : [
            {
                category: "Topping",
                name: "Tomato",
                price: 0.2
            }, {
                category: "Topping",
                name: "Potato",
                price: 0.3
            }, {
                 category: "Topping",
                 name: "Green pepper",
                 price: 0.4
            }, {
                  category: "Sauce",
                  name: "Hot",
                  price: 0.4
            }, {
                   category: "Sauce",
                   name: "Peanut butter jelly",
                   price: 0.4
            }
        ]
    },
    orderInput : {
        items : [{
            menuId: "menuId",
            customization: []
        }],
        price: 10,
        orderedTime : "time ordered",
        status: "COMPLETED"
    }
};

createMenu() {
    try {
        console.log("Creating menu with menuInput");
        API.graphql(graphqlOperation(mu.createMenu, {input: this.state.menuInput}));
    } catch (err) {
        console.log('Error when creating a menu', err);
    }
}

createOrder() {
    try {
        console.log("Creating order with orderInput");
        API.graphql(graphqlOperation(mu.createOrder, {input: this.state.orderInput}));
    } catch (err) {
        console.log('Error when creating an order', err);
    }
}

    render() {
    return (
      <div>
          <button onClick={() => this.createMenu()}>
                Create a dummy pizza menu
          </button>
           <button onClick={() => this.createOrder()}>
                Create a dummy order
            </button>
      </div>
    );
  }
}

export default CreateMenu;