import React, { Component, useState, useEffect } from 'react';
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import ColumnLayout from "@awsui/components-react/column-layout";

export class Customization extends Component {

  // editCustomizationCategory(count, value) {
  //   const copy = this.props.itemCustomizations;
  //   copy[count-1].category = value;
  //   this.setState({itemCustomizations: copy});
  // }

  // // editCustomizationCategory(value) {
  // //   this.setState({customizationCategory: value});
  // // }

  // editCustomizationName(value) {
  //   this.setState({customizationName: value});
  // }

  // editCustomizationPrice(value) {
  //   this.setState({customizationPrice: value});
  // }

  render() {  
    console.log("Customization Props", this.props);
    return(
      <FormField
        stretch
        description="Add the category, name and price of each customization."
        label="Customization"
        id={'form'+ this.props.childCount}
      >
      <ColumnLayout columns={3}>
        
        <Input id={'category'+ this.props.childCount} 
        placeholder="Enter category.." 
        onChange={(event) => this.props.onCategoryChange(this.props.childCount, event.detail.value)} 
        value={this.props.items[this.props.childCount - 1].category}/>
        
        <Input id={'name'+ this.props.childCount} 
        placeholder="Enter name.." 
        onChange={(event) => this.props.onNameChange(this.props.childCount, event.detail.value)} 
        value={this.props.items[this.props.childCount - 1].name}/>


        <Input id={'price'+ this.props.childCount} 
        placeholder="Enter price.." 
        onChange={(event) => this.props.onPriceChange(this.props.childCount, event.detail.value)} 
        value={this.props.items[this.props.childCount - 1].price}/>


      </ColumnLayout>
    </FormField>
    );
}
}