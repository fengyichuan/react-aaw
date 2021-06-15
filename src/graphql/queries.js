/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
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
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
