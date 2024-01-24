const auth = require("../../middleware/isAuthenticated")
const { signup, login, getUserById, retrieveUserOrders } = require("../controller/userController")
const catchAsync = require("../utils/catchAsync")
const ExpressError = require("../utils/expressError")
const messageBroker = require("../utils/messageBroker")

const userRouter = require("express").Router()

userRouter.post("/signup", catchAsync(signup))
userRouter.post("/login", catchAsync(login))
userRouter.get("/orders", auth, catchAsync(retrieveUserOrders))
userRouter.get("/:userId", catchAsync(getUserById))

module.exports = userRouter