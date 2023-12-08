const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  stock: Number,
  specialPrices: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Puedes ajustar el nombre del modelo de usuario si es diferente
      },
      price: Number,
    },
  ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;