import { Request, Response, Router } from 'express';

export const herosRouter = Router();

herosRouter.get('/', (request: Request, response: Response) => {
  response.json({ ok: 'ok' });
});
