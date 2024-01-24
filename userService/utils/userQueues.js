// userQueue.js
const User = require("../model/User");
const { addProductToUserCart, removeProductFromCart, changeProductQuantity, findUserDetail } = require("./cart.utils");

async function handleUserServiceQueue(data, channel) {
  try {
    const { productId, userId } = JSON.parse(data.content);
    const updatedCart = await addProductToUserCart(productId, userId);
    channel.ack(data);
    channel.sendToQueue("cart-service-queue", Buffer.from(JSON.stringify(updatedCart)));
  } catch (error) {
    console.error('Error handling user-service-queue:', error);
  }
}

async function handleUserProductRemoveQueue(data, channel) {
  try {
    const { productId, userId } = JSON.parse(data.content);
    const updatedCart = await removeProductFromCart(productId, userId);
    channel.ack(data);
    channel.sendToQueue("cart_product_remove_queue", Buffer.from(JSON.stringify(updatedCart)));
  } catch (error) {
    console.error('Error handling user_product_remove-queue:', error);
  }
}

async function handleUserProductQuantityQueue(data, channel) {
  try {
    const { productId, type, userId } = JSON.parse(data.content);
    const updatedCart = await changeProductQuantity(productId, userId, type);
    channel.ack(data);
    channel.sendToQueue("cart_product_quantity_queue", Buffer.from(JSON.stringify(updatedCart)));
  } catch (error) {
    console.error('Error handling user_product_quantity_queue:', error);
  }
}

async function handleUserDetailQueue(data, channel) {
  try {
    const { userId } = JSON.parse(data.content);
    const userData = await findUserDetail(userId);
    channel.ack(data);
    channel.sendToQueue("checkout_user_detail_queue", Buffer.from(JSON.stringify(userData)));
  } catch (error) {
    console.error('Error handling user_detail_queue:', error);
  }
}

async function handleUserCartClearQueue(data, channel) {
  try {
    const { userId } = JSON.parse(data.content);
    const user = await User.findById(userId);
    user.cart = undefined;
    await user.save();
    channel.ack(data);
  } catch (error) {
    console.error('Error handling user_cart_clear_queue:', error);
  }
}

module.exports = {
  handleUserServiceQueue,
  handleUserProductRemoveQueue,
  handleUserProductQuantityQueue,
  handleUserDetailQueue,
  handleUserCartClearQueue,
};
