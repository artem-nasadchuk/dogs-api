import { Router } from 'express';
import * as dogController from '../controllers/dogController.js';
import { catchError } from '../utils/catchError.js';

export const dogRouter = Router();

dogRouter.get('/dogs', catchError(dogController.getDogs));
dogRouter.post('/dogs', catchError(dogController.addDog));
