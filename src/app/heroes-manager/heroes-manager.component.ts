import { Component, OnInit } from '@angular/core';

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

  constructor(
    private heroesManagerService: HeroesManagerService,
    private searchService: SearchService) { }

  ngOnInit() {
    this.heroesManagerService.getHeroes();

    this.heroesManagerService.heroesGotten
      .subscribe((heroes: Hero[]) => {
          this.heroes = heroes;
          this.filteredHeroes = this.heroes;
      });
  }

  filterHeroes(searchValue) {
    this.searchService.localSearch(this.heroes, { name: searchValue, origin: searchValue })
      .subscribe(result => this.filteredHeroes = result);
  }

  resetSearch() {
    this.filteredHeroes = this.heroes;
  }

}
