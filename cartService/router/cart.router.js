const amqp = require("amqplib");
const catchAsync = require("../../middleware/catchAsync")
const { addToCart, removeProductFromCart, changeProductQuantity } = require("../controller/cart.controller");
const auth = require("../../middleware/isAuthenticated");

const cartRouter = require("express").Router()

cartRouter.post("/add/:productId", auth, catchAsync(addToCart))
cartRouter.post("/remove/:productId", auth, catchAsync(removeProductFromCart))
cartRouter.post("/quantity/:productId", auth, catchAsync(changeProductQuantity))

module.exports = cartRouter