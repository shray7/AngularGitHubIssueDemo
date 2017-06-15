import { AngularGitIssuesPage } from './app.po';

describe('angular-git-issues App', () => {
  let page: AngularGitIssuesPage;

  beforeEach(() => {
    page = new AngularGitIssuesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
