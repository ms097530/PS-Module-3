require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// Data
const fruits = require('./models/fruits')
const Fruit = require('./models/Fruit')

const PORT = 3000
const mongoURI = process.env.MONGO_URI
const app = express()

// configure view engine
app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())



app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) =>
{
    console.log('I run for all routes')
    next()
})

/**
 * *  URL               HTTP Verb   Action      Used For
 *    /fruits           GET         index       display list of all photos
 *    /fruits/new       GET         new         display form for creating new fruit
 *    /fruits           POST        create      create new fruit
 *    /fruits/:id       GET         show        display specific fruit
 *    /fruits/:id/edit  GET         edit        display form for editing fruit
 *    /fruits/:id       PATCH/PUT   update      update a specific fruit
 *    /fruits/:id       DELETE      destroy     delete a specific fruit
 */

app.get('/', (req, res) =>
{
    res.send('<h1>Fruits Store</h1><a href="/fruits">To Store</a>')
})

/**
 * Index Route: return a list of fruits
 */
app.get('/fruits', (req, res) =>
{
    // * Can use "find" method multiple ways
    Fruit.find((err, allFruits) =>
    {
        if (err || !allFruits)
        {
            return res.redirect('/404')
        }
        res.render('fruits/Index', { fruits: allFruits, title: 'Fruits Home' })
    })
    // Fruit.find({}).then(val =>
    // {
    //     res.render('fruits/Index', { fruits: val })
    // })
})

/**
 * New Route: return form to create new fruit
 */
app.get('/fruits/new', (req, res) =>
{
    res.render('fruits/New', { title: 'Add a fruit' })
})

/**
 * Create Route: add new fruit to data 
*/
app.post('fruits', async (req, res) =>
{
    if (req.body.readyToEat === 'on')
    // value from checkbox will be 'on' or won't send any value
    // we only care about true or false, so set data accordingly and add to fruits
    {
        req.body.readyToEat = true
    }
    else
    {
        req.body.readyToEat = false
    }

    Fruit.create(req.body, (err, createdFruit) =>
    {
        if (err || !createdFruit)
        {
            return res.redirect('/404')
        }
        res.redirect('/fruits')
    })
})

/**
 * Show Route: returns a single fruit
*/
app.get('/fruits/:id', (req, res) =>
{
    const { id } = req.params

    Fruit.findById(id, (err, foundFruit) =>
    {
        if (err || !foundFruit)
        {
            return res.redirect('/404')
        }
        res.render('fruits/Show', { fruit: foundFruit, title: foundFruit.name })
    })
})

// fallback route
app.get('*', (req, res) =>
{
    res.status(404).send('<h1>Not sure how you got here. Go on, git!</h1>')
})

app.listen(PORT, () =>
{
    // suppress version 7 warning message
    mongoose.set('strictQuery', false)
    // connect to MongoDB
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    // run when connection successful
    mongoose.connection.once('open', () =>
    {
        console.log('Connected to Mongo')
    })

    console.log(`Listening on port ${PORT}`)
})