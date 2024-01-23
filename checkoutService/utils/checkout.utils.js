const Order = require("../model/Order")

const createOrder = async (userId, products, grandTotal) => {
  const newOrder = await Order({
    user: userId,
    products,
    totalPrice: grandTotal
  })
  await newOrder.save()
  return newOrder
}

module.exports = {
  createOrder
}