import { GitAngularIssuesPage } from './app.po';

describe('git-angular-issues App', () => {
  let page: GitAngularIssuesPage;

  beforeEach(() => {
    page = new GitAngularIssuesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
