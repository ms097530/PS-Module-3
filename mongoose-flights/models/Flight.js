const mongoose = require('mongoose')
const { getYearFromNow } = require('../util/time')

const flightSchema = new mongoose.Schema({
    airline:
    {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true
    },
    flightNo:
    {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs:
    {
        type: Date,
        // * set to function definition, not call
        // ? otherwise default will be a year from when the server started up
        default: getYearFromNow,
        required: true
    }
})

const Flight = mongoose.model('Flight', flightSchema)

module.exports = Flight