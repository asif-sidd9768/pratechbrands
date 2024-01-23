const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  products: [
    {
      product: {},
      totalCost: {
        type: Number
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['Placed', 'Processing', 'Shipped', 'Delivered'],
    default: 'Placed',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
