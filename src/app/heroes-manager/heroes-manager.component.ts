import { Component, OnInit } from '@angular/core';

import { HeroesManagerApi } from './api';

@Component({
  selector: 'app-heroes-manager',
  templateUrl: './heroes-manager.component.html',
  styleUrls: ['./heroes-manager.component.scss']
})
export class HeroesManagerComponent implements OnInit {

  constructor(private api: HeroesManagerApi) {
    api.fetch(this.responseFromApi);
  }

  ngOnInit() {
  }

  private responseFromApi(error: Error, data?: any[]) {
    if (!error) {
      console.log(data);
    } else {
      console.log(error);
    }
  }

}
