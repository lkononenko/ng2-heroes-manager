import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

import { HeroesManagerService } from './heroes-manager.service';
import { Hero } from './hero.model';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-heroes-manager',
  templateUrl: './heroes-manager.component.html',
  styleUrls: ['./heroes-manager.component.scss']
})
export class HeroesManagerComponent implements OnInit {

  private heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];
  limit: number = 5;
  offset: number = 0;
  all_loaded: boolean = false;
  favouriteHeroes: Hero[] = [];

  constructor(
    private heroesManagerService: HeroesManagerService,
    private searchService: SearchService,
    private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.heroesManagerService.getHeroes(this.limit, this.offset);

    this.heroesManagerService.heroesGotten
      .subscribe((heroes: Hero[]) => {
          if (heroes) {
            this.heroes = this.heroes.concat(heroes);
            this.filteredHeroes = this.heroes;

            if (heroes.length < this.limit) {
              this.all_loaded = true;
            }
          }
      });

    this.heroesManagerService.showErrorNotification
      .subscribe(
        () => this.notificationsService.error('', 'Sorry! Something went wrong, please, reload application.')
      );
  }

  filterHeroes(searchValue) {
    this.searchService.localSearch(this.heroes, { name: searchValue, origin: searchValue })
      .subscribe(result => this.filteredHeroes = result);
  }

  resetSearch() {
    this.filteredHeroes = this.heroes;
  }

  nextPage() {
    if (!this.all_loaded) {
      this.offset += this.limit;
      this.heroesManagerService.getHeroes(this.limit, this.offset);
    }
  }

  changeFavourite(hero: Hero) {
    if (hero.favourite) {
      hero.favourite = false;
      this.heroesManagerService.removeFromArray(hero, this.favouriteHeroes);
    } else {
      hero.favourite = true;
      this.favouriteHeroes.push(hero);
    }
  }

}
