import React, { Component } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as qu from './graphql/queries';
import * as mu from './graphql/mutations';
import * as su from './graphql/subscriptions';
import Container from "@awsui/components-react/container";

import { render } from "react-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {}
});

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

state = {
    items: [
      {
        id: "id1",
        menuId: "menuid1",
        items: [],
        price: 10,
        customization: "custom",
        orderedTime: "time",
        status: "status"
      },
      {
        id: "id2",
        menuId: "menuid1",
        items: [],
        price: 10,
        customization: "custom",
        orderedTime: "time",
        status: "status"
      },
      {
        id: "id3",
        menuId: "menuid1",
        items: [],
        price: 10,
        customization: "custom",
        orderedTime: "time",
        status: "status"
      }
    ]
  };

  deleteItem(i) {
    const { items } = this.state;
    items.splice(i, 1);
    this.setState({ items });
  }

  

 render() {
  const classes = styles();
  const filterByNotCompleted = { filter: {
    status : {
        ne: "COMPLETED"
    }
}
}
  const orders = API.graphql(graphqlOperation(qu.listOrders, filterByNotCompleted)).then((result) => {return result.data});
  console.log("XINYUAN ORDER",orders);

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