const mongoose = require('mongoose')

const Schema = mongoose.Schema

const recipeSchema = new Schema({
    Title: String,
    Chef: String,
    Quantity: String,
    Ingredients: String,
    Description: String,
    Source: String,
    Image: String,
    Tag: String,
    Healthy: String
},{
    timestamps: true
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe