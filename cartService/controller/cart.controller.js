const messageBroker = require("../utils/messageBroker");

let updatedCartOutside

const addToCart = async (req, res) => {
  const {productId} = req.params
  let updatedCart

  await messageBroker.publishMessage("user-service-queue", {
    productId,
    userId: req.user.userId,
  });

  await messageBroker.consumeMessage("cart-service-queue", async (data) => {
    updatedCart = data
    updatedCartOutside = updatedCart
  })

  while(!updatedCart){
    await new Promise(resolve => setTimeout(resolve, 1000));
    updatedCart = updatedCartOutside
  }

  return res.status(200).json({message: "successfully updated the cart", cart: updatedCart})
}

const removeProductFromCart = async (req, res) => {
  const { productId } = req.params
  await messageBroker.publishMessage("user_product_remove-queue", {
    productId, 
    userId: req.user.userId
  })
  messageBroker.consumeMessage("cart_product_remove_queue", (data) => {
    console.log(data)
  })

  return res.status(200).json({message:"Successfully removed the product"})
}

const changeProductQuantity = async (req, res) => {
  const { productId } = req.params
  const { type } = req.query

  await messageBroker.publishMessage("user_product_quantity_queue", {
    productId, 
    type,
    userId: req.user.userId
  })
  messageBroker.consumeMessage("cart_product_quantity_queue", (data) => {
    console.log(data)
  })
  res.status(200).json({message: `Successfully ${type}ed the product quantity`})
}

module.exports = {
  addToCart,
  removeProductFromCart,
  changeProductQuantity
}