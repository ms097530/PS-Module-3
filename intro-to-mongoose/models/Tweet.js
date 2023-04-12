const mongoose = require('mongoose')

const tweetSchema = new mongoose.Schema(
    {
        title: String,
        body: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 255
        },
        author: String,
        category: {
            type: String,
            enum: ['Programming', 'Gaming', 'Art']
        },
        likes: {
            type: Number,
            default: 0
        },
        sponsored: {
            type: Boolean,
            default: false
        }
    },
    // adds timestamps to these values when created (and edited?)
    { timestamps: true }
)

const Tweet = mongoose.model('Tweet', tweetSchema)

module.exports = Tweet