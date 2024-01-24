const User = require("../model/User")

const addProductToUserCart = async (newProductId, userId) => {
  const user = await User.findById(userId)
  if(user.cart){
    const isProductExist = user.cart.find(({productId}) => productId === newProductId )
    if(isProductExist){
      user.cart = user.cart.map(product => product.productId === newProductId ? ({...product, quantity: product.quantity+1}) : product)
    }else {
      user.cart.push({productId:newProductId, quantity:1})  
    }
  }else{
    user.cart = []
    user.cart.push({productId:newProductId, quantity:1})
  }
  await user.save()
  return user.cart
}

const removeProductFromCart = async (productToRemoveId,  userId) => {
  const user = await User.findById(userId)
  const isProductExists = user.cart.find(({productId}) => productId === productToRemoveId)
  if(!isProductExists){
    throw new ExpressError("Product is not in cart", 404)
  }
  user.cart = user.cart.filter(({productId}) => productId !== productToRemoveId)
  await user.save()
  return user.cart
}

const changeProductQuantity = async (productToUpdate, userId, type) => {
  const user = await User.findById(userId)
  const isProductExists = user.cart.find(({productId}) => productId === productToUpdate)
  if(!isProductExists){
    throw new ExpressError("Product is not in cart", 404)
  }
  user.cart = user.cart.map(product => {
    if (type === "increment") {
      return product.productId === productToUpdate
        ? { ...product, quantity: product.quantity + 1 }
        : product;
    } else if (type === "decrement") {
      if (product.productId === productToUpdate) {
        // Check if the quantity is already 1
        if (product.quantity === 1) {
          // If quantity is 1, remove the product
          return null; // returning null will remove the product from the array
        } else {
          // If quantity is more than 1, decrement the quantity
          return { ...product, quantity: product.quantity - 1 };
        }
      } else {
        return product;
      }
    } else {
      // Handle other cases if needed
      return product;
    }
  }).filter(Boolean);
  await user.save()
  return user.cart
}

const findUserDetail = async (userId) => {
  const user = await User.findById(userId)
  return user
}

module.exports = {
  addProductToUserCart, 
  removeProductFromCart,
  changeProductQuantity,
  findUserDetail
}