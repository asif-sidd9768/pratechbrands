const { createOrder } = require("../utils/checkout.utils")
const messageBroker = require("../utils/messageBroker")

let orderDetailOutside

const USER_DETAIL_QUEUE = "user_detail_queue";
const CHECKOUT_USER_DETAIL_QUEUE = "checkout_user_detail_queue";
const PRODUCT_COSTING_QUEUE = "products_costing_queue";
const CHECKOUT_PRODUCT_COSTING_QUEUE = "checkout_product_costing_queue";
const USER_CART_CLEAR_QUEUE = "user_cart_clear_queue"

const checkoutOrder = async (req, res) => {
  const {userId} = req.user
  let orderDetail
  await messageBroker.publishMessage(USER_DETAIL_QUEUE, {
    userId
  })
  await messageBroker.consumeMessage(CHECKOUT_USER_DETAIL_QUEUE, async (userData) => {
    await messageBroker.publishMessage(PRODUCT_COSTING_QUEUE, {cartData: userData.cart})
  })

  await messageBroker.consumeMessage(CHECKOUT_PRODUCT_COSTING_QUEUE, async ({productsData, grandTotal}) => {
    orderDetail = await createOrder(userId, productsData, grandTotal)
    orderDetailOutside = orderDetail
    await messageBroker.publishMessage(USER_CART_CLEAR_QUEUE, {userId})
  })

  while (!orderDetail) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // wait for 1 second before checking status again
    orderDetail = orderDetailOutside
  }

  return res.status(200).json({message: "Successfully completed the order", order: orderDetail})
}

module.exports = {
  checkoutOrder
}