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
import * as mu from './graphql/mutations';
import { API, graphqlOperation } from 'aws-amplify';

export default function UploadMenuPage() {

  var initialCount = 0;
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemAlternativeNames, setItemAlternativeNames] = useState();
  const [itemCustomizations, setItemCustomizations] = useState([]);
  const [numOfCustomization, setNumberOfCustomization] = useState(0);

  useEffect(() => {
    //Logging the new values everytime you change some parameter.
    console.log("ItemName", itemName);
    console.log("ItemPrice", itemPrice);
    console.log("itemAlternativeNames", itemAlternativeNames);
    console.log("itemCustomizations", itemCustomizations);
    console.log("inititalCounter", initialCount);
    console.log("numOfCustomization", numOfCustomization);
  }, [itemName, itemPrice, itemAlternativeNames, itemCustomizations]);

  function createMenuItem() {
    const menuItem = {
      name : itemName,
      basePrice : itemPrice,
      alternativeNames : itemAlternativeNames.split("\n"),
      customization : [...itemCustomizations]
      }
    try {
        API.graphql(graphqlOperation(mu.createMenu, {input: menuItem}));
        console.log("Successfully added the menu item", menuItem);
    } catch (err) {
        console.log('Error when adding a menu item', err);
    }
  }
  
  function handleCountIncrement(){
    setNumberOfCustomization(prevCount => prevCount + 1);
    setItemCustomizations(old => [...old, {name: "", category: "", price: 0}]);
    console.log("NEW ITEM CUSTOM", itemCustomizations);
  }

  function handleCountDecrement(){
    setNumberOfCustomization(prevCount => prevCount === 0 ? 0 : prevCount - 1);
    setItemCustomizations(old => old.filter((_, i) => i !== old.length - 1));
  }

  function onCategoryChange(count, value) {
    let oldList = [...itemCustomizations];
    let oldItem = {...oldList[count - 1]};
    oldItem.category = value;
    oldList[count - 1] = oldItem;
    setItemCustomizations(oldList);
  }

  function onNameChange(count, value) {
    let oldList = [...itemCustomizations];
    let oldItem = {...oldList[count - 1]};
    oldItem.name = value;
    oldList[count - 1] = oldItem;
    setItemCustomizations(oldList);
  }

  function onPriceChange(count, value) {
    let oldList = [...itemCustomizations];
    let oldItem = {...oldList[count - 1]};
    oldItem.price = value;
    oldList[count - 1] = oldItem;
    setItemCustomizations(oldList);
  }

  const customizationChildren = [];

  for (var i = 1; i <= numOfCustomization; i += 1) {
    customizationChildren.push(<Demo childCount={i} onCategoryChange={onCategoryChange} onNameChange={onNameChange} onPriceChange={onPriceChange} items={itemCustomizations} />);
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
              <Button variant="primary" onClick={() => createMenuItem()}>Submit</Button>
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
