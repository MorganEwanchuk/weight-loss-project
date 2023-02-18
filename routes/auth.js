const express = require('express')
const passport = require('passport')
const router = express.Router()


router.get('/logout', (req,res) =>{
    req.logout(function(err){
        if(err){
            console.error(err)
        }else{
            res.redirect('/')
        }
    })
})

module.exports = router