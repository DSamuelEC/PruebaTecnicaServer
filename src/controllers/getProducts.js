const Product = require('../models/Products');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findProductsInStock();
        console.log('este es el products', products);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.json({ message: 'Error al obtener productos en stock' });
    }
}

module.exports = getProducts;
//.status(200)
//.status(500)