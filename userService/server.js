require("dotenv").config()
const express = require("express")
const userRouter = require("./router/userRouter")
const connectDB = require("./db/db.connection")
const ExpressError = require("./utils/expressError")
const {connectToRabbitMQ} = require("./utils/messageBroker")
const userQueueHandlers = require("./utils/userQueues");
const app = express()
const port = process.env.PORT || 3000

connectDB()

app.use(express.json())

app.use("/api/users", userRouter)

async function setupRabbitMQConsumers() {
  channel = await connectToRabbitMQ();
  channel.consume("user-service-queue", (data) => userQueueHandlers.handleUserServiceQueue(data, channel));
  channel.consume("user_product_remove-queue", (data) => userQueueHandlers.handleUserProductRemoveQueue(data, channel));
  channel.consume("user_product_quantity_queue", (data) => userQueueHandlers.handleUserProductQuantityQueue(data, channel));
  channel.consume("user_detail_queue", (data) => userQueueHandlers.handleUserDetailQueue(data, channel));
  channel.consume("user_cart_clear_queue", (data) => userQueueHandlers.handleUserCartClearQueue(data, channel));
}

setupRabbitMQConsumers().then((channel) => {
  // console.log(channel)

  app.use((err, req, res, next) => {
    if (err instanceof ExpressError) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    next(err);
  });

  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  });
});