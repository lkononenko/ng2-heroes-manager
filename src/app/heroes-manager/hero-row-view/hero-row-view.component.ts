import { Component, Input, HostListener, Output, EventEmitter } from "@angular/core";

import { Hero } from "../hero.model";

@Component({
  selector: 'app-hero-row-view',
  templateUrl: './hero-row-view.component.html',
  styleUrls: ['../heroes-manager.component.scss']
})

export class HeroRowViewComponent {
  @Input() hero: Hero;
  @Output() changeFavouriteClicked: EventEmitter<Hero> = new EventEmitter<Hero>();

  changeFavourite(event) {
    this.changeFavouriteClicked.emit(this.hero);
  }
}