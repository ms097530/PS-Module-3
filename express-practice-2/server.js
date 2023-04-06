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

app.get('/magic/:question', (req, res) =>
{
    const ANSWERS = [
        "It is certain", "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ]

    const { question } = req.params
    const randIndex = Math.floor(Math.random() * ANSWERS.length)
    const randAnswer = ANSWERS[randIndex]
    const answer = `<h1>You asked: ${question}?</h1>
    <h2>Our answer: ${randAnswer}</h2>`

    res.send(answer)
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})