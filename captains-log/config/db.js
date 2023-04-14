const mongoose = require('mongoose')

const db = mongoose.connection

module.exports = function ()
{
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    db.on('open', () => console.log('Connected to MongoDB'))
    db.on('error', () => console.log('AHHH AN ERROR!', err))
    db.on('close', () => console.log('Disconnected from Mongo'))
}