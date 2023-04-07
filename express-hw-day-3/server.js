const express = require('express')
const ejs = require('ejs')

const PORT = 3000
const app = express()

app.set('view engine', 'ejs')

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
    res.render('./digimon/index')
})

app.get('/digimon/new', (req, res) =>
{
    res.render('./digimon/new')
})

app.get('/digimon/:id', (req, res) =>
{
    res.render('./digimon/show')
})

app.post('/digimon', (req, res) =>
{
    console.log('add a new digimon...')
    res.redirect('/digimon')
})

//* =============== POKEMON ROUTES ===============

app.get('/pokemon', (req, res) =>
{
    res.render('./pokemon/index')
})

app.get('/pokemon/new', (req, res) =>
{
    res.render('./pokemon/new')
})

app.get('/pokemon/:id', (req, res) =>
{
    res.render('./pokemon/show')
})

app.post('/pokemon', (req, res) =>
{
    console.log('adding a new pokemon...')
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