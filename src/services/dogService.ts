import Joi from 'joi';
import { Dog, DogInterface } from '../models/Dog.js';
import { ApiError } from '../exceptions/ApiError.js';

export function normalizeData({ name, color, tail_length, weight }: DogInterface) {
  return { name, color, tail_length, weight };
}

export function validateRequestBody(requestBody: any): DogInterface {
  const schema = Joi.object({
    name: Joi.string().trim().max(50).required(),
    color: Joi.string().trim().max(50).required(),
    tail_length: Joi.number().min(0.1).required(),
    weight: Joi.number().min(0.1).required(),
  });

  const { error, value } = schema.validate(requestBody, { abortEarly: false });

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    throw ApiError.BadRequest(errorMessage);
  }

  return value;
}

export function validateQueryParams(queryParams: any): {
  attribute: string;
  order: 'asc' | 'desc';
  pageNumber: number;
  limit: number;
} {
  const schema = Joi.object({
    attribute: Joi.string().valid('name', 'color', 'tail_length', 'weight').default('name'),
    order: Joi.string().valid('asc', 'desc').default('asc'),
    pageNumber: Joi.number().integer().min(1).default(1),
    limit: Joi.number().integer().min(1).max(100).default(2),
  });

  const { error, value } = schema.validate(queryParams, { abortEarly: false });

  if (error) {
    const errorMessage = error.details.map((detail) => detail.message).join(', ');
    throw ApiError.BadRequest(errorMessage);
  }

  return value;
}

export function findByName(name: string) {
  return Dog.findOne({ where: { name } });
}

export function addDog({ name, color, tail_length, weight }: DogInterface) {
  return Dog.create({ name, color, tail_length, weight });
}

export function getDogs(attribute: string, order: 'asc' | 'desc', offset: number, limit: number) {
  return Dog.findAll({
    order: [[attribute, order]],
    offset,
    limit,
  });
}
