require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/db')
const Tweet = require('./models/Tweet')


const PORT = 3000
const app = express()

app.get('/', (req, res) =>
{
    res.send('<h1>Server is up!</h1>')
})

app.get('/tweets/insertone', (req, res) =>
{
    // * ========== First tweet ==========
    const myFirstTweet = {
        title: "Confusion",
        body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
        author: "Arthur",
        category: 'Programming',
        likes: -100,
    }

    Tweet.create(myFirstTweet)
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})

app.get('/tweets/insertone/custom', (req, res) =>
{
    Tweet.create({ ...req.query })
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})


app.get('/tweets/insertmany', (req, res) =>
{
    // * ========== Many tweets ==========
    const manyTweets = [
        {
            title: "Deep Thoughts",
            body: "Friends, I am the realest coder alive",
            author: "Arthur",
        },
        {
            title: "Sage Advice",
            body: "Friends, I am awesome and you are too",
            author: "Arthur",
            likes: 20,
        },
        {
            title: "Is TI the Jadakiss of the South",
            body: "TI is severely underrated and we need to fix that expeditiously",
            author: "Arthur",
            likes: 40,
        },
        {
            title: "Crypto",
            body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
            author: "Arthur",
            likes: 162,
        },
        {
            title: "Confusion",
            body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
            author: "Arthur",
            likes: -100,
        },
        {
            title: "Vespa",
            body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
            author: "Arthur",
            likes: 2,
        },
        {
            title: "Licensed",
            body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
            author: "Arthur",
            likes: 3,
        },
        {
            title: "Water",
            body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
            author: "Arthur",
        },
    ]

    Tweet.insertMany(manyTweets)
        .then((tweets) => res.send(tweets))
        .catch((err) => res.send(err))
        .finally(() => res.redirect('/'))
})


// * ========== Find tweets ==========

app.get('/tweets', (req, res) =>
{
    // find all
    Tweet.find()
        .then((tweets) => res.send(tweets))
        .catch((err) => res.send(err))
})

app.get('/tweets/find/:title', (req, res) =>
{
    Tweet.find({ title: req.params.title })
        .then((tweets) => res.send(tweets))
        .catch((err) => res.send(err))
})

app.get('/tweets/body', (req, res) =>
{
    // * using projection for second argument
    // * only returns title and body of each entry
    Tweet.find({}, 'title body')
        .then((tweets) => res.send(tweets))
        .catch((err) => res.send(err))
})

app.get('/tweets/water', (req, res) =>
{
    // * using filter to find entry with specific title
    Tweet.find({ title: 'Water' })
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})

app.get('/tweets/likes20', (req, res) =>
{
    // * using advanced filter options with find
    Tweet.find({ likes: { $gte: 20 } })
        .then((tweets) => res.send(tweets))
        .catch((err) => res.send(err))
})


// * ========== Remove tweets ==========

app.get('/tweets/removeone', (req, res) =>
{
    // * removing single entry with title of Deep Thoughts
    Tweet.findOneAndRemove({ title: 'Deep Thoughts' })
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})

app.get('/tweets/removeone/:title', (req, res) =>
{
    Tweet.findOneAndRemove({ title: req.params.title })
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})


// * ========== Update tweets ==========

app.get('/tweets/updateone', (req, res) =>
{
    // * find tweet with title of Vespa and updated sponsored to be true
    // ? setting new to true in third argument means updated document is returned in callback
    // ? without above setting, unupdated document would be return value
    Tweet.findOneAndUpdate(
        { title: 'Vespa' },
        { sponsored: true },
        { new: true }
    )
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})

app.get('/tweets/updateone/:title', (req, res) =>
{
    // * find tweet by title and update based on query params
    // * passing query param that doesn't exist doesn't throw an error
    // ! passing an invalid value for an existing key of model will throw an error
    // ? setting new to true in third argument means updated document is returned in callback
    Tweet.findOneAndUpdate({ title: req.params.title }, { ...req.query }, { new: true })
        .then((tweet) => res.send(tweet))
        .catch((err) => res.send(err))
})


// * ========== Intermediate ==========

app.get('/tweets/count', (req, res) =>
{
    // * count tweets with likes >= 20
    Tweet.countDocuments({ likes: { $gte: 20 } })
        // ? wrap count in object so browser interprets to JSON
        // ? as number, interprets as status code
        .then((count) => res.send({ count }))
        .catch((err) => res.send(err))
})

// * ========== Advanced ==========

app.get('/tweets/advanced', (req, res) =>
{
    // * using advanced query
    // ? -_id excludes _id field
    // ? instructors suggested "-" sorts in descending order, but _id does not show up in returned data
    // ? "-" seems to filter out data that is automatically returned otherwise
    // * can pass string to sort or object
    Tweet.find({ likes: { $gte: 20 } }, 'title likes sponsored -_id')
        .limit(2)
        .sort('title')
        // .sort({ title: -1 })
        .exec()
        .then((tweets) => res.send(tweets))
        .catch((err) => res.send(err))
})

// * ========== Fallback ==========
app.get('*', (req, res) =>
{
    res.status(404).send({ message: 'Uh oh. You\'ve strayed from the path.' })
})

app.listen(PORT, () =>
{
    connectToDB()

    console.log(`Listening on port ${PORT}`)
})