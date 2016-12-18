import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';

@NgModule({
  imports:      [CommonModule, ReactiveFormsModule],
  declarations: [SearchComponent],
  providers:    [SearchService],
  exports:      [SearchComponent]
})
export class SearchModule { }
