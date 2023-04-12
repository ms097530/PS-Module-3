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

const myFirstTweet = {
    title: "Confusion",
    body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
    author: "Arthur",
    category: 'Programming',
    likes: -100,
}

Tweet.create(myFirstTweet)
    .then((tweet) => console.log(tweet))
    .catch((err) => console.log(err))
    .finally(() => console.log('this always runs'))

app.listen(PORT, () =>
{
    connectToDB()

    console.log(`Listening on port ${PORT}`)
})