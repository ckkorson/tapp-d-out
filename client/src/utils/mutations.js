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
  mutation addDrink($description: String!, $price: Int) {
    addDrink(description: $description, price: $price) {
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
