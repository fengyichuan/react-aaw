import React, { Component, useEffect, useState } from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import * as qu from './graphql/queries';
import * as mu from './graphql/mutations';
import * as su from './graphql/subscriptions';
import Container from "@awsui/components-react/container";
import Table from "@awsui/components-react/table";
import TextFilter from "@awsui/components-react/text-filter";
import Box from "@awsui/components-react/box";
import Link from "@awsui/components-react/link";
import Header from "@awsui/components-react/header";
import { Button, SpaceBetween } from '@awsui/components-react';

function transformData(results) {
  console.log("DJM", results);
  //TODO: Change it. Here, it is assumed that the user can order only 1 food item.
  const orderList = results.data.listOrders.items;
  const rows = [];
  orderList.forEach((data) => {
    const orderId = data.id;
    const orderItems = data.items[0].customization;
    const menuId = data.items[0].menuId;
    const status = data.status;
    const price = data.price;
    const orderedTime = data.orderedTime;

    rows.push(
      {
        id: orderId,
        items: orderItems,
        menuId: menuId,
        status: status,
        price: price,
        orderedTime: orderedTime
      }
    );
  }); 
  console.log("DJM ROWS", rows);
  return rows;
}

async function fetchOrders() {
  let filterByNotCompleted = { filter: {
    status : {
        ne: "COMPLETED"
    }
  }
  }
  console.log("Fetching orders DJM");
  const orders =  API.graphql(graphqlOperation(qu.listOrders, filterByNotCompleted));
  return await orders;
}

export default function PendingOrdersPage() {

  const [tableRow, setTableRow] = useState([]);

  function buttonClicked() {
    const temp = fetchOrders();
    temp.then((results) => {return transformData(results)}).then((finalResult) => {setTableRow(finalResult)});
  }

  useEffect(() => {
  }, [tableRow]);

  return (

    <div>
      <Container>
        <SpaceBetween size="l" direction="vertical">
        <Button onClick={() => buttonClicked()} variant="primary"> CLICK HERE TO PULL PENDING ORDERS </Button>
      <Table
          columnDefinitions={[
            {
              id: 'id',
              header: 'Id',
              cell: (item) => item.id || '-',
              width: 100
            },
            {
              id: 'items',
              header: 'Items',
              cell: (item) => item.items || '-',
              width: 450
            },
            {
              id: 'menuId',
              header: 'Rule Matched',
              cell: (item) => item.menuId || '-',
              width: 200
            },
            {
              id: 'status',
              header: 'Status',
              cell: (item) => item.status || '-',
              width: 400
            },
            {
              id: 'price',
              header: 'Price',
              cell: (item) => item.price || '-',
              width: 400
            },
            {
              id: 'orderedTime',
              header: 'Order Time',
              cell: (item) => item.orderedTime || '-',
              width: 400
            }
          ]}
          items={tableRow}
          loading={false}
          loadingText='Loading resources..'
          resizableColumns
          filter={<TextFilter filteringText='' />}
          footer={
            <Box textAlign='center'>
              <Link href='#'>View all</Link>
            </Box>
          }
          header={<Header> Order History Page</Header>}
                />
                </SpaceBetween>
                
                </Container>
    </div>
  );
}