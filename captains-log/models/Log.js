const mongoose = require('mongoose')

const logSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, minlength: 1 },
        entry: { type: String, required: true, minlength: 5 },
        shipIsBroken: { type: Boolean, default: true }
    },
    {
        timestamps: true
    }
)

const Log = mongoose.model('Log', logSchema)

module.exports = Log