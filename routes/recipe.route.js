const router = require('express').Router()
let Recipe = require('../models/recipe.model.js')

// get all recipes
router.route('/').get((req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router