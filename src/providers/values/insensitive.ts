import { IHero } from '../../interfaces/hero.interface';

function checkValues(values: object, q: string) {
  for (let value of Object.values(values)) {
    if (Array.isArray(value)) {
      if (value.includes(q)) return true;
      continue;
    }

    if (!value) continue;

    const check = value.localeCompare(q, undefined, {
      sensitivity: 'accent',
    });

    if (check === 0) return true;
  }
}

function findInsensitiveHeros(heros: IHero[], q: string) {
  return heros.filter((hero) => {
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
}

export { findInsensitiveHeros };
