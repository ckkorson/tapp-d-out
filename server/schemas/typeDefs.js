const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
  }

  type Tab {
    _id: ID!
    description: String
    location: String
    createdAt: String
    drinks: [Drink]
  }

  type Drink {
    _id: ID
    description: String
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
    tabs(username:String): [Tab]
  }

  type Mutation {
    addUser(
      name: String!
      username: String!
      email: String!
      password: String!
    ): Auth

    addDrink(
      drinkName: String!
      description: String
      price: Int!
      category: String
      tabId: ID
    ): Drink

    addTab(drinks: [ID]!): Tab

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
