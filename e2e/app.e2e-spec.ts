import { ActorsPage } from './app.po';

describe('actors App', function() {
  let page: ActorsPage;

  beforeEach(() => {
    page = new ActorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
