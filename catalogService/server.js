require("dotenv").config()
const express = require("express")
const connectDB = require("./db/db.connection")
const catalogRouter = require("./router/catalog.router")
const ExpressError = require("../middleware/ExpressError")
const messageBroker = require("./utils/messageBroker")
const amqp = require("amqplib")
const Product = require("./model/Product")
const app = express()
const port = process.env.PORT || 3001

connectDB()
messageBroker.connect()

app.use(express.json())
var channel, connection;

async function connectToRabbitMQ() {
  const amqpServer = "amqp://guest:guest@localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("products_costing_queue");
  console.log("COONECTED TO RABBITMQ")
}

connectToRabbitMQ().then( () => {
  channel.consume("products_costing_queue", async (data) => {
    const {cartData} = JSON.parse(data.content)
    const productBilling = await findProductsAndCalculateTotal(cartData)
    channel.ack(data)
    channel.sendToQueue("checkout_product_costing_queue", Buffer.from(JSON.stringify(productBilling)))
  });
});

const findProductsAndCalculateTotal = async (cartData) => {
  const productIds = cartData.map(product => product.productId)
  const products = await Product.find({ _id: { $in: productIds } });
  const productsData = cartData.map(cartItem => {
    const product = products.find(p => p._id.toString() === cartItem.productId.toString());
    if (product) {
      const totalCost = product.price * cartItem.quantity;
      return { product, totalCost };
    }
    return { product: null, totalCost: 0 };
  });
  const grandTotal = productsData.reduce((acc, cost) => acc + cost.totalCost, 0);
  return {productsData, grandTotal};
}


app.use("/api/catalog", catalogRouter)

app.use((err, req, res, next) => {
  // Check if the error is an instance of ExpressError
  if (err instanceof ExpressError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  next(err);
});

app.listen(port, () => {
  console.log(`Listening catalog service on PORT ${port}`)
})