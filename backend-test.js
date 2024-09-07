const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'carhub' // Your MySQL database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Define a route to fetch car details from the database
app.get('/cars', (req, res) => {
  // Query to select all cars from the database
  const query = 'SELECT * FROM cars';

  // Execute the query
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching car details from database: ', err);
      res.status(500).json({ error: 'Error fetching car details from database' });
      return;
    }
    // Send the results (car details) as JSON response
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});