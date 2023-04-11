require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// import data models
const Vegetable = require('./models/Vegetable')

const PORT = 3000
const app = express()

// initialize view engine
app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

/**
 * *  URL               HTTP Verb     Action            Used For
 *    /vegetables           GET         index           display list of all photos
 *    /vegetables/new       GET         new             display form for creating new vegetable
 *    /vegetables           POST        create          create new vegetable
 *    /vegetables/:id       GET         show            display specific vegetable
 *    /vegetables/:id/edit  GET         edit            display form for editing vegetable
 *    /vegetables/:id       PATCH/PUT   update          update a specific vegetable
 *    /vegetables/:id       DELETE      destroy         delete a specific vegetable
 */

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>
{
    res.redirect('/vegetables')
})

app.get('/vegetables', (req, res) =>
{
    res.render('vegetables/Index', { vegetables: [] })
})

app.listen(PORT, () =>
{
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.once('open', () =>
    {
        console.log('Connected to MongoDB')
    })
    console.log(`Listening on port ${PORT}`)
})