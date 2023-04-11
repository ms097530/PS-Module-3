const express = require('express')
require('dotenv').config()

const PORT = 3000
const app = express()

// const username = process.env.MONGO_USERNAME
// const pw = process.env.MONGO_PW
// const connectionURI = `mongodb+srv://${username}:${pw}@pokemon-1.1vc82sb.mongodb.net/?retryWrites=true&w=majority`

const mongoURI = process.env.MONGO_URI

app.set('views', 'views')
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})