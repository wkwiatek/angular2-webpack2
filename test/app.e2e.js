describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have proper title', () => {
    expect(browser.getTitle()).toEqual('Angular 2');
  });

});
