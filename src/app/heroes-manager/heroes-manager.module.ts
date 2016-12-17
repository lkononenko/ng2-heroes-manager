import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagerComponent } from './heroes-manager.component';
import { HeroesManagerApi } from './api';

@NgModule({
  imports:      [CommonModule],
  declarations: [HeroesManagerComponent],
  providers:    [HeroesManagerApi],
  exports:      [HeroesManagerComponent]
})
export class HeroesManagerModule { }
