const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
  _id: ID!
  userType: String!
  name: String!
  username: String!
  email: String!
  tabs: [Tab]
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
  tabOwner: String
  drinks: Int
}

type Auth {
  token: ID!
  user: User
}

type Query {
    user: User
    tab: (_id: ID!): Tab
}

type Mutation {
  addUser(
    name: String!
    username: String!
    email: String!
    password: String!
  ): AutH
  addTab(drinks: [ID]!): Tab
  addDrink(
    description: String
    price: Int!
    quantity: Int
    category: String
  )
  updateUser(
    name: String!
    username: String!
    email: String!
    password: String!
  ): User
  updateDrink(
    _id: ID!
    drinkName: String
    description: String
    price: Int!
    quantity: Int
    category: String
  ): Drink

  // deleteDrink(
  //   ADD DELETE DRINK
  // )

  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(authors: [String], bookId: String!, )
}

`;

module.exports = typeDefs;
