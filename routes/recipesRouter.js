import express from 'express'
import { createRecipe, getAllRecipes } from '../controllers/recipes.js';
import recipes from '../data/recipes.js';

const recipeRouter = express.Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.post('/', createRecipe);

export default recipeRouter;