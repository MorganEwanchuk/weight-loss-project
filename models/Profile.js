
const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    startingWeight: {
        type: String, unique: true
    },
    weightLostPerWeek:{
        type: String, unique: true
    },
    goalWeight: {
        type: String, unique: true
    },
})


  
  
  module.exports = mongoose.model('Profile', ProfileSchema)
  