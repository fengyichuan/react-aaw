import React, { Component } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as qu from './graphql/queries';
import * as mu from './graphql/mutations';
import * as su from './graphql/subscriptions';
import Container from "@awsui/components-react/container";

class PendingOrders extends Component {

async fetchOrders() {
    try {
        const filterByNotCompleted = { filter: {
                status : {
                    ne: "COMPLETED"
                }
            }
        }
        console.log("Fetching orders");
        const orders = await API.graphql(graphqlOperation(qu.listOrders, filterByNotCompleted));
        console.log("Order fetched shown below");
        console.log(orders);
    } catch (err) {
        console.log('error fetching menus');
    }
}

subscribeOrderEvent() {
     API.graphql(graphqlOperation(su.onCreateOrder)).subscribe({
         next: ({ provider, value }) => console.log({ provider, value }),
         error: error => console.warn(error)
     });

     API.graphql(graphqlOperation(su.onUpdateOrder)).subscribe({
              next: ({ provider, value }) => console.log({ provider, value }),
              error: error => console.warn(error)
          });

      API.graphql(graphqlOperation(su.onCreateMenu)).subscribe({
                    next: ({ provider, value }) => console.log({ provider, value }),
                    error: error => console.warn(error)
                });
}

componentDidMount() {
    console.log("Orders component loaded");
    this.subscribeOrderEvent();
    console.log("Subscribed on the order change event");
}

 render() {
  return (
   <div>
     <Container>
        <button onClick={() => this.fetchOrders()}>
            Log all the orders
        </button>


      </Container>
   </div>
  );
 }
}

export default PendingOrders;