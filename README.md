# studio-ghibli-graphql

🐼 The Unofficial Studio Ghibli GraphQL. Graphed from [`mazipan/ghibli-api`](https://github.com/mazipan/ghibli-api).

## Base URL

https://studio-ghibli-graphql.vercel.app

## Index

| Query Field                      | Description        |
| ---------------------------------| ------------------ |
| [films](#query-films)            | Get all Films      |
| [films(id)](#query-film)         | Get Film by ID     |
| [people](#query-people)          | Get all People     |
| [people(id)](#query-person)      | Get Person by ID   |
| [locations](#query-locations)    | Get all Locations  |
| [locations(id)](#query-location) | Get Location by ID |
| [species](#query-species)        | Get all Species    |
| [species(id)](#query-specimen)   | Get Species by ID  |
| [vehicles](#query-vehicles)      | Get all Vehicles   |
| [vehicles(id)](#query-vehicle)   | Get Vehicle by ID  |

| Type Field                 | Description        |
| ---------------------------| ------------------ |
| [Film](#type-film)         | Defines a Film     |
| [Person](#type-person)     | Defines a Person   |
| [Location](#type-location) | Defines a Location |
| [Specimen](#type-specimen) | Defines a Specimen |
| [Vehicle](#type-vehicle)   | Defines a Vehicle  |


## GraphQL Schema Documentation

This GraphQL schema defines queries for information related to [`ghibli-api`](https://github.com/mazipan/ghibli-api). It includes types for Studio Ghibli `films`, `people`, `species`, `locations`, and `vehicles`.

## Queries

### Query Films
- Returns a list of films.
- Input: None
- Output: List of [**Film**](#type-film) objects.

**Example Query:**
```graphql
query {
  films {
    id
    title
    description
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "films": [
      {
        "id": "1",
        "title": "My Neighbor Totoro",
        "description": "A delightful tale of two sisters and a forest spirit."
      },
      {
        "id": "2",
        "title": "Spirited Away",
        "description": "A young girl's adventure in a mysterious and magical world."
      },
      // ... Other film objects
    ]
  }
}
```
[Index ⤴️](#index)

### Query Film
- Returns information about a specific film by its ID.
- Input: Film ID (String)
- Output: [**Film**](#type-film) object.

**Example Query:**
```graphql
query {
  film(id: "1") {
    id
    title
    description
    director
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "film": {
      "id": "1",
      "title": "My Neighbor Totoro",
      "description": "A delightful tale of two sisters and a forest spirit.",
      "director": "Hayao Miyazaki"
    }
  }
}
```
[Index ⤴️](#index)

### Query People
- Returns a list of people.
- Input: None
- Output: List of [**Person**](#type-person) objects.

**Example Query:**
```graphql
query {
  people {
    id
    name
    gender
    age
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "people": [
      {
        "id": "1",
        "name": "Satsuki Kusakabe",
        "gender": "Female",
        "age": "11"
      },
      {
        "id": "2",
        "name": "Mei Kusakabe",
        "gender": "Female",
        "age": "4"
      },
      // ... Other person objects
    ]
  }
}
```
[Index ⤴️](#index)

### Query Person
- Returns information about a specific person by their ID.
- Input: Person ID (String)
- Output: [**Person**](#type-person) object.

**Example Query:**
```graphql
query {
  person(id: "1") {
    id
    name
    gender
    age
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "person": {
      "id": "1",
      "name": "Satsuki Kusakabe",
      "gender": "Female",
      "age": "11"
    }
  }
}
```
[Index ⤴️](#index)

### Query Species
- Returns a list of species.
- Input: None
- Output: List of [**Specimen**](#type-specimen) objects.

**Example Query:**
```graphql
query {
  species {
    id
    name
    classification
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "species": [
      {
        "id": "1",
        "name": "Totoro",
        "classification": "Spirit"
      },
      {
        "id": "2",
        "name": "Susuwatari",
        "classification": "Soot Sprite"
      },
      // ... Other species objects
    ]
  }
}
```
[Index ⤴️](#index)

### Query Specimen
- Returns information about a specific specimen by its ID.
- Input: Specimen ID (String)
- Output: [**Specimen**](#type-specimen) object.

**Example Query:**
```graphql
query {
  specimen(id: "1") {
    id
    name
    classification
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "specimen": {
      "id": "1",
      "name": "Totoro",
      "classification": "Spirit"
    }
  }
}
```
[Index ⤴️](#index)

### Query Locations
- Returns a list of locations.
- Input: None
- Output: List of [**Location**](#type-location) objects.

**Example Query:**
```graphql
query {
  locations {
    id
    name
    climate
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "locations": [
      {
        "id": "1",
        "name": "Satsuki and Mei's House",
        "climate": "Mild"
      },
      {
        "id": "2",
        "name": "Spirit Realm",
        "climate": "Mysterious"
      },
      // ... Other location objects
    ]
  }
}
```
[Index ⤴️](#index)

### Query Location
- Returns information about a specific location by its ID.
- Input: Location ID (String)
- Output: [**Location**](#type-location) object.

**Example Query:**
```graphql
query {
  location(id: "1") {
    id
    name
    climate
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "location": {
      "id": "1",
      "name": "Satsuki and Mei's House",
      "climate": "Mild"
    }
  }
}
```
[Index ⤴️](#index)

### Query Vehicles
- Returns a list of vehicles.
- Input: None
- Output: List of [**Vehicle**](#type-vehicle) objects.

**Example Query:**
```graphql
query {
  vehicles {
    id
    name
    vehicle_class
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "vehicles": [
      {
        "id": "1",
        "name": "Catbus",
        "vehicle_class": "Magical Creature"
      },
      {
        "id": "2",
        "name": "Porco Rosso's Plane",
        "vehicle_class": "Seaplane"
      },
      // ... Other vehicle objects
    ]
  }
}
```
[Index ⤴️](#index)

### Query Vehicle
- Returns information about a specific vehicle by its ID.
- Input: Vehicle ID (String)
- Output: [**Vehicle**](#type-vehicle) object.

**Example Query:**
```graphql
query {
  vehicle(id: "1") {
    id
    name
    description
  }
}
```

**Example JSON Result:**

```json
{
  "data": {
    "vehicle": {
      "id": "1",
      "name": "Catbus",
      "description": "A large, friendly cat-shaped bus."
    }
  }
}
```
[Index ⤴️](#index)

## Types

### Type Film
- Represents a [**Film**](#type-film).
- Fields:
  - `id`: Unique identifier (String)
  - `title`: Title of the film (String)
  - `original_title`: Original title (String)
  - `original_title_romanised`: Romanized original title (String)
  - `image`: URL of the film's image (String)
  - `movie_banner`: URL of the movie banner (String)
  - `description`: Film description (String)
  - `director`: Director's name (String)
  - `producer`: Producer's name (String)
  - `released_date`: Release date (Integer)
  - `running_time`: Running time (Integer)
  - `rt_score`: Rotten Tomatoes score (Integer)
  - `people`: List of associated people (List of [**Person**](#type-person))
  - `species`: List of associated species (List of [**Specimen**](#type-specimen))
  - `locations`: List of associated locations (List of [**Location**](#type-location))
  - `url`: API url reference of the film (String)

[Index ⤴️](#index)

### Type Person
- Represents people or a [**Person**](#type-person).
- Fields:
  - `id`: Unique identifier (String)
  - `name`: Name of the person (String)
  - `gender`: Gender (String)
  - `age`: Age (String)
  - `eye_color`: Eye color (String)
  - `hair_color`: Hair color (String)
  - `films`: List of associated films (List of [**Film**](#type-film))
  - `species`: Associated species ([**Specimen**](#type-specimen))
  - `url`: API url reference of the person (String)

[Index ⤴️](#index)

### Type Specimen
- Represents a species or [**Specimen**](#type-specimen).
- Fields:
  - `id`: Unique identifier (String)
  - `name`: Name of the species (String)
  - `classification`: Classification (String)
  - `eye_colors`: Eye colors (String)
  - `hair_colors`: Hair colors (String)
  - `people`: List of associated people (List of [**Person**](#type-person))
  - `films`: List of associated films (List of [**Film**](#type-film))
  - `url`: API url reference of the species (String)

[Index ⤴️](#index)

### Type Location
- Represents a [**Location**](#type-location).
- Fields:
  - `id`: Unique identifier (String)
  - `name`: Name of the location (String)
  - `climate`: Climate of the location (String)
  - `terrain`: Terrain of the location (String)
  - `surface_water`: Surface water description (String)
  - `residents`: List of residents (List of [**Person**](#type-person))
  - `films`: List of associated films (List of [**Film**](#type-film))
  - `url`: API url reference of the location (String)

[Index ⤴️](#index)

### Type Vehicle
- Represents a [**Vehicle**](#type-vehicle).
- Fields:
  - `id`: Unique identifier (String)
  - `name`: Name of the vehicle (String)
  - `description`: Description of the vehicle (String)
  - `vehicle_class`: Vehicle class (String)
  - `length`: Length of the vehicle (String)
  - `pilot`: Pilot of the vehicle ([**Person**](#type-person))
  - `films`: List of associated films (List of [**Film**](#type-film))
  - `url`: API url reference of the vehicle (String)

[Index ⤴️](#index)

---

© 2023, By @SupremoRTD