/** 
*  Customer model
* @author Aarjap Piya <s528372@nwmissouri.edu>
*/

//  <https://mongoosejs.com/> 
const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  email: {
    type: String,
    required: true,
    unique: true
  },
  family: {
    type: String,
    required: true,
    default: 'Family'
  },
  given: {
    type: String,
    required: true,
    default: 'Given'
  },
  street1: {
    type: String,
    required: true,
    default: 'Street 1'
  },
  street2: {
    type: String,
    required: false,
    default: ''
  },
  city: {
    type: String,
    required: true,
    default: 'Maryville'
  },
  state: {
    type: String,
    required: true,
    default: 'MO'
  },
  zip: {
    type: String,
    required: true,
    default: '64468'
  },
  country: {
    type: String,
    required: true,
    default: 'USA'
  }
  


})
module.exports = mongoose.model('Customer', CustomerSchema)