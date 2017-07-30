import { ShoppingAngularAppPage } from './app.po';

describe('shopping-angular-app App', () => {
  let page: ShoppingAngularAppPage;

  beforeEach(() => {
    page = new ShoppingAngularAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
