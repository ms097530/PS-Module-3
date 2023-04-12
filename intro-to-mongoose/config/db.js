const mongoose = require('mongoose')

// Global configuration
const mongoURI = process.env.MONGO_URI
// save reference to connection
const db = mongoose.connection

module.exports = function ()
{
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    db.on('open', () => console.log('Connected to MongoDB'))
    db.on('error', (err) => console.error(err))
    db.on('close', () => console.log('Disconnected from Mongo'))
}