import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';

import { ApiHeroesManagerService } from '../api/api-heroes-manager.service';
import { Hero } from './hero.model';

@Injectable()
export class HeroesManagerService {

  private static heroes: Hero[];
  private static heroesGottenSubject = new BehaviorSubject<Hero[]>(HeroesManagerService.heroes);
  heroesGotten = HeroesManagerService.heroesGottenSubject.asObservable();

  constructor(private api: ApiHeroesManagerService) { }

  getHeroes() {
    return this.api.fetch(this.responseFromApi);
  }

  private responseFromApi(error: Error, data?: any[]) {
    if (!error) {
      if (data) {
        let heroes = data.map(hero => new Hero(hero));
        HeroesManagerService.heroesGottenSubject.next(heroes);
      }
    } else {
      console.log(error);
    }
  }
}
