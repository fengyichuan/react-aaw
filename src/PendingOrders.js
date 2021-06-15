import React, { Component } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as qu from './graphql/queries';
import * as mu from './graphql/mutations';







class PendingOrders extends Component {

async fetchOrders() {
    try {
        console.log("Fetching orders");
        const orders = await API.graphql(graphqlOperation(qu.listOrders));
        console.log("Order fetched" + orders);
    } catch (err) {
        console.log('error fetching menus');
    }
}


 render() {
  return (
   <div>
        This is reserved for showing pending orders.

        <button onClick={() => this.fetchOrders()}>
                    Log all the orders
                  </button>
   </div>
  );
 }
}

export default PendingOrders;