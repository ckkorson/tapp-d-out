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
query tabs {
  tabs {
    _id
    createdAt
    description
    location
    tabOwner
    drinks {
      _id
      createdAt
    }
  }
}
`;

export const QUERY_SINGLE_TAB = gql`
  query tab {
    tab {
      _id
      description
      location
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
