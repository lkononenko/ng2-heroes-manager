import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagerComponent } from './heroes-manager.component';
import { HeroesManagerService } from './heroes-manager.service';
import { SearchModule } from '../search/search.module';

@NgModule({
  imports:      [CommonModule, SearchModule],
  declarations: [HeroesManagerComponent],
  providers:    [HeroesManagerService],
  exports:      [HeroesManagerComponent]
})
export class HeroesManagerModule { }
