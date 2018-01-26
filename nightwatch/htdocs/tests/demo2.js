module.exports = {
  before : function (browser) {
    browser.resizeWindow(800, 600);
  },
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('input[name=btnK]', 1000)
      .execute(function() {
        return document.querySelector('input[name=btnK]').click();
      })
      .pause(1000)
      .assert.containsText('#main', 'Nightwatch')
      .end();
  }
};
