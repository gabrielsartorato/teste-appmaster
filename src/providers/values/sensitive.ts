import { IHero } from '../../interfaces/hero.interface';

function checkValues(values: object, q: string) {
  for (let value of Object.values(values)) {
    if (Array.isArray(value)) {
      if (value.includes(q)) return true;
      continue;
    }

    if (!value) continue;

    if (value === q) return true;
  }
}

function findSensitiveHeros(heros: IHero[], q: string) {
  return heros.filter((hero) => {
    const { name, appearance, biography, work } = hero;

    if (name === q) return hero;

    if (checkValues(appearance, q)) return hero;
    if (checkValues(biography, q)) return hero;
    if (checkValues(work, q)) return hero;
  });
}

export { findSensitiveHeros };
