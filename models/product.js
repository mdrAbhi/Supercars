const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  productKey: {
    type: String,
    required: true,
    unique: true,
    default: 'product'
  },
  description: {
    type: String,
    required: true,
    default: 'description'
  },
  image:{
      type:Buffer,
      required:false,
  },
  unitPrice: {
    type: Number,
    required: true,
    default: 10000,
    min: 3000,
    max: 10000000,
  }
})
module.exports = mongoose.model('Product', ProductSchema)