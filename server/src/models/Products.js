const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: String,
    precio_base: Number,
    existencia: Number,
});

productSchema.statics.findProductsInStock = async function () {
    return this.find({ existencia: { $gt: 0 } });
};

const Product = mongoose.model('Product', productSchema);

module.exports = Product;