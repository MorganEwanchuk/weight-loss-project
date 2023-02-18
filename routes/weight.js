const express = require('express')
const router = express.Router()
const weightController = require('../controllers/addweight')
const authController = require('../controllers/auth')

router.get('/', weightController.renderAddWeight)
router.get('/logout', authController.logout)



module.exports = router