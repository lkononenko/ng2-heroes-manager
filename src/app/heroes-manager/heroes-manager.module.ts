import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagerComponent } from './heroes-manager.component';
import { heroesManager } from '../api';

@NgModule({
  imports: [CommonModule, heroesManager],
  exports:      [HeroesManagerComponent]
})
export class HeroesManagerModule { }
