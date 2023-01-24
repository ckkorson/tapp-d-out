import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      user {
        _id
        username
      }
      token
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TAB = gql`
  mutation addTab($description: String!, $location: String!) {
    addTab(description: $description, location: $location) {
      _id
      description
      location
      tabOwner
      createdAt
      drinks {
        _id
        drinkType
        price
        createdAt
      }
    }
  }
`;

export const ADD_DRINK = gql`
mutation addDrink($tabId: ID!, $drinkType: String!, $price: Int) {
  addDrink(tabId: $tabId, drinkType: $drinkType, price: $price) {
    _id
    createdAt
    description
    location
    tabOwner
    drinks {
      _id
      createdAt
      drinkType
      price
    }
  }
}
`;
