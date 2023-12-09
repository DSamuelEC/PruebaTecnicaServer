// Import the user and product model that are defined in another file
const User = require('../models/Users');
const Product = require('../models/Products');

// Defines the handler for the path GET /price/:user_Id/:product_Name
const getPrices = async (req, res) => {
    try {
        // Get the URL parameters
        const { user_Id, product_Name } = req.params;

        // Finds the user by its ID and the product by its name, 
        // if either does not exist (that is, it was not found) returns a corresponding error
        const user = await User.findOne({ id: parseInt(user_Id) });

        if (!user) return res.status(404).json({ message: 'Usuario no encontrado, verifique el id de usuario' });

        const product = await Product.findOne({ nombre: product_Name });

        if (!product) return res.status(404).json({ message: 'Producto no encontrado, verifique el nombre del producto' });

        // Search for a special custom price for the product in the user's metadata
        const specialPrice = user.metadata.precios_especiales.find(
            (sPrice) => sPrice.nombre_producto === product_Name
        );

        // Returns the personal special price if it exists, otherwise returns the base price of the product
        const finalPrice = specialPrice
            ? `Si tiene precio especial! El precio base es de: ${product.precio_base} pero su precio es: ${specialPrice.precio_especial_personal}`
            : `No tiene precio especial, su precio base es: ${product.precio_base}`;

        res.status(200).json({ precio: finalPrice });
    } catch (error) {
        // Handle errors and send a response with an error message
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el precio especial' });
    }
};

// Exports the controller function for use in other parts of the application
module.exports = getPrices;