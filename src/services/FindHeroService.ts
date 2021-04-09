import path from 'path';

import AppError from '../errors/AppError';
import { IHero } from '../interfaces/hero.interface';
import { api } from '../providers/http/http';
import { load, save } from '../providers/states/state';
import { findInsensitiveHeros } from '../providers/values/insensitive';
import { findSensitiveHeros } from '../providers/values/sensitive';
class FindHeroService {
  public async execute(
    q: string,
    header: string | undefined,
  ): Promise<IHero[]> {
    if (header && header !== 'false' && header !== 'true') {
      throw new AppError('Header informado está inválido', 400);
    }

    const checkDataHero = await load();

    if (!checkDataHero) {
      const { data } = await api.get('/all.json');

      save(data);
    }

    const heros: IHero[] = await load();

    const findHeros = header === 'true'
      ? findSensitiveHeros(heros, q)
      : findInsensitiveHeros(heros, q);

    if (findHeros.length === 0) {
      throw new AppError('', 204);
    }

    return findHeros;
  }
}

export { FindHeroService };
