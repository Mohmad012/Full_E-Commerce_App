const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    category: { type: String, required: true },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, required: true },
    discountPercentage: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    images: { type: Array },
    brand: { type: String, required: true },
  },
  {
    timestamps: true, // to add time for each Product is created
  }
);

module.exports = mongoose.model("Product", ProductSchema);
