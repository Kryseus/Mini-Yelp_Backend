import express from 'express';
import recipeRouter from './routes/recipesRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/recipes', recipeRouter);
app.get('/', (req, res) => res.send("Hello World"));


app.listen(port, () => console.log(`Servers listening at http://localhost:${port}`));