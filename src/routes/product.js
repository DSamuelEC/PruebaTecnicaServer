const routerProducts = require('express').Router();
const getProducts = require('../controllers/getProducts');

routerProducts.get('/', getProducts);

module.exports = routerProducts;

/**
const routerProducts = require('express').Router(); // Ajusta el nombre del router
const getProducts = require('../controllers/getProducts');

routerProducts.get('/', getProducts); // Usa el mismo nombre del router definido arriba

module.exports = routerProducts; // Ajusta el nombre del export

 */