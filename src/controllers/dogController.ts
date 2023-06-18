import { Request, Response } from 'express';
import * as dogService from '../services/dogService.js';
import { ApiError } from '../exceptions/ApiError.js';

export async function getDogs(req: Request, res: Response) {
  const { attribute, order, pageNumber, limit } = dogService.validateQueryParams(req.query);

  const offset = (pageNumber - 1) * limit;

  const dogs = await dogService.getDogs(attribute, order, offset, limit);

  return res.status(200).send(dogs.map(dogService.normalizeData));
}

export async function addDog(req: Request, res: Response) {
  const dog = dogService.validateRequestBody(req.body);

  const existingDog = await dogService.findByName(dog.name);

  if (existingDog) {
    throw ApiError.BadRequest('Dog with the same name already exists');
  }

  const newDog = await dogService.addDog(dog);

  return res.status(201).send(dogService.normalizeData(newDog));
}
