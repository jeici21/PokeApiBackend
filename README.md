
# Poke Api Project

A simple pokedex api backend

## Screenshots

ERD Model

![Database ER Diagram](./assets/pokeapi%20-%20public.png)




## Requirements

To run the project you need to have docker and docker compose installed on your operating system.

```bash
  git clone https://github.com/jeici21/PokeApiBackend.git
  cd PokeApiBackend
```
## Deployment

To deploy this project run

```bash
  cd PokeApiBackend
  docker-compose up
```
`http://localhost:3000/api/docs`

## API Reference

#### Heath check

```http
  GET /api/health
```

#### Get all types

```http
  GET /api/type
```


#### Get type by ID
```http
  GET /api/type/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int`    | **Required**. Id of type to fetch |


#### Get type by name
```http
  GET /api/type/${name}
```

| Parameter | Type     | Description                         |
| :-------- | :------- | :--------------------------------   |
| `name`    | `string` | **Required**. name of type to fetch |



#### Get all pokemons

```http
  GET /api/pokemons/
```


#### Get pokemon by ID

```http
  GET /api/pokemons/${id}
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :--------------------------------    |
| `id`      | `int` | **Required**. Id of pokemon to fetch |




## Authors

- [@jeici21](https://www.github.com/jeici21)

