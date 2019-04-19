// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const Web3 = require('web3');
const { version } = require('web3/package.json');

module.exports = {
  'default e2e tests': function test (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Vuethexplore - vue + ethereum blockchain explore.')
      .assert.elementCount('section', 3)
      .assert.elementCount('footer', 1);

    if (version.indexOf('beta') >= 0) {
      browser.assert.containsText('h2', 'Notice: the web3 is in beta version!');
    }
    browser.assert.containsText('h2', `Web3 ${version} status: not connected.`);
    browser.assert.containsText('button.is-primary', 'Previous');
    browser.assert.containsText('button.is-info', 'Next');
    browser.assert.containsText('.dropdown-trigger > button', 'Choose blockchain');
    browser.assert.elementPresent('#dropdown-menu');
    browser.assert.containsText('div', 'Please choose the host to connect blockchain!');

    browser.end();
  },
};
