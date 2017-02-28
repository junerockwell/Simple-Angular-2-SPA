import { TutprojPage } from './app.po';

describe('tutproj App', () => {
  let page: TutprojPage;

  beforeEach(() => {
    page = new TutprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
