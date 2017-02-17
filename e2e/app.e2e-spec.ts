import { OkodePelisPage } from './app.po';

describe('okode-pelis App', function() {
  let page: OkodePelisPage;

  beforeEach(() => {
    page = new OkodePelisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
