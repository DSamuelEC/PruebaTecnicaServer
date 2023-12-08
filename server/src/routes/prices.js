const routerPrices = require('express').Router();
const getPrices = require('../controllers/getPrices');

routerPrices.get('/:user_Id/:product_Name', getPrices);

module.exports = routerPrices;