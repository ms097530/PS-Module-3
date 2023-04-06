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

/**
 * GET /
 */
app.get('/', (req, res) =>
{
    res.send(plants)
})

/**
 * GET /awesome
 */
app.get('/awesome', (req, res) =>
{
    res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `)
})

/**
 * GET /hello/:firstname/:lastname
 * params: firstname, lastname
 */
app.get('/hello/:firstname/:lastname', (req, res) =>
{
    const { firstname, lastname } = req.params
    res.send(`<h1>Hello ${firstname} ${lastname}</h1>`)
})

app.get('/howdy/:firstname', (req, res) =>
{
    console.log(req.params)
    console.log(req.query)
    res.send(`Hello ${req.params.firstname}, ${req.query.title} of ${req.query.territory}`)
})

/**
 * GET /:indexOfPlantArray
 * params: indexOfPlantArray 
*/
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

/**
 * GET catch all route
 */
app.get('*', (req, res) =>
{
    res.send('<h1>There\'s nothing here. You found the Limbo route!')
})

app.listen(PORT, () =>
{
    console.log(`Listening on port ${PORT}`)
})