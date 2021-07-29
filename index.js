import 'dotenv/config.js';
import express from 'express';
import recipeRouter from './routes/recipesRouter.js';
config();

const app = express();
const port = process.env.PORT || 5000;

console.log(pkg)

app.use(express.json());
app.use('/api/recipes', recipeRouter);

app.listen(port, () => console.log(`Servers listening at http://localhost:${port}`));