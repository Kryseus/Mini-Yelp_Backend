import { Router } from 'express';
import { createRecipe, getAllRecipes, getSingleRecipe, updateRecipe, deleteRecipe } from '../controllers/recipes.js';


const recipeRouter = Router();

recipeRouter.get('/', getAllRecipes);
recipeRouter.get('/:id', getSingleRecipe);
recipeRouter.post('/', createRecipe);
recipeRouter.put('/:id', updateRecipe);
recipeRouter.delete('/:id', deleteRecipe);

export default recipeRouter;