// Import the Express library to manage routes
const routerPrices = require('express').Router();

// Import the controller that will handle the pricing path logic
const getPrices = require('../controllers/getPrices');

// Set up a GET route to get the special price for a specific user and product
routerPrices.get('/:user_Id/:product_Name', getPrices);

// Exports the configured router for use in other parts of the application
module.exports = routerPrices;