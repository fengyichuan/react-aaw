/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
      id
      name
      alternativeNames
      basePrice
      customization {
        category
        name
        price
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
      id
      name
      alternativeNames
      basePrice
      customization {
        category
        name
        price
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
      id
      name
      alternativeNames
      basePrice
      customization {
        category
        name
        price
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      items {
        menuId
        customization {
          category
          name
          price
        }
      }
      price
      orderedTime
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      items {
        menuId
        customization {
          category
          name
          price
        }
      }
      price
      orderedTime
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      items {
        menuId
        customization {
          category
          name
          price
        }
      }
      price
      orderedTime
      status
      createdAt
      updatedAt
    }
  }
`;
