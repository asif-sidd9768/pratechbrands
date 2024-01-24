const amqp = require("amqplib")

const connectToRabbitMQ = async () => {
  const amqpServer = "amqp://guest:guest@localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("user-service-queue");
  await channel.assertQueue("user_product_remove-queue")
  await channel.assertQueue("user_product_quantity_queue")
  await channel.assertQueue("user_detail_queue")
  await channel.assertQueue("user_cart_clear_queue")
  await channel.assertQueue("user_orders_detail_queue")
  console.log("COONECTED TO RABBITMQ")
  return channel
}

module.exports = {
  connectToRabbitMQ
}