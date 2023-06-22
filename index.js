const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;

const chefData= require('./Chef_data/Chef.json')

const recipeDetails= require('./Recipe_Details/Recipe_Details.json')

app.use(cors())

app.get('/', (req, res)=> {
    res.send('server is running...')
})

app.get('/chef', (req, res) => {
  res.send(chefData)
})

app.get('/recipe', (req, res) => {
  res.send(recipeDetails)
})

app.get('/recipe/:Id', (req, res) => {
  const Id= req.params.Id;
  console.log(Id);
  const selectedRecipe = recipeDetails.find(recipe=> recipe.Recipe_Id === Id);
  res.send(selectedRecipe);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})