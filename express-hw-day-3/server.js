const express = require('express')
const digimon = require('./models/digimon')
const pokemon = require('./models/pokemon')

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

// * ==== ROUTES ====
// ? General
// GET: /, *
// ? Digimon
// GET: /digimon, /digimon/new, /digimon/:id 
// POST: /digimon
// ? Pokemon
// GET: /pokemon, /pokemon/new, /pokemon/:id 
// POST: /pokemon

//* =============== HOMEPAGE ROUTE ===============

app.get('/', (req, res) =>
{
    res.render('index')
})

//* =============== DIGIMON ROUTES ===============

app.get('/digimon', (req, res) =>
{
    res.render('./digimon/index', { digimon })
})

app.get('/digimon/new', (req, res) =>
{
    res.render('./digimon/new')
})

app.get('/digimon/:id', (req, res) =>
{
    const { id } = req.params
    const parsedId = parseInt(id)

    const result = parsedId >= 0 && parsedId < digimon.length ? { error: false, data: digimon[parsedId - 1] } : { error: true, message: 'Invalid input' }

    res.render('./digimon/show', { result })
})

app.post('/digimon', (req, res) =>
{
    console.log('adding a new digimon...')
    const prevId = digimon[digimon.length - 1].id
    const newDigimon = { id: prevId + 1, name: req.body.name }
    digimon.push(newDigimon)
    res.redirect('/digimon')
})

//* =============== POKEMON ROUTES ===============

app.get('/pokemon', (req, res) =>
{
    res.render('./pokemon/index', { pokemon })
})

app.get('/pokemon/new', (req, res) =>
{
    res.render('./pokemon/new')
})

app.get('/pokemon/:id', (req, res) =>
{
    const { id } = req.params
    const parsedId = parseInt(id)
    const result = parsedId >= 0 && parsedId < pokemon.length ? { error: false, data: pokemon[parsedId - 1] } : { error: true, message: 'Invalid input' }

    res.render('./pokemon/show', { result })
})

app.post('/pokemon', (req, res) =>
{
    console.log('adding a new pokemon...')
    const prevId = pokemon[pokemon.length - 1].id
    const newPokemon = { id: prevId + 1, name: req.body.name }
    pokemon.push(newPokemon)
    res.redirect('/pokemon')
})

//* =============== 404 ROUTE ===============

app.get('*', (req, res) =>
{
    res.status(404).render('404')
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})