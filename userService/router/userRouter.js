const { signup, login, getUserById } = require("../controller/userController")
const catchAsync = require("../utils/catchAsync")
const ExpressError = require("../utils/expressError")
const messageBroker = require("../utils/messageBroker")

const userRouter = require("express").Router()

userRouter.post("/signup", catchAsync(signup))
userRouter.post("/login", catchAsync(login))
userRouter.get("/:userId", catchAsync(getUserById))

module.exports = userRouter