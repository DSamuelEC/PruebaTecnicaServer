// Import the mongoose module for creating models and schematics
const mongoose = require('mongoose');

// Defines the schema for the product model
const productSchema = new mongoose.Schema({
    nombre: String, // Product name
    precio_base: Number, // Base price of the product
    existencia: Number, // Quantity in stock of the product
});

// Add a static method to the model to search for products with stock greater than zero
productSchema.statics.findProductsInStock = async function () {
    return this.find({ existencia: { $gt: 0 } });
};

// Create the 'Product' model using the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the model for use in other parts of the application
module.exports = Product;