const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const authController = require('../controllers/auth')

const {ensureAuth,ensureGuest} = require('../middleware/auth')


router.get('/', ensureGuest,(req,res) => {
    res.render('index')
})

// Routes for getting and posting on the login page
router.get('/login', ensureGuest, authController.getLogin)
router.post('/login', authController.postLogin)

// Route for getting the logout function
router.get('/logout', authController.logout)

// Routes for getting and posting on the signup page
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

module.exports = router