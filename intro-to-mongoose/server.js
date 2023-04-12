require('dotenv').config()

const express = require('express')

const PORT = 3000
const app = express()

app.get('/', (req, res) =>
{
    res.send('<h1>Server is up!</h1>')
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})