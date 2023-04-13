const mongoose = require('mongoose')

const db = mongoose.connection


module.exports = function ()
{
    mongoose.set('strictQuery', false)
    // * not necessary to run dotenv config here since server.js is the file being ran initially, the env variables will be available here as well
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    db.on('open', () => console.log('Mongo connection opened'))
    db.on('error', () => console.log('AHHH AN ERROR OCCURRED'))
    db.on('close', () => console.log('Mongo connection closed'))
}