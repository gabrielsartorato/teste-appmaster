import { Request, Response } from 'express';
import { DetailHeroService } from '../services/DetailHeroService';
import { FindHeroService } from '../services/FindHeroService';

class HerosController {
  async index(request: Request, response: Response): Promise<Response> {
    const { q } = request.body;
    const header = request.header('case-sensitive');

    const findHeroService = new FindHeroService();

    if (q.length < 3) {
      return response
        .status(400)
        .json('Atributo deve conter pelo menos 3 caracteres');
    }

    const heros = await findHeroService.execute(q, header);

    return response.json(heros);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { slug } = request.params;

    const detailHeroService = new DetailHeroService();

    const hero = await detailHeroService.execute(slug);

    return response.json(hero);
  }
}

export { HerosController };
