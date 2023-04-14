require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
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

// * Middleware
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) =>
{
    console.log('I run for all routes')
    next()
})

// ? override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

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
 * * Index Route: return a list of fruits
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
 * * New Route: return form to create new fruit
 */
app.get('/fruits/new', (req, res) =>
{
    res.render('fruits/New', { title: 'Add a fruit' })
})

/**
 * * Create Route: add new fruit to data 
*/
app.post('/fruits', async (req, res) =>
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
 * * Show Route: returns a single fruit
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

/**
 * * Edit Routes: show form for editing and handle a put request
*/
app.get('/fruits/:id/edit', (req, res) =>
{
    Fruit.findById(req.params.id, (err, foundFruit) =>
    {
        if (err || !foundFruit)
        {
            return res.status(404).redirect('/404')
        }
        return res.render('fruits/Edit', { fruit: foundFruit, title: `Edit ${foundFruit.name}` })
    })
})

app.put('/fruits/:id', (req, res) =>
{
    console.log(req.body)

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

    // * NOTE: first argument: id to match with
    // *      second argument: what to use to update match
    // *       third argument: callback function
    Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFruit) =>
    {
        if (err || !updatedFruit)
        {
            return res.status(404).redirect('/404')
        }
        // * shows unupdated value without {new: true} option
        // console.log(updatedFruit)
        return res.redirect(`/fruits/${updatedFruit._id}`)
    })
})


/**
 * * Delete Route: delete fruit with given id
 */

app.delete('/fruits/:id', (req, res) =>
{
    Fruit.findByIdAndDelete(req.params.id, (err, deletedFruit) =>
    {
        if (err || !deletedFruit)
        {
            return res.status(404).redirect('/404')
        }
        // maybe take removed fruit and place in ANOTHER DB to possibly recover
        return res.redirect('/fruits')
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