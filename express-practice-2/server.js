const express = require('express')

const PORT = 3000
const app = express()

app.get('/greeting/:name', (req, res) =>
{
    const { name } = req.params
    res.send(`<h1>Hello, ${name}</h1>`)
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})