const ExpressError = require("../../middleware/ExpressError");
const Product = require("../model/Product");
const getCategoryFilter = require("../utils/getCategoryFilter");
const getProductsAndPagination = require("../utils/getProductsAndPagination");

const getProducts = async (req, res) => {
  const page = parseInt(req.query.page);
  const categoryFilter = await getCategoryFilter(req);
  const result = await getProductsAndPagination(categoryFilter, page);

  res.json(result);
}

const createProduct = async (req, res) => {
  const {
    title,
    price,
    category,
    description
  } = req.body;

  // Validate required fields
  if (!title || !price || !category || !description) {
    throw new ExpressError('Name, price, Description and category are required fields', 400);
  }
  
  // Create a new product
  const newProduct = new Product({
    title,
    price,
    category,
    description
  });

  // Save the new product to the database
  const savedProduct = await newProduct.save();

  res.status(201).json({message: "Successfully created a product", product: savedProduct});
}

module.exports = {
  getProducts,
  createProduct
}