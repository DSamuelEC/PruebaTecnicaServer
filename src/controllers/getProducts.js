const Product = require('../models/Products');

const getProducts = async (req, res) => {
    try {
        // Encuentra todos los productos con stock mayor que cero
        const products = await Product.find({ /*stock: { $gt: 0 }*/ });
        console.log('este es el products', products);
        // console.log('esquemaaaa', Product.schema.obj);
        res.json(products);
    } catch (error) {
        console.error(error);
        res.json({ message: 'Error al obtener productos en stock' });
    }
}

module.exports = getProducts;
//.status(200)
//.status(500)