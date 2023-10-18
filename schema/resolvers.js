const baseUrl = 'https://ghibliapi.vercel.app'

const fetchAll = async (endpoint) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`)
    const data = await response.json()
    return data
  } catch (err) { throw new Error(`Error: ${err}`) }
}

const fetchOne = async (endpoint, id) => {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}/${id}`)
    const data = await response.json()
    return data
  } catch (err) { throw new Error(`Error: ${err}`) }
}

const fetchRelationships = async (endpoint, id, key) => {
  try {
    // get a single person from the api
    const person_response = await fetch(`${baseUrl}/${endpoint}/${id}`)
    const person_data = await person_response.json()

    // api returns relationship urls array, combine into promise array
    const requests = person_data[key].map(key => fetch(key))
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
  } catch (err) { return [] }
}

const resolvers = {
  Query: {
    films: async () => await fetchAll('films'),
    film: async (_, args) => await fetchOne('films', args.id),
    people: async () => await fetchAll('people'),
    person: async (_, args) => await fetchOne('people', args.id)
  },

  Person: {
    films: async (parent) => await fetchRelationships('people', parent.id, 'films')
  },

  Film: {
    people: async (parent) => {
      try {
        const people_response = await fetch(`${baseUrl}/people`)
        const people_data = await people_response.json()

        const data = people_data.filter(data => data.films.some(url => url.includes(parent.id)))

        return data
      } catch (err) { return [] }
    }
  }
}

module.exports = { resolvers }