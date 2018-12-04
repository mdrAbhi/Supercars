/**
 * Product schema to store product details by using mongoose 
 * @author Badisa, Sairam
 */
const mongoose = require('mongoose')
const orderLineItemSchema = new mongoose.Schema({
 
  _id: { 
    type: Number, required: true 
  },
  orderID: {
    type: Number,
    required: true
  },
  lotNumber: {
    type: Number,
    required: true,
    default: 1,
  },
  productKey: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true, 
    default: 1
  }

})
module.exports = mongoose.model('orderLineItem', orderLineItemSchema)