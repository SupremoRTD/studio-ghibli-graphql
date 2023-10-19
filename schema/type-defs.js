const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    films: [Film!]!
    film(id: String!): Film
    people: [Person!]!
    person(id: String!): Person
    species: [Specimen!]!
    specimen(id: String!): Specimen
    locations: [Location]
    location(id: String!): Location
  }

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
    people: [Person]
    species: [Specimen]
    locations: [Location]
    url: String!
  }
  
  type Person {
    id: String!
    name: String
    gender: String!
    age: String!
    eye_color: String!
    hair_color: String!
    films: [Film]
    species: [Specimen]
    url: String!
  }

  type Specimen {
    id: String!
    name: String!
    classification: String!
    eye_colors: String!
    hair_colors: String!
    url: String!
    people: [Person]
    films: [Film]
  }

  type Location {
    id: String!
    name: String!
    climate: String!
    terrain: String!
    surface_water: String!
    residents: [Person]
    films: [Film]
    url: String!
  }
`

module.exports = { typeDefs }