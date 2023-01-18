const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    userType: String!
    name: String!
    username: String!
    email: String!
  }

  type Drink {
    _id: ID!
    drinkName: String
    description: String
    price: Int!
    quantity: Int
    category: String
  }

  type Tab {
    _id: ID!
    tabOwner: String
    drinks: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(
      userType: String!
      name: String!
      username: String!
      email: String!
      password: String!
    ): Auth

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
