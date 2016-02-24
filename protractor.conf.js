exports.config = {
  baseUrl: 'http://localhost:8080/',

  allScriptsTimeout: 10000,

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

  specs: [
    'test/**/*.e2e.js'
  ],

  onPrepare: function() {
    require('babel-core/register');
    browser.ignoreSynchronization = true;
  }

};
