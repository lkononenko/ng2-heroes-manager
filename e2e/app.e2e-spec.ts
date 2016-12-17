import { Ng2HeroesManagerPage } from './app.po';

describe('ng2-heroes-manager App', function() {
  let page: Ng2HeroesManagerPage;

  beforeEach(() => {
    page = new Ng2HeroesManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
