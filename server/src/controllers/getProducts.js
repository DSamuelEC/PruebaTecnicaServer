// Import the product model that is defined in another file
const Product = require('../models/Products');

// Defines the handler for the GET /products path
const getProducts = async (req, res) => {
    try {
        // Find all products with stock greater than zero
        const products = await Product.findProductsInStock();

        // Send the response with the products found
        res.status(200).json(products);
    } catch (error) {
        // Handle errors and send a response with an error message
        console.error(error);
        res.status(500).json({ message: 'Error al obtener productos en stock' });
    }
}

// Exports the controller function for use in other parts of the application
module.exports = getProducts;