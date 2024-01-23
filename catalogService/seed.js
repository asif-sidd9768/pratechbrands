require("dotenv").config()
const mongoose = require("mongoose")
const products = require("./DATA");
const connectDB = require("./db/db.connection");
const Product = require("./model/Product");

connectDB()

products.map(async (product) => {
  const newProduct = new Product({
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category
  })

  await newProduct.save()
  console.log(newProduct)
  // mongoose.disconnect()
})

