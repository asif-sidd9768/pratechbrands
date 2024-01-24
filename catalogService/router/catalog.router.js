
const catchAsync = require("../../middleware/catchAsync")
const auth = require("../../middleware/isAuthenticated")
const { getProducts, createProduct, getAllCategories } = require("../controller/catalog.controller")

const catalogRouter = require("express").Router()

catalogRouter.get("/", catchAsync(getProducts))
catalogRouter.post("/", auth, catchAsync(createProduct))
catalogRouter.get("/categories", catchAsync(getAllCategories))

module.exports = catalogRouter