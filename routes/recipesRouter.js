import express from 'express'
import { createRecipe, getAllRecipes, getSingleRecipe, updateRecipe } from '../controllers/recipes.js';


const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:input', getSingleRecipe);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:input', updateRecipe);

export default recipeRouter;