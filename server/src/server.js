// Import the libraries and files such as the router, which is necessary to start the server and make it work
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/index');
const server = express();

// Configuring Morgan middleware for HTTP request logging
server.use(morgan("dev"));

// Middleware to process JSON data in requests
server.use(express.json());

// Middleware to enable CORS (Cross-Origin Resource Sharing) and Middleware to configure CORS headers
server.use(cors());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    next()
});

// Use the main router to handle routes
server.use('/', router);

// Export the configured server
module.exports = server;