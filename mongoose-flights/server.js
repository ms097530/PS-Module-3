// Packages
require('dotenv').config()
const express = require('express')
// Util
const connectToDB = require('./config/db')
// Models
const Flight = require('./models/Flight')

const PORT = 3000
const app = express()

// set view engine for SSR
app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

// Middleware
app.use(express.urlencoded({ extended: false }))

// Routing
app.get('/', (req, res) =>
{
    res.redirect('/flights')
})

app.get('/flights', (req, res) =>
{
    res.render('flights/user/Index')
})

app.get('/flights/new', (req, res) =>
{
    res.render('flights/user/New')
})

app.post('/flights', (req, res) =>
{
    console.log(req.body)
    Flight.create(req.body)
        .then((flight) =>
        {
            console.log(flight)
            return res.redirect('/flights')
        })
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