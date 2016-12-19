import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

import { ApiHeroesManagerService } from '../api/api-heroes-manager.service';
import { Hero } from './hero.model';

@Injectable()
export class HeroesManagerService {

  private static heroes: Hero[];
  private static start: number;
  private static end: number;
  private static heroesGottenSubject = new BehaviorSubject<Hero[]>(HeroesManagerService.heroes);
  heroesGotten = HeroesManagerService.heroesGottenSubject.asObservable();

  constructor(private api: ApiHeroesManagerService) { }

  getHeroes(limit: number, offset: number) {
    HeroesManagerService.start = offset;
    HeroesManagerService.end = offset + limit;
    return this.api.fetch(this.responseFromApi);
  }

  removeFromArray(item, array) {
    var index = array.indexOf(item);

    if (index > -1) {
        array.splice(index, 1);
        return array;
    }
    return false;
  }

  private responseFromApi(error: Error, data?: any[]) {
    if (!error) {
      if (data) {
        let heroes = data
          .slice(HeroesManagerService.start, HeroesManagerService.end)
          .map(hero => new Hero(hero));
        HeroesManagerService.heroesGottenSubject.next(heroes);
      }
    } else {
      console.log(error);
    }
  }
}
