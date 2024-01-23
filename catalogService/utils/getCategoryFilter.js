const ExpressError = require("../../middleware/ExpressError");
const Product = require("../model/Product");

const getCategoryFilter = async (req) => {
  const categoryFilter = req.query.category || null;
  if (categoryFilter) {
    const categoryExists = await Product.exists({ category: categoryFilter });
    if (!categoryExists) {
      throw new ExpressError('Category not found', 404);
    }
  }
  return categoryFilter || null; // Return null if no category filter is provided
}

module.exports = getCategoryFilter