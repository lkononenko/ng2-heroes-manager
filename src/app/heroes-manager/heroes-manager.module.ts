import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagerComponent } from './heroes-manager.component';

@NgModule({
  imports:      [CommonModule],
  declarations: [HeroesManagerComponent],
  providers:    [],
  exports:      [HeroesManagerComponent]
})
export class HeroesManagerModule { }
