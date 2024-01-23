const products = require("./DATA");

const prods = products.map(product => {
  const {_id, ...prod} = product
  return prod
})

console.log(prods)