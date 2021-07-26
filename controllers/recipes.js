import recipes from '../data/recipes.js';

const checkIfRecipeInArray = input => {
    if (!input) return null;
    return recipes.find(
i => i.name === input || i.Description === input || i.Ingredients === input || i.Photo === input || i.Instructions === input || i.Datum === input);
};

export const getAllRecipes = (req, res) => res.json(recipes);

export const getSingleRecipe = (req, res) => {
    const { input } = req.params;
    const recipe = checkIfRecipeInArray(input);
    if(!recipe) return res.status(404).json({error: 'Recipe does not exist in your list'});
    res.status(200).json(recipe);
};

export const createRecipe = (req, res) => {
    const { name, Description, Ingredients, Photo, Instructions, Datum} = req.body;

    const alreadyExists = [ checkIfRecipeInArray(name), checkIfRecipeInArray(Description), 
        checkIfRecipeInArray(Ingredients), checkIfRecipeInArray(Photo), checkIfRecipeInArray(Instructions),
        checkIfRecipeInArray(Datum)];
        console.log(alreadyExists);

        if (alreadyExists.some(input => input)) return res.status(403).json({ error: 'Recipe already exists' });

    const newRecipe = {
        id: recipes.length + 1,
        ...req.body
    };
    recipes.push(newRecipe);
    res.json(newRecipe);
};

export const updateRecipe = (req, res) => {
    const { input } = req.params;
    const { name, Description, Ingredients, Photo, Instructions, Datum } = req.body;
     const recipe = checkIfRecipeInArray(input);
    if(!recipe) return res.status(404).json({error: 'Recipe does not exist in your list'});
    recipe.name = name
    recipe.Description = Description
    recipe.Ingredients = Ingredients
    recipe.Photo = Photo
    recipe.Instructions = Instructions
    recipe.Datum = Datum
    res.status(200).json(recipe);
};

export const deleteRecipe = (req, res) => {
    const { input } = req.params;
    const recipe = checkIfRecipeInArray(input);
    if(!recipe) return res.status(404).json({error: 'Recipe does not exist in your list'});
    const index = recipes.indexOf(recipe);
    recipes.slice(index, 1);
    res.status(200).json({success: 'Recipe removed'});
};