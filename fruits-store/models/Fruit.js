const mongoose = require('mongoose')

// Mongoose Fruit Schema (Blueprint)
const fruitSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 1 },
    color: { type: String, required: true, minlength: 1 },
    readyToEat: Boolean
})

// Mongoose Model
const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit