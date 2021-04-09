export interface IHero {
  id: number;
  name: string;
  slug: string;
  powerstats: IPowerStats;
  appearance: IAppearance;
  biography: IBiography;
  work: IWork;
  connections: IConnections;
  images: IImages;
}

export interface IImages {
  xs: string;
  sm: string;
  md: string;
  ld: string;
}

export interface IConnections {
  groupAffiliation: string;
  relatives: string;
}

export interface IWork {
  occupation: string;
  base: string;
}

export interface IPowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export interface IAppearance {
  gender: number;
  race: string;
  height: [];
  weight: [];
  eyeColor: string;
  hairColor: string;
}

export interface IBiography {
  fullName: string;
  alterEgos: string;
  aliases: [];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}
