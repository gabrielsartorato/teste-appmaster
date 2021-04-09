import AppError from '../errors/AppError';
import { IHero } from '../interfaces/hero.interface';
import { api } from '../providers/http/http';
import { load, save } from '../providers/states/state';
import { checkValues } from '../providers/values/insensitive';

class FindHeroService {
  public async execute(q: string): Promise<IHero[]> {
    const checkDataHero = await load();

    if (checkDataHero.length === 0) {
      const { data } = await api.get('/all.json');

      save(data);
    }

    const heros: IHero[] = await load();

    const findHeros = heros.filter((hero) => {
      const { name, appearance, biography, work } = hero;

      if (
        name.localeCompare(q, undefined, {
          sensitivity: 'accent',
        }) === 0
      )
        return hero;

      if (checkValues(appearance, q)) return hero;
      if (checkValues(biography, q)) return hero;
      if (checkValues(work, q)) return hero;
    });

    if (findHeros.length === 0) {
      throw new AppError('', 204);
    }

    return findHeros;
  }
}

export { FindHeroService };
