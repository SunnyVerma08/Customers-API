// Import required modules
const express = require('express');
// const bodyParser = require('body-parser');
const fs = require('fs');

// Initialize the Express app
const app = express();
// Use express.json middleware to parse incoming JSON payloads
app.use(express.json());

// Read the customers.json file and parse it as a JSON object
const data = JSON.parse(fs.readFileSync('customers.json', 'utf8'));

// Define a route for GET requests to /customers
// This route supports filtering by first_name, last_name, and city,
// and supports pagination using page and limit query parameters
app.get('/customers', (req, res) => {
  const { first_name, last_name, city, page = 1, limit = 10 } = req.query;

  let filteredData = data;

  // Filter by first_name if provided
  if (first_name)
    filteredData = filteredData.filter(
      (customer) =>
        customer.first_name.toLowerCase() === first_name.toLowerCase()
    );
  // Filter by last_name if provided
  if (last_name)
    filteredData = filteredData.filter(
      (customer) => customer.last_name.toLowerCase() === last_name.toLowerCase()
    );
  // Filter by city if provided
  if (city)
    filteredData = filteredData.filter(
      (customer) => customer.city.toLowerCase() === city.toLowerCase()
    );

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  // Send paginated and filtered results
  res.send(filteredData.slice(startIndex, endIndex));
});

// Define a route for GET requests to /customers/:id
// This route returns the customer with the specified ID
app.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  const customer = data.find((c) => c.id === parseInt(id));
  if (!customer) return res.status(404).send('Customer not found');
  res.json(customer);
});

// Define a route for GET requests to /cities
// This route returns a JSON object containing the count of customers for each city
app.get('/cities', (req, res) => {
  const cities = data.reduce((acc, curr) => {
    if (!acc[curr.city]) acc[curr.city] = 0;
    acc[curr.city]++;
    return acc;
  }, {});
  res.json(cities);
});

// Define a route for POST requests to /customers
// This route adds a new customer to the data
app.post('/customers', (req, res) => {
  const { first_name, last_name, city, company } = req.body;

  // Validate that all required fields are provided
  if (!first_name || !last_name || !city || !company) {
    return res.status(400).send('All fields are required');
  }

  // Check if the city and company exist in the current data
  const existingCity = data.some((customer) => customer.city === city);
  const existingCompany = data.some((customer) => customer.company === company);

  // If either city or company does not exist, return an error
  if (!existingCity || !existingCompany) {
    return res.status(400).send('City or company not found');
  }

  // Generate a new ID for the customer that is 1 higher than the highest ID in the data
  const highestId = Math.max(...data.map((customer) => customer.id));
  const newId = highestId + 1;

  // Create a new customer object and add it to the data
  const newCustomer = { id: newId, ...req.body };
  data.push(newCustomer);

  // Update the customers.json file with the new data
  fs.writeFileSync('customers.json', JSON.stringify(data));
  // Send the newly created customer object with a 201 status code
  res.status(201).json(newCustomer);
});

// Set the port for the app to listen on
const PORT = process.env.PORT || 3000;
// Start the app and listen for incoming requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
