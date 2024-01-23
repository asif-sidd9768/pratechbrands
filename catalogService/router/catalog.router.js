
const catchAsync = require("../../middleware/catchAsync")
const { getProducts, createProduct } = require("../controller/catalog.controller")

const catalogRouter = require("express").Router()

catalogRouter.get("/", catchAsync(getProducts))
catalogRouter.post("/", catchAsync(createProduct))

module.exports = catalogRouter