
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Continent {
    id: ID!
    name: String!
    code: String!
  }

  type Country {
    id: ID!
    name: String!
    code: String!
    emoji: String!
    continent: Continent!
    languages: [Language!]!
  }

  type Language {
    id: ID!
    name: String!
    native: String!
    code: String!
  }

  type Query {
    countries: [Country!]!
    country(code: String!): Country
    continents: [Continent!]!
    continent(code: String!): Continent
    languages: [Language!]!
    language(code: String!): Language
  }
`;

module.exports = typeDefs;
