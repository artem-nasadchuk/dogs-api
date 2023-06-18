import { Router } from 'express';
import * as pingController from '../controllers/pingController.js';
import { catchError } from '../utils/catchError.js';

export const pingRouter = Router();

pingRouter.get('/ping', catchError(pingController.ping));
