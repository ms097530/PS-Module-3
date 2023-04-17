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

/**
 * * INDEX ROUTE
 */
app.get('/logs', (req, res) =>
{
    Log.find((err, foundLogs) =>
    {
        if (err || !foundLogs)
        {
            return res.status(404).redirect('/404')
        }
        return res.render('logs/Index', { logs: foundLogs })
    })
})

/**
 * * NEW FORM ROUTE
 */
app.get('/logs/new', (req, res) =>
{
    res.render('logs/New')
})

/**
 * * CREATE ROUTE
 */
app.post('/logs', (req, res) =>
{
    req.body.shipIsBroken = req.body.shipIsBroken === 'on' ? true : false

    Log.create(req.body)
        .then((log) =>
        {
            if (err || !log)
            {
                return res.status(404).redirect('/404')
            }

            res.redirect('/logs')
        })
})

/**
 * * SHOW ROUTE
 */
app.get('/logs/:id', (req, res) =>
{
    Log.findById(req.params.id, (err, foundLog) =>
    {
        if (err || !foundLog)
        {
            return res.redirect('/404')
        }
        return res.render('logs/Show', { log: foundLog })
    })
})

/**
 * * SEED ROUTE
 */
app.get('/logs/seed', async (req, res) =>
{
    // using readFile from fs promises
    const buf = await fs.readFile('./seed/data.json')
    // console.log(buf.toString())
    // convert buffer to string and parse the JSON to usable data
    const seedData = JSON.parse(buf.toString())
    const result = await Log.insertMany(seedData)
    console.log(result)
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