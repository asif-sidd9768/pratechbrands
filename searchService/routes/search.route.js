const { addProductToIndice, searchProduct } = require("../controller/search.contrller")

const searchRouter = require("express").Router()

searchRouter.get("/search", searchProduct)
searchRouter.post("/add", addProductToIndice)

module.exports = searchRouter