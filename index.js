import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import restaurantRouter from './routes/restaurantRouter.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({origin:'*'}));

app.use(morgan('dev'));
app.use(express.json());
app.use('/restaurants', restaurantRouter);

app.all('*',  (req, res) => res.send('Not existent'));

app.listen(port, () => console.log(`Servers listening at http://localhost:${port}`));