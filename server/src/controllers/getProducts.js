const Product = require('../models/Products');

const getProducts = async (req, res) => {
    try {
        const products = await Product.findProductsInStock();
        console.log('este es el products', products);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener productos en stock' });
    }
}

module.exports = getProducts;