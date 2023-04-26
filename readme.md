Create a simple Node.js Rest API that provides data about customers. You are supposed to follow the following conditions:

1. Create a customers.json file with multiple customers. Sample customer data: { id: 1, first_name: 'Aman', last_name: 'Gupta', city: 'Ahmedabad', company: 'SublimeDataSystems' }. You can also use a database of your choice and add the sample data to it.
2. Create an API for listing customers with pagination and search functionality for first name, last name, and city.
3. Create an API for getting a single customer's data by its id.
4. Create an API for listing all unique cities and the number of customers from each city.
5. Create an API for adding a customer with validations. All fields are required, and the city and company should already exist for an existing customer. No new cities or companies can be added.

///////////////////////////////////////////////////////////////////////////////////

1. Customers API
This API provides data about customers.

Base URL
http://localhost:3000

///////////////////////////////////////////////////////////////////////////////////

2. List Customers

GET /customers

This endpoint returns a list of customers. The following query parameters are supported:

                         
Parameter     Type      Description
page          number    The page number to return (default: 1)
limit         number    The number of results per page to return (default: 10)
first_name    string    Filter by customer's first name
last_name     string    Filter by customer's last name
city          string    Filter by customer's city


To fetch the first page with 10 records per page, you would use the following URL in Postman:
GET http://localhost:3000/customers?page=1&limit=10
To fetch the second page with 10 records per page, change the page parameter to 2:
GET http://localhost:3000/customers?page=2&limit=10
To fetch the third page with 10 records per page, change the page parameter to 3:
GET http://localhost:3000/customers?page=3&limit=10

If you want to use other query parameters like 'first_name', 'last_name', or 'city', just add them to the URL. 
For example, to fetch customers with the first_name "Amit" on the first page:
GET http://localhost:3000/customers?first_name=&Amit=1&limit=10

For example, to fetch customers with the last_name "Kumar" on the first page:
GET http://localhost:3000/customers?last_name=Kumar&page=1&limit=10

For example, to fetch customers with the city "Mumbai" on the first page:
GET http://localhost:3000/customers?city=Mumbai&page=1&limit=10

///////////////////////////////////////////////////////////////////////////////////

3. Get Customer by ID

GET /customers/:id

This endpoint returns a single customer by their ID.

GET http://localhost:3000/customers/50

///////////////////////////////////////////////////////////////////////////////////

4. List Cities

GET /cities

This endpoint returns a list of cities and the number of customers from each city.

GET http://localhost:3000/cities

///////////////////////////////////////////////////////////////////////////////////

5. Add Customer

POST /customers

This endpoint adds a new customer to the data.

POST http://localhost:3000/customers

Error Responses

The following error responses may be returned:
 
Status Code  Response	                   Description
400          All fields are required       Missing a required field in the body
400          City or company not found     The city or company does not exist
404          Customer not found            A customer with the ID was not found


///////////////////////////////////////////////////////////////////////////////////



 
 
 
