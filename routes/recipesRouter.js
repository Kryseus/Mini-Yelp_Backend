import express from 'express'
import { createRecipe, getAllRecipes, getSingleRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.js';


const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:input', getSingleRecipe);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:input', updateRecipe);
recipeRouter.delete('/:input', deleteRecipe);

export default recipeRouter;