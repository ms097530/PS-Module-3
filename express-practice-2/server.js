const express = require('express')

const PORT = 3000
const app = express()

app.get('/greeting/:name', (req, res) =>
{
    const { name } = req.params
    res.send(`<h1>Hello, ${name}</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) =>
{
    const { total, tipPercentage } = req.params
    const tipAsPercent = tipPercentage / 100
    const tip = (total * tipAsPercent).toFixed(2)
    res.send(`<h1>Your tip is: ${tip}`)
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})