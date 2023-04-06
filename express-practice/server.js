const fs = require('fs')

// Load express
const express = require('express')

const port = 3000

//  Create instance of the express app
const app = express()

app.engine('madeline', (filePath, options, callback) =>
{
    fs.readFile(filePath, (err, content) =>
    {
        if (err) return callback(err)
        // this is an extremely simple view engine, we'll be more complex later
        const rendered = content.toString()
            .replace('#title#', '<title>' + options.title + '</title>')
            .replace('#message#', '<h1>' + options.message + '</h1>')
            .replace('#content#', '<div>' + options.content + '</div>')
        return callback(null, rendered)
    })
})

app.set('views', './views') // specify the views directory
app.set('view engine', 'madeline') // register the hypatia view engine

// Define a "root" route directly on app
app.get('/', (req, res) =>
{
    console.log('RECEIVED A REQUEST UP IN HERE')
    // use response object to send back some data
    res.send('<h1>Hello World</h1>')
})

app.get('/home', (req, res) =>
{
    res.send('<h1>Home Page</h1>')
})

app.get('/cars', (req, res) =>
{
    res.send('<h1>VROOM VROOM</h1>')
})

app.post('/cars', (req, res) =>
{
    console.log(req)
    console.log(res)
    res.send('Car posted')
})

// ---------- routes rendering simple custom view engine ----------
app.get('/madeline', (req, res) =>
{
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
})

app.get('/about-me', (req, res) =>
{
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
})

app.get('/another-one', (req, res) =>
{
    res.render('template', { title: 'Bites the Dust', message: 'Ba na na na nuh', content: 'By Queen' })
})

// ----------------------------------------------------------------------

// as object which will become json
// express sets response headers by default when sending data like this
app.get('/bleh', (req, res) =>
{
    console.log('bleh route')
    // sending data as JSON
    res.send({ test: 'value' })
})
// with json method
app.get('/blehdirect', (req, res) =>
{
    console.log('bleh with direct json')
    res.json({ bleh: 'ugh' })
})

app.get('/blorp', (req, res) =>
{
    console.log('blorp route')
    res.send(Buffer.from('wahoo'))
})

app.post('/testp', (req, res) =>
{
    console.log('POSTING')
    res.send({ message: 'Post successful' })
})

// Catch all route for routes that didn't match elsewhere
app.get('*', (req, res) =>
{
    console.log('catch all route')
    // use response object to send back some data
    res.status(404).send('<h3>Not sure what you wanted</h3>')
})

// Tell the app to listen on port 3000
//  for HTTP requests from clients
app.listen(port, () =>
{
    console.log('Listening on port ', port)
})