import React, { Component, useState, useEffect } from 'react';
import FormField from "@awsui/components-react/form-field";
import Input from "@awsui/components-react/input";
import ColumnLayout from "@awsui/components-react/column-layout";

export class Demo extends Component {

  editCustomizationCategory(count, value) {
    const copy = this.props.itemCustomizations;
    copy[count-1].category = value;
    this.setState({itemCustomizations: copy});
  }

  constructor() {
    super();
    this.state = {
      customizationName: '',
      customizationCategory: '',
      customizationPrice: 0,
      itemCustomizations: [{name: "", category: "", price: 0}]
    }
  }

  // editCustomizationCategory(value) {
  //   this.setState({customizationCategory: value});
  // }

  editCustomizationName(value) {
    this.setState({customizationName: value});
  }

  editCustomizationPrice(value) {
    this.setState({customizationPrice: value});
  }

  render() {  
    console.log("Item Customization", this.props.itemCustomizations);
    console.log("Customization State", this.state);
    console.log("Customization Props", this.props);
    
    //(oldValue => oldValue.append({name: "name", category: "category", price: "15"}));    
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
        onChange={(event) => this.editCustomizationCategory(this.props.childCount, event.detail.value)} 
        value={this.state.itemCustomizations[this.props.childCount - 1].category}/>
        
        <Input id={'name'+ this.props.childCount} 
        placeholder="Enter name.." 
        onChange={(event) => this.editCustomizationName(event.detail.value)} 
        value={this.state.customizationName}/>


        <Input id={'price'+ this.props.childCount} 
        placeholder="Enter price.." 
        onChange={(event) => this.editCustomizationPrice(event.detail.value)} 
        value={this.state.customizationPrice}/>


      </ColumnLayout>
    </FormField>
    );
}
}