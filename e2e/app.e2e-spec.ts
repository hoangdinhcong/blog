import { LoecvPage } from './app.po';

describe('loecv App', () => {
  let page: LoecvPage;

  beforeEach(() => {
    page = new LoecvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
