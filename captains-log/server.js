require('dotenv').config()
const express = require('express')

const PORT = 3000
const app = express()

app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

app.get('/', (req, res) =>
{
    res.redirect('/logs')
})

app.get('/logs', (req, res) =>
{
    res.send('LOGS')
})

app.get('/logs/new', (req, res) =>
{
    res.render('logs/New')
})

app.get('*', (req, res) =>
{
    res.send('FALLBACK ROUTE')
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})