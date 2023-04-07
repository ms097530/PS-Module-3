const express = require('express')
const fruits = require('./models/fruits')
// const Show = require('./views/Show.jsx')

const PORT = 3000
const app = express()

app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())


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

// index route
app.get('/fruits', (req, res) =>
{
    res.render('Index', { fruits })
})

// new route
app.get('/fruits/new', (req, res) =>
{
    res.render('New')
})

// show route
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