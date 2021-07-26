import express from 'express';
import recipes from './data/recipes.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.get('/api/recipes', (req, res) => res.json(recipes));
app.post('/api/recipes', (req, res) => {
const newRecipe = {
    id: recipes.length + 1,
    ...req.body
};
recipes.push(newRecipe);
res.json(newRecipe);
});
app.get('/', (req, res) => res.send("Hello World"));


app.listen(port, () => console.log(`Servers listening at http://localhost:${port}`));