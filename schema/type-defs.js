const { gql } = require('apollo-server')

const typeDefs = gql`
  type Film {
    id: String!
    title: String!
    original_title: String!
    original_title_romanised: String!
    description: String!
    director: String!
    producer: String!
    released_date: Int
    running_time: Int!
    rt_score: Int!
    url: String!
    people: [Person]
  }
  
  type Person {
    id: String!
    name: String
    gender: String!
    eye_color: String!
    hair_color: String!
    url: String!
    films: [Film]
  }

  type Query {
    films: [Film!]!
    film(id: String!): Film
    people: [Person!]!
    person(id: String!): Person
  }
`

module.exports = { typeDefs }