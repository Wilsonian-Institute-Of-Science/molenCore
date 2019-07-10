import { AppPage } from './app.po';
import { notEqual } from 'assert';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getMainHeading()).toEqual('Hello, world!');
  });

  it('should not display an empty message', () => {
    page.navigateTo();
    notEqual(page.getMainHeading(), '');
  });
});
