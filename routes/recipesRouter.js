import express from 'express'
import { createRecipe, getAllRecipes, getSingleRecipe } from '../controllers/recipes.js';


const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:input', getSingleRecipe);
recipeRouter.post('/', createRecipe);

export default recipeRouter;