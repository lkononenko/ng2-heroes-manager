import { Component, OnInit } from '@angular/core';

import { HeroesManagerService } from './heroes-manager.service';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes-manager',
  templateUrl: './heroes-manager.component.html',
  styleUrls: ['./heroes-manager.component.scss']
})
export class HeroesManagerComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroesManagerService: HeroesManagerService) { }

  ngOnInit() {
    this.heroesManagerService.getHeroes();

    this.heroesManagerService.heroesGotten
      .subscribe((heroes: Hero[]) => {
          this.heroes = heroes;
      });
  }

}
