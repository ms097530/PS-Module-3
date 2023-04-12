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

// * ========== First tweet ==========
// const myFirstTweet = {
//     title: "Confusion",
//     body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
//     author: "Arthur",
//     category: 'Programming',
//     likes: -100,
// }

// Tweet.create(myFirstTweet)
//     .then((tweet) => console.log(tweet))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('this always runs'))

// * ========== Many tweets ==========
// const manyTweets = [
//     {
//         title: "Deep Thoughts",
//         body: "Friends, I am the realest coder alive",
//         author: "Arthur",
//     },
//     {
//         title: "Sage Advice",
//         body: "Friends, I am awesome and you are too",
//         author: "Arthur",
//         likes: 20,
//     },
//     {
//         title: "Is TI the Jadakiss of the South",
//         body: "TI is severely underrated and we need to fix that expeditiously",
//         author: "Arthur",
//         likes: 40,
//     },
//     {
//         title: "Crypto",
//         body: "Friends, I have spent $2300 to be one of the first people to own a random jpeg and that makes me cool",
//         author: "Arthur",
//         likes: 162,
//     },
//     {
//         title: "Confusion",
//         body: "Friends, why do you just respond with the word `dislike`? Surely you mean to click the like button?",
//         author: "Arthur",
//         likes: -100,
//     },
//     {
//         title: "Vespa",
//         body: "Friends, my Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph",
//         author: "Arthur",
//         likes: 2,
//     },
//     {
//         title: "Licensed",
//         body: "Friends, I am now officially licensed to teach yogalates. Like this to get 10% off a private lesson",
//         author: "Arthur",
//         likes: 3,
//     },
//     {
//         title: "Water",
//         body: "Friends, I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how",
//         author: "Arthur",
//     },
// ]

// Tweet.insertMany(manyTweets)
//     .then((tweets) => console.log(tweets))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally running!'))

// * ========== Find tweets ==========
// find all
// Tweet.find()
//     .then((tweets) => console.log(tweets))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally found'))

// * using projection for second argument
// * only returns title and body of each entry
// Tweet.find({}, 'title body')
//     .then((tweets) => console.log(tweets))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('found title body'))

// * using filter to find entry with specific title
// Tweet.find({ title: 'Water' })
//     .then((tweet) => console.log(tweet))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally water'))

// * using advanced filter options with find
// Tweet.find({ likes: { $gte: 20 } })
//     .then((tweets) => console.log(tweets))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally likes gte 20'))

// * ========== Remove tweets ==========

// * removing single entry with title of Deep Thoughts
// Tweet.findOneAndRemove({ title: 'Deep Thoughts' })
//     .then((tweet) => console.log(tweet))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally removed deep thoughts'))

// * ========== Update tweets ==========

// * find tweet with title of Vespa and updated sponsored to be true
// ? setting new to true in third argument means updated document is returned in callback
// ? without above setting, unupdated document would be return value
// Tweet.findOneAndUpdate(
//     { title: 'Vespa' },
//     { sponsored: true },
//     { new: true }
// )
//     .then((tweet) => console.log(tweet))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally updated Vespa'))

// * ========== Intermediate ==========

// * count tweets with likes >= 20
// Tweet.countDocuments({ likes: { $gte: 20 } })
//     .then((count) => console.log(count))
//     .catch((err) => console.log(err))
//     .finally(() => console.log('finally counted documents'))

// * ========== Advanced ==========

// * using advanced query
// ? -_id excludes _id field
Tweet.find({ likes: { $gte: 20 } }, 'title -_id')
    .limit(2)
    .sort('title')
    .exec()
    .then((tweets) => console.log(tweets))
    .catch((err) => console.log(err))
    .finally(() => console.log('finally advanced query'))

app.listen(PORT, () =>
{
    connectToDB()

    console.log(`Listening on port ${PORT}`)
})