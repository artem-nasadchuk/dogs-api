import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../exceptions/ApiError.js';

export function errorMiddleware(error: Error, req: Request, res: Response, next: NextFunction) {
  if (error instanceof ApiError) {
    const { status, message } = error;

    return res.status(status).send({ message });
  }

  return res.status(500).send({ message: 'Unexpected error' });
}
