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
        if (err || !foundPokemon)
        {
            console.log(err)
            return res.redirect('/404?error=notfound')
        }
        return res.render('pokemon/Index', { pokemon: foundPokemon })
    })
})

app.get('/pokemon/new', (req, res) =>
{
    res.render('pokemon/New')
})

app.post('/pokemon', (req, res) =>
{
    // sample image url
    // ! name in url needs to be lowercase or else 404
    // https://img.pokemondb.net/artwork/avif/bulbasaur.avif

    // console.log(req.body)
    const { dexId: pokedexId, name, types } = req.body
    const pokemon = { pokedexId, name, types, imgUrl: `https://img.pokemondb.net/artwork/avif/${name.toLowerCase()}.avif` }

    Pokemon.create(pokemon, (err, createdPokemon) =>
    {
        if (err || !createdPokemon)
        {
            console.log(err)
            return res.redirect('/404?error=failed')
        }
        return res.redirect('/pokemon')
    })
})

app.get('/pokemon/:id', (req, res) =>
{
    Pokemon.findById(req.params.id, (err, foundPokemon) =>
    {
        if (err || !foundPokemon)
        {
            console.log(err)
            return res.redirect('/404?error=notfound')
        }
        return res.render('pokemon/Show', { pokemon: foundPokemon })
    })
})

app.get('*', (req, res) =>
{
    const { error } = req.query
    res.render('404', { error })
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