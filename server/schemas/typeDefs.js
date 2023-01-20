const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
  }

  type Drink {
    _id: ID!
    drinkName: String
    description: String
    price: Int
    category: String
  }

  type Tab {
    _id: ID!
    tabDate: String
    drinks: [Drink]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    drink(_id: ID!): Drink
    drinks(drinkName: String): [Drink]
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
