import { EpanteAngular2TestPage } from './app.po';

describe('epante-angular2-test App', function() {
  let page: EpanteAngular2TestPage;

  beforeEach(() => {
    page = new EpanteAngular2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
