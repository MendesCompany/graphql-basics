import { gql, IResolvers, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql`
  enum AgeMetric {
    DAYS
    YEARS
  }

  type Person {
    name: String!
    age(metric: AgeMetric = YEARS): Int!
  }

  type Query {
    peopleByName(name: String!): [Person]
  }
`

const resolvers: IResolvers = {
  Query: {
    peopleByName(_, { name }, { dataSources }) {
      return dataSources.peopleAPI.peopleByName(name)
    },
  },
  Person: {
    age(person, { metric }, { dataSources }) {
      return metric === 'YEARS' ? person.age : person.age * 365;
    },
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
