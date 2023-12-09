// Import the Express Router module to manage routes
const { Router } = require("express");

// Import specific routers for products and prices
const routerProducts = require("./product");
const routerPrices = require("./prices");

// Create an instance of the application's main Router
const router = Router();

// Set up main routes for products and prices
router.use('/products', routerProducts);
router.use('/price', routerPrices);

// Exports the configured router for use in other parts of the application
module.exports = router;