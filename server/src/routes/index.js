const { Router } = require("express");
const routerProducts = require("./product");
const routerPrices = require("./prices");
const router = Router();

router.use('/products', routerProducts);
router.use('/price', routerPrices);

module.exports = router;