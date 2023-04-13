require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/db')

const PORT = 3000
const app = express()

app.listen(PORT, () =>
{
    connectToDB()
    console.log(`Listening on port ${PORT}`)
})