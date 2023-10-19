const baseUrl = 'https://ghibliapi.vercel.app'

const fetcher = {
  all: async (endpoint) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}`)
      const data = await response.json()
      return data
    } catch (err) { throw new Error(`Error: ${err}`) }
  },

  one: async (endpoint, id) => {
    try {
      const response = await fetch(`${baseUrl}/${endpoint}/${id}`)
      const data = await response.json()
      return data
    } catch (err) { throw new Error(`Error: ${err}`) }
  },

  relationships: async (endpoint, id, key) => {
    try {
      // get a single unit from the api
      const unit_response = await fetch(`${baseUrl}/${endpoint}/${id}`)
      const unit_data = await unit_response.json()

      // api returns relationship urls array, combine into promise array
      const requests =
        unit_data[key]
          .filter(key => !key.includes('TODO')) // api author added this to some arrays
          .map(key => fetch(key))
      const responses = await Promise.all(requests)

      // poop if any responses fail
      for (const response of responses) {
        if (!response.ok) {
          throw new Error('One or more requests failed')
        }
      }

      // handle all returned promise data
      const json = responses.map(response => response.json())
      const data = await Promise.all(json)
      return data
    } catch (err) { throw new Error(`Error: ${err}`) }
  },

  filterBy: async (endpoint, key, value) => {
    try {
      // request all data from an endpoint, then filter data by a value within a key
      const request = await fetcher.all(endpoint)
      const data = request.filter(data => data[key].some(url => url.includes(value)))

      return data
    } catch (err) { throw new Error(`Error: ${err}`) }
  }
}

const resolvers = {
  Query: {
    films: async () => await fetcher.all('films'),
    film: async (_, args) => await fetcher.one('films', args.id),
    people: async () => await fetcher.all('people'),
    person: async (_, args) => await fetcher.one('people', args.id),
    species: async () => await fetcher.all('species'),
    specimen: async (_, args) => await fetcher.one('species', args.id),
    locations: async () => await fetcher.all('locations'),
    location: async (_, args) => await fetcher.one('locations', args.id)
  },

  Person: {
    films: async (parent) => await fetcher.relationships('people', parent.id, 'films')
  },

  Film: {
    people: async (parent) => await fetcher.filterBy('people', 'films', parent.id),
    species: async (parent) => await fetcher.filterBy('species', 'films', parent.id),
    locations: async (parent) => await fetcher.filterBy('locations', 'films', parent.id)
  },

  Specimen: {
    people: async (parent) => await fetcher.relationships('species', parent.id, 'people'),
    films: async (parent) => await fetcher.relationships('species', parent.id, 'films')
  },

  Location: {
    residents: async (parent) => await fetcher.relationships('locations', parent.id, 'residents'),
    films: async (parent) => await fetcher.relationships('locations', parent.id, 'films')
  }
}

module.exports = { resolvers }