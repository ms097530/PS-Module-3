require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Pokemon = require('./models/Pokemon')

const PORT = 3000
const app = express()

app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) =>
{
    res.redirect('/pokemon')
})

app.get('/pokemon', (req, res) =>
{
    Pokemon.find((err, foundPokemon) =>
    {

        res.render('pokemon/Index', { pokemon: foundPokemon })
    })
})

app.get('/pokemon/new', (req, res) =>
{
    res.render('pokemon/New')
})

app.post('/pokemon', (req, res) =>
{
    console.log(req.body)
    const { dexId: pokedexId, name, types } = req.body
    const pokemon = { pokedexId, name, types }
    Pokemon.create(pokemon, (err, createdPokemon) =>
    {
        if (err)
        {
            console.log(err)
        }
        res.redirect('/pokemon')
    })
    // res.redirect('/pokemon')
})

app.get('/pokemon/:id', (req, res) =>
{
    res.render('pokemon/Show', { pokemon: {} })
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