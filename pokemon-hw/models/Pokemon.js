const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    pokedexId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    types: { type: [{ type: String, required: true }], required: true }
})

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

module.exports = Pokemon