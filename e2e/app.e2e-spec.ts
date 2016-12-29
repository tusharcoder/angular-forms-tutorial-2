import { AngularFormsTutorial2Page } from './app.po';

describe('angular-forms-tutorial-2 App', function() {
  let page: AngularFormsTutorial2Page;

  beforeEach(() => {
    page = new AngularFormsTutorial2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
