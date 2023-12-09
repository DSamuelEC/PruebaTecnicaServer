// Import the Express library to manage routes
const routerProducts = require('express').Router();

// Import the controller that will handle the route logic
const getProducts = require('../controllers/getProducts');

// Set up a GET route to obtain products in stock
routerProducts.get('/', getProducts);

// Exports the configured router for use in other parts of the application
module.exports = routerProducts;