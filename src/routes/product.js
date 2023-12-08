const routerProducts = require('express').Router();
const getProducts = require('../controllers/getProducts');

routerProducts.get('/', getProducts);

module.exports = routerProducts;