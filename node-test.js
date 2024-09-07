// Import required modules
const express = require('express');
const mysql = require('mysql');
const path = require('path'); // Import the path module

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'carhub'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Create Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch all cars from the database
app.get('/cars', (req, res) => {
    const sql = 'SELECT * FROM cars';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching cars:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(result);
        }
    });
});

// Serve node-test.html for the root URL
app.get('/', (req, res) => {
    const filePath = 'C:\\Users\\Deepak\\OneDrive\\Desktop\\carhub\\public\\node-test.html';
    console.log('Resolved file path:', filePath);
    res.sendFile(filePath);
});

// Route handler to serve node-test-details.html
app.get('/node-test-details.html', (req, res) => {
    const filePath = 'C:\\Users\\Deepak\\OneDrive\\Desktop\\carhub\\public\\node-test-details.html';
    console.log('Resolved file path:', filePath);
    res.sendFile(filePath);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
