import { Router } from 'express';
import { createRestaurant, getAllRestaurants, getSingleRestaurant } from '../controllers/Restaurants.js';


const RestaurantRouter = Router();

RestaurantRouter.get('/', getAllRestaurants);
RestaurantRouter.get('/:id', getSingleRestaurant);
RestaurantRouter.post('/', createRestaurant);

export default restaurantRouter;