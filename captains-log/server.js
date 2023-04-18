require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const fs = require('fs').promises

const connectToDB = require('./config/db')
const Log = require('./models/Log')

const PORT = 3000
const app = express()

// Templating engine setup
app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Middleware
app.use(express.urlencoded({ extended: false }))

// look for query parameter of _method to determine HTTP method
app.use(methodOverride('_method'))

app.get('/', (req, res) =>
{
    res.redirect('/logs')
})



app.get('*', (req, res) =>
{
    res.render('404')
})



app.listen(PORT, () =>
{
    connectToDB()
    console.log(`Listening on port ${PORT}`)
})