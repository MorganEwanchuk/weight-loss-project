const express = require('express')
const router = express.Router()
const weightController = require('../controllers/addweight')
const authController = require('../controllers/auth')



// Get main page after logged in
router.get('/', weightController.renderAddWeight)

// Route for handling the add profile request
router.post('/addprofile', weightController.addProfile)

// Route for the logout function
router.get('/logout', authController.logout)



module.exports = router