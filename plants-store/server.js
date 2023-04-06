const express = require('express')

const PORT = 3000
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot-Yam', 'Witches\' Butter']
const app = express()

// Mount middleware (app.use)
app.use((req, res, next) =>
{
    console.log('HELLO MIDDLEWARE')
    next()
})

// Mount routes
app.get('/', (req, res) =>
{
    res.send(plants)
})

app.get('/:indexOfPlantArray', (req, res) =>
{
    console.log(req.params)
    let index = parseInt(req.params.indexOfPlantArray)
    let result = plants[index]
    if (isNaN(index)
        || index >= plants.length
        || index < 0)
    {
        res.send('<h1>Unable to find a matching plant</h1>')
    }
    else
    {
        res.send(`<h1>GIMME A PLANT: ${result}</h1>`)
    }
})


app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})