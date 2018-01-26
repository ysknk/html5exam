const seleniumServer = require('selenium-server');

module.exports = {
  'src_folders' : ['tests'],
  'output_folder' : 'reports',

  /*-------------
   *  @selenium
   * ----------*/
  'selenium' : {
    'start_process' : true,
    'server_path': seleniumServer.path,
    'port' : 4444
  },

  'test_settings' : {
    /*-------------
     *  @default
     * ----------*/
    'default' : {
      'silent': true,
      'screenshots' : {
        'enabled' : true,
        'on_failure': true,
        'on_error': true,
        'path' : 'screenshots'
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true
      }
    },

    /*-------------
     *  @headless
     * ----------*/
    'headless': {
      'screenshots' : {
        'enabled' : true,
        'on_failure': true,
        'on_error': true,
        'path' : 'screenshots'
      },
      'desiredCapabilities': {
        'browserName': 'chrome',
        'javascriptEnabled': true,
        'chromeOptions' : {
          'args' : ['--headless']
        }
      }
    },

    /*-------------
     *  @firefox
     * ----------*/
    'firefox': {
      'screenshots' : {
        'enabled' : true,
        'on_failure': true,
        'on_error': true,
        'path' : 'screenshots'
      },
      'desiredCapabilities': {
        'browserName': 'firefox',
        'javascriptEnabled': true
      }
    }

  }
};
