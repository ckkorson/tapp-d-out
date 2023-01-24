const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
    tabs: [Tab]!
  }

  type Tab {
    _id: ID!
    description: String
    tabOwner: String
    location: String
    createdAt: String
    drinks: [Drink]
  }

  type Drink {
    _id: ID
    drinkType: String
    price: Int
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): User
    me: User
    tabs: [Tab]
    tab: [Tab]
  }

  type Mutation {
    addUser(
      name: String!
      username: String!
      email: String!
      password: String!
    ): Auth

    addDrink(tabId: ID!, drinkType: String!, price: Int): Tab

    addTab(description: String!, location: String!): Tab

    updateUser(
      name: String
      username: String
      email: String
      password: String
    ): User

    login(username: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
