module.exports = {
  'Demo test Google' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .pause(5000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .pause(5000)
      .click('button[name=btnG]')
      .pause(5000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};
























// @before
// module.exports = {
//   'Demo test Google' : function (browser) {
//     browser
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .pause(5000)
//       .setValue('input[type=text]', 'nightwatch')
//       .waitForElementVisible('button[name=btnG]', 1000)
//       .pause(5000)
//       .click('button[name=btnG]')
//       .pause(5000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   }
// };

// @after
// module.exports = {
//   'Demo test Google' : function (browser) {
//     browser
//       .url('http://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .pause(5000)
//       .setValue('input[type=text]', 'nightwatch')
//       .waitForElementVisible('input[name=btnK]', 1000)
//       .pause(5000)
//       .execute(function() {
//         return document.querySelector('input[name=btnK]').click();
//       })
//       .pause(5000)
//       .assert.containsText('#main', 'Nightwatch')
//       .end();
//   }
// };
