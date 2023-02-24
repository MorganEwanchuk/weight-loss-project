
const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    initialWeight: {
        type: String, unique: true
    },
    weightLostPerWeek:{
        type: String, unique: true
    },
    goalWeight: {
        type: String, unique: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


  
  
  module.exports = mongoose.model('Profile', ProfileSchema)
  