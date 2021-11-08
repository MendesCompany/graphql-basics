import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
import camelCaseKeys from 'camelcase-keys'
import { people } from './db'

export class PeopleAPI extends RESTDataSource {
  public async peopleByName(name: string) {
    return people.filter(p => p.name === name) || [];
  }
}

export const dataSources = () => ({ peopleAPI: new PeopleAPI() })
