import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroesManagerModule } from './heroes-manager/heroes-manager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    FormsModule,
    HttpModule,

    // App modules
    HeroesManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
