import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
import camelCaseKeys from 'camelcase-keys'
import { people } from './db'

const ACCESS_KEY = 'f3a06cbc50a8bf51ca93f137e8ebc332'
const API_URL = 'https://api.openweathermap.org/data/2.5/'

export class PeopleAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = API_URL
  }

  willSendRequest(request: RequestOptions) { }

  async peopleByName(name: string) {
    console.log(name)
    return people.find(person => person.name == 'Daniel') || [];
  }
}

export const dataSources = () => ({ weatherAPI: new PeopleAPI() })
