const { Router } = require("express");
const routerProducts = require("./product");
const router = Router();

router.use('/products', routerProducts)

module.exports = router;

// const { Router } = require("express");
// const routerProducts = require("./product"); // Ajusta el nombre de la importación
// const router = Router();

// router.use('/products', routerProducts); // Ajusta el nombre del router

// module.exports = router;
