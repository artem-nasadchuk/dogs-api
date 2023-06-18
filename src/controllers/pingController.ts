import { Request, Response } from 'express';

export async function ping(req: Request, res: Response) {
  return res.status(200).send('Dogshouseservice.Version1.0.1');
}
