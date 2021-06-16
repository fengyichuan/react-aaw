import Form from "@awsui/components-react/form";
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import Textarea from "@awsui/components-react/textarea";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";

import "@awsui/global-styles/index.css";
import React, { Component, useState } from 'react';



export function createMenuItem(name, price, alternativeNames, customizations) {
  const baseMenuItem = {
    menuInput : {
        name : name,
        basePrice : price,
        alternativeNames : ["LOL", "Pizza", "Hallelujah pizza"],
        customization : [
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
    }
  }
}

export default function UploadMenuPage() {

  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemAlternativeNames, setItemAlternativeNames] = useState();
  const [itemCustomizations, setItemCustomizations] = useState();
  const [itemSize, setItemSize] = useState('');
  return (
    <div>
      <Container>
      <Form
        actions={
          <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link">Cancel</Button>
            <Button variant="primary">Submit</Button>
          </SpaceBetween>
        }
        header={
          <Header variant="h1" description="A Form to add items to menu for a specific restaurant">
            Add Menu Items
          </Header>
        }
      >
        <Container header={<Header variant="h2">Add Items</Header>}>
          <SpaceBetween direction="vertical" size="l">
            <FormField label="Item Name" description="Name of your food item">
              <Input value={itemName} onChange={(event) => setItemName(event.detail.value)} />
            </FormField>
            <Textarea
              onChange={({ detail }) => setItemAlternativeNames(detail.value)}
              value={itemAlternativeNames}
              placeholder="Please enter alternative names of your food item"
            />
            <FormField label="Item Price" description="Price of your food item">
              <Input value={itemPrice} onChange={(event) => setItemPrice(event.detail.value)} />
            </FormField>
          </SpaceBetween>
        </Container>
      </Form>
      </Container>
    </div>
  );
}
