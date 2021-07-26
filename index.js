import express from 'express';
import recipes from './data/recipes.js';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/recipes', (req, res) => res.json(recipes));
app.get('/', (req, res) => res.send("Hello World"));


app.listen(port, () => console.log(`Servers listening at http://localhost:${port}`));