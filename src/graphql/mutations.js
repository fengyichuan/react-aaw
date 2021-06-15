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
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
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
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
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
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
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
