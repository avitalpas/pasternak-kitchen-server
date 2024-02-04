const router = require('express').Router()
let Recipe = require('../models/recipe.model.js')

// get all recipes
router.route('/').get((req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
})

// get recipe by id
router.route('/:id').get((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err))
})

// post new recipe
router.route('/new').post((req, res) => {

    const newRecipe = new Recipe({ 
        Title: req.body.Title,
        Chef: req.body.Chef,
        Quantity: req.body.Quantity,
        Ingredients: req.body.Ingredients,
        Description: req.body.Description,
        Source: req.body.Source,
        Image: req.body.Image,
        Tag: req.body.Tag,
        Healthy: req.body.Healthy
     })

     newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: + err'))
})

// edit recipe by id
router.route('/edit/:id').post((req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            recipe.Title = req.body.Title
            recipe.Chef = req.body.Chef
            recipe.Quantity = req.body.Quantity
            recipe.Ingredients = req.body.Ingredients
            recipe.Description = req.body.Description
            recipe.Source = req.body.Source
            recipe.Image = req.body.Image
            recipe.Tag = req.body.Tag
            recipe.Healthy = req.body.Healthy

            recipe.save()
                .then(() => res.json('Recipe updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

// delete recipe by id
router.route('/:id').delete((req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then( () => res.json('recipe deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router