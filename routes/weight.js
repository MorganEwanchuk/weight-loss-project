const express = require('express')
const router = express.Router()
const weightController = require('../controllers/addweight')


router.get('/', weightController.renderAddWeight)

module.exports = router