const Product = require("../models/productModel");
const sendResponse = require("../utilities/sendResponse");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) {
      return sendResponse(res, 404, false, null, "Product not found");
    }
    return sendResponse(res, 200, true, products);
  } catch (error) {
    sendResponse(res, 500, false, null, "Server error");
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    if (!product) {
      return sendResponse(res, 404, false, null, "Product not found");
    }
    return sendResponse(res, 200, true, product);
  } catch (error) {
    sendResponse(res, 500, false, null, "Server error");
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
};
