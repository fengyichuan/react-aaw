/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenus = /* GraphQL */ `
  mutation CreateMenus(
    $input: CreateMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    createMenus(input: $input, condition: $condition) {
      id
      name
      price
      customization
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateMenus = /* GraphQL */ `
  mutation UpdateMenus(
    $input: UpdateMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    updateMenus(input: $input, condition: $condition) {
      id
      name
      price
      customization
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenus = /* GraphQL */ `
  mutation DeleteMenus(
    $input: DeleteMenusInput!
    $condition: ModelMenusConditionInput
  ) {
    deleteMenus(input: $input, condition: $condition) {
      id
      name
      price
      customization
      status
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      menuId
      price
      customization
      orderedTime
      status
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      menuId
      price
      customization
      orderedTime
      status
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      menuId
      price
      customization
      orderedTime
      status
      createdAt
      updatedAt
    }
  }
`;
