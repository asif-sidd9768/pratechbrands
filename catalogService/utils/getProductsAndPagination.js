const ExpressError = require("../../middleware/ExpressError");
const Product = require("../model/Product");

const PAGE_SIZE = 10; // Adjust the page size as needed

const getProductsAndPagination = async (categoryFilter, page) => {
  const skip = page ? (page - 1) * PAGE_SIZE : 0; // Skip is 0 if page is not provided
  const query = categoryFilter ? { category: categoryFilter } : {};

  const totalProducts = await Product.countDocuments(query);
  const totalPages = page ? Math.ceil(totalProducts / PAGE_SIZE) : 1
  if (page && (page < 1 || page > totalPages)) {
    throw new ExpressError('Page not found', 404);
  }

  let productsQuery = Product.find(query);

  if (page) {
    productsQuery = productsQuery.skip(skip).limit(PAGE_SIZE);
  }
  const products = await productsQuery;

  const nextPage = page && (skip + PAGE_SIZE) < totalProducts ? page + 1 : null;
  const prevPage = page && page > 1 ? page - 1 : null;

  return {
    products,
    pagination: {
      currentPage: page || 1,
      nextPage,
      prevPage,
      totalPages,
      totalProducts,
    },
  };
}

module.exports = getProductsAndPagination