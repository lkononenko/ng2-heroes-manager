import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagerComponent } from './heroes-manager.component';
import { HeroesManagerService } from './heroes-manager.service';
import { SearchModule } from '../search/search.module';
import { HeroRowViewComponent } from './hero-row-view/hero-row-view.component';

@NgModule({
  imports:      [CommonModule, SearchModule],
  declarations: [HeroesManagerComponent, HeroRowViewComponent],
  providers:    [HeroesManagerService],
  exports:      [HeroesManagerComponent, HeroRowViewComponent]
})
export class HeroesManagerModule { }
