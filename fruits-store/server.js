require('dotenv').config()
const express = require('express')
const fruits = require('./models/fruits')
const fs = require('fs')

const PORT = 3000
const mongoURI = process.env.MONGO_URI
const app = express()

app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())



app.use((req, res, next) =>
{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

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
    res.send('<h1>Fruits Store</h1>')
})

/**
 * Index Route: return a list of fruits
 */
app.get('/fruits', (req, res) =>
{
    res.render('Index', { fruits })
})

/**
 * New Route: return form to create new fruit
 */
app.get('/fruits/new', (req, res) =>
{
    res.render('New')
})

/**
 * Create Route: add new fruit to data 
*/
app.post('/fruits', async (req, res) =>
{
    // let fruitsData = await fs.promises.readFile('./models/fruits.js')

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
    console.log(req.body)
    fruits.push(req.body)
    res.redirect('/fruits')
})

/**
 * Show Route: returns a single fruit
*/
app.get('/fruits/:indexOfFruitsArray', (req, res) =>
{
    const { indexOfFruitsArray: index } = req.params
    const indexInt = parseInt(index)
    // figure out if parameter actually maps to something
    const result = indexInt >= 0 && indexInt < fruits.length
        ? fruits[indexInt]
        : { input: index, message: 'Invalid input' }

    // pass props via options object
    res.render('Show', { fruit: result, test: 'ahhh', bob: 'dob' })
    // res.send(result)
})

// fallback route
app.get('*', (req, res) =>
{
    res.status(404).send('<h1>Not sure how you got here. Go on, git!</h1>')
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})