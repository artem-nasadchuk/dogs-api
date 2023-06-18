# Dogs API

#### The Dog API allows you to perform various actions related to dogs, including retrieving dog information, pinging the server, and creating new dogs.

## Stack
- Node.js
- Express.js
- TypeScript
- PostgreSql
- Sequelize
- Postman (for testing)

## Getting started

```bash
npm install # install all dependencies
```
RENAME `.env.example` to `.env` and fill with your values

```bash
ts-node ./src/utils/setup.ts # initializes the database with the data provided
npm run dev # start the server
```

## Endpoints

`GET /ping`

This endpoint allows you to receive a response containing the version of the Dogshouseservice.

`POST /dogs`

This endpoint allows you to create a new dog by sending a POST request with the dog's details in the request body. The required fields for creating a dog are name, color, tail_length, and weight.

`GET /dogs`

This endpoint allows you to retrieve a list of dogs.

- Sorting:

To sort the dogs by a specific attribute, you can use the attribute and order query parameters. The available attributes for sorting are name, color, tail_length, and weight. The order parameter can be set to either asc for ascending order or desc for descending order.

Example: `GET /dogs?attribute=weight&order=desc`

- Pagination:

To paginate the results, you can use the pageNumber and limit query parameters. pageNumber specifies the page number you want to retrieve, and limit determines the number of dogs per page.

Example: `GET /dogs?pageNumber=3&limit=10`

- Sorting and Pagination together:

You can combine sorting and pagination by including both the sorting and pagination query parameters in the request.

Example: `GET /dogs?attribute=weight&order=desc&pageNumber=3&limit=10`
