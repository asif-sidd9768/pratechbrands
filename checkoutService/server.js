require("dotenv").config()
const express = require("express")
const connectDB = require("./db/db.connection")
const checkoutRouter = require("./router/checkout.router")
const ExpressError = require("../middleware/ExpressError")
const messageBroker = require("./utils/messageBroker")
const Order = require("./model/Order")
const app = express()
const port = process.env.PORT || 3003

connectDB()

messageBroker.connect().then((channel) => {
  channel.consume("checkout_detail_queue", async (data) => {
    const userId= JSON.parse(data.content)
    const orders = await Order.find({user: userId})
    channel.ack(data)
    channel.sendToQueue("user_orders_detail_queue", Buffer.from(JSON.stringify(orders)))
  })
})

app.use(express.json())

app.use("/api/checkout", checkoutRouter)

app.use((err, req, res, next) => {
  if (err instanceof ExpressError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  next(err);
});

app.listen(port, () => {
  console.log(`LISTENING Checkout Service on Port ${port}`)
})