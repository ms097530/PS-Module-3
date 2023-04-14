require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')

const connectToDB = require('./config/db')

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

app.get('/logs', (req, res) =>
{
    res.send('LOGS')
})

app.get('/logs/new', (req, res) =>
{
    res.render('logs/New')
})

app.post('/logs', (req, res) =>
{
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false

    res.send(req.body)
})

app.get('*', (req, res) =>
{
    res.send('FALLBACK ROUTE')
})

app.listen(PORT, () =>
{
    connectToDB()
    console.log(`Listening on port ${PORT}`)
})