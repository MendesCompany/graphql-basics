import { gql, IResolvers, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql`
  type Person {
    name: String!
    age: Int!
  }

  type Query {
    peopleByName(name: String!): [Person]
  }
`

const resolvers: IResolvers = {
  Query: {
    peopleByName(_, { name }, { dataSources }) {
      return dataSources.weatherAPI.peopleByName(name)
    },
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
