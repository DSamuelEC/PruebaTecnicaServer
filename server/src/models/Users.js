// Import the mongoose module for creating models and schematics
const mongoose = require('mongoose');

// Defines the schema for the user model
const userSchema = new mongoose.Schema({
  id: Number, // User ID
  nombre: String, // User name
  metadata: {
    precios_especiales: [
      {
        nombre_producto: String, // Product name with special price
        precio_especial_personal: Number, // Special custom price for the product
      },
    ],
  },
});

// Create the 'User' model using the defined schema
const User = mongoose.model('User', userSchema);

// Export the model for use in other parts of the application
module.exports = User;