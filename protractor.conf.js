exports.config = {
  baseUrl: 'http://localhost:8080/',

  allScriptsTimeout: 11000,

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
    showTiming: true
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar',

  specs: [
    'test/**/*.e2e.js'
  ],

  onPrepare: function() {
    require('babel-core/register');
    browser.ignoreSynchronization = true;
  }

};
