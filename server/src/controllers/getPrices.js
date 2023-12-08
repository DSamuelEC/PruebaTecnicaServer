const User = require('../models/Users');
const Product = require('../models/Products');

const getPrices = async (req, res) => {
    try {
        const { user_Id, product_Name } = req.params;

        // Busca el usuario por id
        const user = await User.findOne({ id: parseInt(user_Id) });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado, verifique el id de usuario' });
        }

        const product = await Product.findOne({ nombre: product_Name });

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado, verifique el nombre del producto' });
        }


        // Busca un precio especial para el producto dado en la metadata del usuario
        const specialPrice = user.metadata.precios_especiales.find(
            (sPrice) => sPrice.nombre_producto === product_Name
        );

        // Devuelve el precio especial personal si existe, de lo contrario, devuelve el precio base del producto
        const finalPrice = specialPrice
            ? `Si tiene precio especial! El precio base es de: ${product.precio_base} pero su precio es: ${specialPrice.precio_especial_personal}`
            : `No tiene precio especial, su precio base es: ${product.precio_base}`; // Puedes ajustar este mensaje

        res.status(200).json({ precio: finalPrice });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el precio especial' });
    }
};

module.exports = getPrices;