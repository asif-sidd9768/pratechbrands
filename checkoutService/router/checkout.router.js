const catchAsync = require("../../middleware/catchAsync")
const auth = require("../../middleware/isAuthenticated")
const { checkoutOrder } = require("../controller/checkout.controller")

const checkoutRouter = require("express").Router()

checkoutRouter.post("/", auth, catchAsync(checkoutOrder))

module.exports = checkoutRouter