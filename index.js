const { ApolloServer } = require("apollo-server")
const {
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core')
const { typeDefs, resolvers } = require('./schema')

const depthLimit = require('graphql-depth-limit')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(4)],
  plugins: [
    process.env.NODE_ENV === 'production' ?
      ApolloServerPluginLandingPageProductionDefault({ footer: false }) :
      ApolloServerPluginLandingPageLocalDefault({ footer: false })
  ]
})

server.listen().then(({ url }) => {
  console.log(`GraphQL is running on: ${url}`)
})

exports = server