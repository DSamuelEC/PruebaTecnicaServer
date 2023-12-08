const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  nombre: String,
  metadata: {
    precios_especiales: [
      {
        nombre_producto: String,
        precio_especial_personal: Number,
      },
    ],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;