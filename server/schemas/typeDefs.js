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
  _Id: ID!
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
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(authors: [String], bookId: String!, )
}

`;

module.exports = typeDefs;
