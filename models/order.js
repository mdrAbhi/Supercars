/** 
*  Order model
* @author Sagar Tiwari <s527999@nwmissouri.edu>

*/

// see <https://mongoosejs.com/> for more information
const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({

  _id: { 
    type: Number, 
    required: true 
  },
/*   orderID: {
    type: Number,
    required: true,
    unique: true,
    default: 100
  }, */
  email: {
    type: String,
    required: true
  },
  datePlaced: {
    type: Date,
    required: true,
    default: Date.now()
  },
  datetobetaken:{
    type:Date,
    required:true,
  },
  paymentType: {
    type: String,
    enum: ['not selected yet', 'credit card', 'cash', 'check'],
    required: true,
    default: 'not selected yet'
  },
  paid: {
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('Order', OrderSchema)
