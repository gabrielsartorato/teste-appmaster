import { Request, Response } from 'express';
import { FindHeroService } from '../services/FindHeroService';

class HerosController {
  async index(request: Request, response: Response): Promise<Response> {
    const { q } = request.body;
    const { sensitive } = request.headers;

    const findHeroService = new FindHeroService();

    if (q.length < 3) {
      return response
        .status(400)
        .json('Atributo deve conter pelo menos 3 caracteres');
    }

    const heros = await findHeroService.execute(q);

    return response.json(heros);
  }
}

export { HerosController };
