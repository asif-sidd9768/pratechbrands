require("dotenv").config()
const express = require("express")
const ExpressError = require("../middleware/ExpressError")
const cartRouter = require("./router/cart.router")
const messageBroker = require("./utils/messageBroker")
const port = process.env.PORT || 3002
const app = express()

app.use(express.json())

app.use("/api/cart", cartRouter)
messageBroker.connect()

app.use((err, req, res, next) => {
  // Check if the error is an instance of ExpressError
  console.log(err)
  if (err instanceof ExpressError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  // Handle other types of errors or pass to the default error handler
  next(err);
});


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})