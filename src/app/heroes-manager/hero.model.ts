import { CONST } from '../const';

export class Hero {
  name: string;
  origin: string;
  age: number;
  superpowers: any[];
  weaknesses: any[];
  image: string;

  constructor(hero) {
    this.name = hero.name,
    this.origin = hero.origin || '',
    this.age = hero.age || 0;
    this.superpowers = hero.superpowers || [];
    this.weaknesses = hero.weaknesses;
    this.image = CONST.imageUrl + (hero.image || CONST.imageDefault);
  }
}