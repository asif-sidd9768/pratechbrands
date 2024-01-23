require("dotenv").config()
const express = require("express")
const connectDB = require("./db/db.connection")
const checkoutRouter = require("./router/checkout.router")
const ExpressError = require("../middleware/ExpressError")
const messageBroker = require("./utils/messageBroker")
const app = express()
const port = process.env.PORT || 3003

connectDB()
messageBroker.connect()
app.use(express.json())

app.use("/api/checkout", checkoutRouter)

app.use((err, req, res, next) => {
  if (err instanceof ExpressError) {
    console.log("INSIDDE ERR of ERRR")
    return res.status(err.statusCode).json({ error: err.message });
  }
  next(err);
});

app.listen(port, () => {
  console.log(`LISTENING Checkout Service on Port ${port}`)
})