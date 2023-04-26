Create a simple Node.js Rest API that provides data about customers. You are supposed to follow the following conditions:

1. Create a customers.json file with multiple customers. Sample customer data: { id: 1, first_name: 'Aman', last_name: 'Gupta', city: 'Ahmedabad', company: 'SublimeDataSystems' }. You can also use a database of your choice and add the sample data to it.
2. Create an API for listing customers with pagination and search functionality for first name, last name, and city.
3. Create an API for getting a single customer's data by its id.
4. Create an API for listing all unique cities and the number of customers from each city.
5. Create an API for adding a customer with validations. All fields are required, and the city and company should already exist for an existing customer. No new cities or companies can be added.

# Customers API

This API provides data about customers.

**Base URL:** http://localhost:3000

## Endpoints

### 1. List Customers

**GET /customers**

This endpoint returns a list of customers. The following query parameters are supported:

| Parameter  | Type   | Description                                            |
| ---------- | ------ | ------------------------------------------------------ |
| page       | number | The page number to return (default: 1)                 |
| limit      | number | The number of results per page to return (default: 10) |
| first_name | string | Filter by customer's first name                        |
| last_name  | string | Filter by customer's last name                         |
| city       | string | Filter by customer's city                              |

**Example Requests:**

GET http://localhost:3000/customers?page=1&limit=10

GET http://localhost:3000/customers?first_name=Amit&page=1&limit=10

GET http://localhost:3000/customers?last_name=Kumar&page=1&limit=10

GET http://localhost:3000/customers?city=Mumbai&page=1&limit=10

### 2. Get Customer by ID

**GET /customers/:id**

This endpoint returns a single customer by their ID.

**Example Request:**

GET http://localhost:3000/customers/50

### 3. List Cities

**GET /cities**

This endpoint returns a list of cities and the number of customers from each city.

**Example Request:**

GET http://localhost:3000/cities

### 4. Add Customer

**POST /customers**

This endpoint adds a new customer to the data.

**Example Request:**

POST http://localhost:3000/customers

**Error Responses**

The following error responses may be returned:

| Status Code | Response                  | Description                          |
| ----------- | ------------------------- | ------------------------------------ |
| 400         | All fields are required   | Missing a required field in the body |
| 400         | City or company not found | The city or company does not exist   |
| 404         | Customer not found        | A customer with the ID was not found |

# Customers API

This API provides data about customers.

**Base URL:** http://localhost:3000

## Endpoints

### 1. List Customers

**GET /customers**

This endpoint returns a list of customers. The following query parameters are supported:

| Parameter  | Type   | Description                                            |
| ---------- | ------ | ------------------------------------------------------ |
| page       | number | The page number to return (default: 1)                 |
| limit      | number | The number of results per page to return (default: 10) |
| first_name | string | Filter by customer's first name                        |
| last_name  | string | Filter by customer's last name                         |
| city       | string | Filter by customer's city                              |

**Example Requests:**

GET http://localhost:3000/customers?page=1&limit=10

GET http://localhost:3000/customers?first_name=Amit&page=1&limit=10

GET http://localhost:3000/customers?last_name=Kumar&page=1&limit=10

GET http://localhost:3000/customers?city=Mumbai&page=1&limit=10

### 2. Get Customer by ID

**GET /customers/:id**

This endpoint returns a single customer by their ID.

**Example Request:**

GET http://localhost:3000/customers/50

### 3. List Cities

**GET /cities**

This endpoint returns a list of cities and the number of customers from each city.

**Example Request:**

GET http://localhost:3000/cities

### 4. Add Customer

**POST /customers**

This endpoint adds a new customer to the data.

**Example Request:**

POST http://localhost:3000/customers

**Error Responses**

The following error responses may be returned:

| Status Code | Response                  | Description                          |
| ----------- | ------------------------- | ------------------------------------ |
| 400         | All fields are required   | Missing a required field in the body |
| 400         | City or company not found | The city or company does not exist   |
| 404         | Customer not found        | A customer with the ID was not found |
