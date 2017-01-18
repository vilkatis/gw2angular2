import { GW2Page } from './app.po';

describe('gw2 App', function() {
  let page: GW2Page;

  beforeEach(() => {
    page = new GW2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
