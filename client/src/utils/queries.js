import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      username
      email
    }
  }
`;

export const QUERY_TABS = gql`
  query getTabs {
    tabs {
      _id
      description
      location
      createdAt
    }
  }
`;

export const QUERY_SINGLE_TAB = gql`
  query getSingleTab($tabId: ID!) {
    tab(tabId: $tabId) {
      _id
      description
      location
      createdAt
      drinks {
        _id
        description
        price
        createdAt
      }
    }
  }
`;

export const QUERY_DRINKS = gql`
  {
    drinks(drinkName: "Bud Light") {
      _id
      category
      description
      drinkName
      price
    }
  }
`;
