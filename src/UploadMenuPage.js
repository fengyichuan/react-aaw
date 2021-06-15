import Form from "@awsui/components-react/form";
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import Select from "@awsui/components-react/select";
import Container from "@awsui/components-react/container";
import Header from "@awsui/components-react/header";
import SpaceBetween from "@awsui/components-react/space-between";
import Button from "@awsui/components-react/button";
import AppLayout from "@awsui/components-react/app-layout";
import "@awsui/global-styles/index.css";
import React, { Component, useState } from 'react';

export default function UploadMenuPage() {

  const [itemName, setItemName] = useState('');
  const [itemSize, setItemSize] = useState('');
  const [itemPrice, setItemPrice] = useState(0);
  return (
    <div>
    <AppLayout
      content={
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
              <FormField label="Size" description="Select Size for the item" errorText={!itemSize && "Please select a size"}>
                <Select
                  options={[
                    {
                      label: "none",
                      value: "none"
                    },
                    {
                      label: "Small",
                      value: "small"
                    },
                    {
                      label: "Medium",
                      value: "medium"
                    },
                    {
                      label: "Large",
                      value: "large"
                    },
                    {
                      label: "X Large",
                      value: "xlarge"
                    }
                  ]}
                  selectedOption={itemSize}
                  onChange={(event) => setItemSize(event.detail.selectedOption)}
                  selectedAriaLabel="selected"
                />
              </FormField>
              <FormField label="Item Price" description="Price of your food item">
                <Input value={itemPrice} onChange={(event) => setItemPrice(event.detail.value)} />
              </FormField>
            </SpaceBetween>
          </Container>
        </Form>
      }
    />
    </div>
  );
}
