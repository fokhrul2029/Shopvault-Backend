const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
      default: 0,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    salesCount: {
      type: Number,
      default: 0,
    },
    images: {
      type: [String],
      default: [],
    },
    category: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      default: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("products", productSchema);

module.exports = Product;
