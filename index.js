const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

// require dotenv
require('dotenv').config()

// create app via express
const app = express()

// set port to 5000
let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

// app use
app.use(cors())
app.use(express.json())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }));

// MongoDB uri connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection

// test connection
connection.once('open', () => {
    console.log('MongoDB database connection astablished successfully');
})

const recipeRouter = require('./routes/recipe.route')

app.use('/recipe', recipeRouter)

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
})