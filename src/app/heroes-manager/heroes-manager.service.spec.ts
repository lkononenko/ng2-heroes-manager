/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroesManagerService } from './heroes-manager.service';

describe('HeroesManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesManagerService]
    });
  });

  it('should ...', inject([HeroesManagerService], (service: HeroesManagerService) => {
    expect(service).toBeTruthy();
  }));
});
