module.exports = {
  'Demo test Nightwatch' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .pause(5000)

      .setValue('input[type=text]', 'N')
      .pause(200)
      .setValue('input[type=text]', 'i')
      .pause(200)
      .setValue('input[type=text]', 'g')
      .pause(200)
      .setValue('input[type=text]', 'h')
      .pause(200)
      .setValue('input[type=text]', 't')
      .pause(200)
      .setValue('input[type=text]', 'w')
      .pause(200)
      .setValue('input[type=text]', 'a')
      .pause(200)
      .setValue('input[type=text]', 't')
      .pause(200)
      .setValue('input[type=text]', 'c')
      .pause(200)
      .setValue('input[type=text]', 'h')

      .waitForElementVisible('input[name=btnK]', 1000)
      .pause(1000)
      .execute(function() {
        return document.querySelector('input[name=btnK]').click();
      })
      .pause(1000)
      .assert.containsText('#main', 'Nightwatch')
      .click('#main .srg .g:first-child a')
      .pause(5000)
      .end();
  }
};
