const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bluebird = require('bluebird')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const api = require('./routes/api.route')

const uri = "mongodb+srv://adminDB:Mikgnoj@3204@cluster0-ltyrn.mongodb.net/test?retryWrites=true&w=majority"

const app = express()

const mongoose = require('mongoose')
mongoose.Promise = bluebird

mongoose.connect(uri, { useNewUrlParser: true })
    .then(data => console.log(`Successfully connected to the Mongodb Database at URL: ${uri}`))
    .catch(err => console.log(`Error connecting to the Mongodb database, ${err}`))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next()
})

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/api', api)

app.use((err, req, res, next) => {
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app