import React, { Component } from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import * as qu from '../graphql/queries';
import * as su from '../graphql/subscriptions';
import Container from "@awsui/components-react/container";
import Table from '@awsui/components-react/table';

class PendingOrders extends Component {

state = {
    orders : []
}


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
        const result = orders.data.listOrders.items;
        console.log(result);

        this.setState({
            orders: result
        });
        return result;
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
        <Table columnDefinitions={[
            {header: "Id", cell: item => item.createdAt},
            {header: "Price",cell: item => item.createdAt},
            {header: "Ordered Time",cell: item=> item.createdAt},
            {header: "Status",cell: item => item.createdAt},
        ]} items={this.state.orders} />

      </Container>
   </div>
  );
 }
}

export default PendingOrders;