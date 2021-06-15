/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenus = /* GraphQL */ `
  query GetMenus($id: ID!) {
    getMenus(id: $id) {
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
export const listMenuss = /* GraphQL */ `
  query ListMenuss(
    $filter: ModelMenusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        price
        customization
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        menuId
        price
        customization
        orderedTime
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
