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
    Flight.find()
        .then((flights) =>
        {
            res.render('flights/user/Index', { flights: { data: flights, error: false } })
        })
        .catch((err) =>
        {
            res.render('flights/user/Index', { flights: { data: [], error: true } })
        })
})

app.get('/flights/new', (req, res) =>
{
    res.render('flights/user/New', { now: new Date().toISOString().slice(0, 16) })
})

app.post('/flights', (req, res) =>
{
    if (req.body.departs)
    {
        req.body.departs = new Date(req.body.departs)
    }

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