const express = require('express')

const PORT = 3000
const app = express()

const fruits = [
    {
        name: 'apple',
        color: 'red',
        readyToEat: true
    },
    {
        name: 'banana',
        color: 'yellow',
        readyToEat: true
    },
    {
        name: 'pear',
        color: 'green',
        readyToEat: false
    }
]

app.get('/', (req, res) =>
{
    res.send('<h1>Fruits Store</h1>')
})

app.get('/fruits', (req, res) =>
{
    res.send(fruits)
})

app.get('/fruits/:indexOfFruitsArray', (req, res) =>
{
    const { indexOfFruitsArray: index } = req.params
    const indexInt = parseInt(index)
    const result = indexInt >= 0 && indexInt < fruits.length ? fruits[indexInt] : { input: index, message: 'Invalid input' }
    res.send(result)
})

app.get('*', (req, res) =>
{
    res.status(404).send('<h1>Not sure how you got here. Go on, git!</h1>')
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})