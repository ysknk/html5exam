let company = {
  name_ja: '株式会社フォーク',
  name_en: 'FORK CORPORATION',
  domain: 'fork.co.jp'
};

module.exports = {
  'before' : function (browser) {
    browser
      .maximizeWindow()
  },

  'Demo test Google Fork Search' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', company.name_ja)
      .pause(500)
      .waitForElementVisible('input[name=btnK]', 1000)
      .execute(function() {
        return document.querySelector('input[name=btnK]').click();
      })
      .pause(2000)
      .assert.containsText('#main', company.name_en)
  },

  'Demo test Fork Site Open' : function (browser) {
    browser
      .waitForElementVisible('.knowledge-panel .ab_button', 1000)
      .click('.knowledge-panel .ab_button')
      .pause(1000)
      .assert.urlContains(company.domain)
      .assert.title(company.name_ja + ' | ' + company.name_en)
      .pause(4000)
      .saveScreenshot([
        'screenshots/complete/',
        browser.capabilities.browserName,
        '.png'
      ].join(''))
      .pause(6000)
      .end();
  }
};
