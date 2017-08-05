import { TestAngularCliPage } from './app.po';

describe('test-angular-cli App', () => {
  let page: TestAngularCliPage;

  beforeEach(() => {
    page = new TestAngularCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
