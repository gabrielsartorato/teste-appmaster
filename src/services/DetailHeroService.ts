import AppError from '../errors/AppError';
import { IHero } from '../interfaces/hero.interface';
import { api } from '../providers/http/http';
import { load, save } from '../providers/states/state';

class DetailHeroService {
  public async execute(slug: string): Promise<IHero> {
    const checkDataHero = await load();

    if (!checkDataHero) {
      const { data } = await api.get('/all.json');

      save(data);
    }

    const heros: IHero[] = await load();

    const hero = heros.find(
      (hero) =>
        slug.localeCompare(hero.name, undefined, { sensitivity: 'accent' }) ===
        0,
    );

    if (!hero) {
      throw new AppError('Herói não encontrado', 404);
    }

    return hero;
  }
}

export { DetailHeroService };
