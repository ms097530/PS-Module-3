const express = require('express')

const PORT = 3000
const app = express()

const msg = 'Bottles of beer on the wall'

app.get('/', (req, res) =>
{
    const heading = `<h1>99 ${msg}</h1>`
    const link = '<a href="/98"><p>take one down, pass it around ></p></a>'
    res.send(heading + link)
})

app.get('/error', (req, res) =>
{
    res.status(404).send('<h1>Not sure how you got here. You done goofed.</h1>')
})

app.get('/:number_of_bottles', (req, res) =>
{
    const { number_of_bottles: numBottles } = req.params

    const parsedNumBottles = parseInt(numBottles)
    if (
        isNaN(parsedNumBottles)
        || parsedNumBottles > 99
        || parsedNumBottles < 0
    )
    {
        return res.redirect('/error')
    }

    let heading = `<h1>${parsedNumBottles} ${msg}</h1>`
    if (parsedNumBottles === 1)
    {
        heading = heading.replace('Bottles', 'Bottle')
    }

    let link
    if (parsedNumBottles === 0)
    {
        link = `<a href="/"><p>start over ></p></a>`
    }
    else
    {
        link = `<a href="/${parsedNumBottles - 1}"><p>take one down, pass it around ></p></a>`
    }

    res.send(heading + link)
})



app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})