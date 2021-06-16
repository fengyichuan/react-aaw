import Form from "@awsui/components-react/form";
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import Textarea from "@awsui/components-react/textarea";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import "@awsui/global-styles/index.css";
import React, { useState, useEffect } from 'react';
import { Demo } from './Demo';
import { Box } from "@awsui/components-react";
import parse from 'html-react-parser';

export default function UploadMenuPage() {

  var initialCount = 0;
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemAlternativeNames, setItemAlternativeNames] = useState();
  const [itemCustomizations, setItemCustomizations] = useState([{name: "", category: "", price: 0}]);
  const [numOfCustomization, setNumberOfCustomization] = useState(0);

  useEffect(() => {
    //Logging the new values everytime you change some parameter.
    console.log("ItemName", itemName);
    console.log("ItemPrice", itemPrice);
    console.log("itemAlternativeNames", itemAlternativeNames);
    console.log("itemCustomizations", itemCustomizations);
    console.log("inititalCounter", initialCount);
    console.log("numOfCustomization", numOfCustomization);
  }, [itemName, itemPrice, itemAlternativeNames]);

  function createMenuItem() {
    const menuItem = {
      name : itemName,
      basePrice : itemPrice,
      alternativeNames : itemAlternativeNames.split("\n"),
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
  
  function handleCountIncrement(){
    setItemCustomizations([{name: "name", category: "category", price: "10"}]);
    setNumberOfCustomization(prevCount => prevCount + 1);
  }

  function handleCountDecrement(){
    setNumberOfCustomization(prevCount => prevCount == 0 ? prevCount : prevCount - 1);
  }

  const customizationChildren = [];
    for (var i = 1; i <= numOfCustomization; i += 1) {
      customizationChildren.push(<Demo childCount={i} itemCustomizations={itemCustomizations}/>);
    };

    function getConsolidatedCustomizations() {
      const result = parse(document.getElementById("customization-div").innerHTML);
      console.log("DJM Result", result);
    }

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
              <Box>
              <Button variant="primary" onClick={() => handleCountIncrement()}>
                Add Customization 
              </Button> 
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button variant="primary" onClick={() => handleCountDecrement()}>
                Delete Customization 
              </Button> 
              </Box>
              <div id="customization-div">
                {customizationChildren}
              </div>
            </SpaceBetween>
          </Container>
        </Form>
      </Container>
    </div>
  );
}
