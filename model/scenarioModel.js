const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
      Email: {
        type: "String",
        unique:true,
        required: [true,'Please enter email']
      },
      Password: {
        type: "String",
        required: [true,'Please enter password']
      }
})
module.exports = mongoose.model('user',userSchema)