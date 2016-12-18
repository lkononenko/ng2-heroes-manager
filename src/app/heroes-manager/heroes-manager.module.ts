import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesManagerComponent } from './heroes-manager.component';
import { HeroesManagerService } from './heroes-manager.service';

@NgModule({
  imports:      [CommonModule],
  declarations: [HeroesManagerComponent],
  providers:    [HeroesManagerService],
  exports:      [HeroesManagerComponent]
})
export class HeroesManagerModule { }
