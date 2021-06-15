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
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
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
export const listOrderss = /* GraphQL */ `
  query ListOrderss(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderss(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
