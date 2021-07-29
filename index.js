import 'dotenv/config.js';
import express from 'express';
import morgan from 'morgan';
import recipeRouter from './routes/recipesRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(morgan('dev'));
app.use(express.json());
app.use('/recipes', recipeRouter);

app.all('*',  (req, res) => res.send('Not existent'));

app.listen(port, () => console.log(`Servers listening at http://localhost:${port}`));