const { ApolloServer } = require("apollo-server")
const { typeDefs } = require('./schema/type-defs')
const { resolvers } = require('./schema/resolvers')

const depthLimit = require('graphql-depth-limit')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(4)]
})

server.listen().then(({ url }) => {
  console.log(`GraphQL is running on: ${url}`)
})