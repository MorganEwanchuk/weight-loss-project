const path = require('path')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const dotenv = require('dotenv')
const MongoStore = require('connect-mongo')(session)
const connectDB = require('./config/database')
const logger = require('morgan')
const flash = require('express-flash')
const mainRoutes = require('./routes/main')
const addWeightRoutes = require('./routes/weight')

// Load the config
require('dotenv').config({path:'./config/.env'})

require('./config/passport')(passport)
connectDB()

//Set view engine

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )



//Static folder 
app.use(express.static(path.join(__dirname, 'public')))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


//Routes
app.use('/', mainRoutes)
app.use('/addweight', addWeightRoutes)  



const PORT = process.env.PORT 
app.listen(PORT, console.log(`Server running on ${PORT}`))