import { gql, IResolvers, makeExecutableSchema } from 'apollo-server'

const typeDefs = gql`
  type Person {
    name: String!
    age: Int!
    overAge: Boolean!
  }

  type Query {
    peopleByName(name: String!): [Person]
    allPeople: [Person]
  }
`

const resolvers: IResolvers = {
  Query: {
    peopleByName(_, { name }, { dataSources }) {
      return dataSources.peopleAPI.peopleByName(name)
    },
    allPeople(_, __, { dataSources }) {
      return dataSources.peopleAPI.findAllPeople()
    },
  },
  Person: {
    overAge(person, __, ___) {
      return person.age > 18 ? true : false;
    },
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
