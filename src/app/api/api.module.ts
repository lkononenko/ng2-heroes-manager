import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiHeroesManagerService } from './api-heroes-manager.service';

@NgModule({
  imports: [CommonModule],
  providers: [ApiHeroesManagerService],
})
export class ApiModule { }
