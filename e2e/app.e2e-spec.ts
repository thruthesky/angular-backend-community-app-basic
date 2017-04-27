import { CommunityAppBasicPage } from './app.po';

describe('community-app-basic App', () => {
  let page: CommunityAppBasicPage;

  beforeEach(() => {
    page = new CommunityAppBasicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
