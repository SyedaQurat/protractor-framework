/*created by Syeda Quratulain Asad*/
'use strict';

/*Reporting via "protractor-jasmine2-html-reporter" */
//var jasmineObject = require('protractor-jasmine2-html-reporter')

/*Reporting via "protractor-beautiful-reporter" */
var beautifulObject = require('protractor-beautiful-reporter');

exports.config =
    {
      //seleniumAddress: 'http://localhost:4444/wd/hub',
        capabilities: {
        browserName: 'firefox'
      },
     directConnect: true,

      framework: 'jasmine',

      baseUrl: 'https://www.google.com/',
        params: {
            title: {
                textToDisplay: 'what is selenium?',
            }
        },

        suites: {
         search: ["../test-cases/search.js"],
          searchDB: ["../test-cases/databaseSearch.js"]
     },

      scripts: {
        start: "protractor specs/conf.js"
      },

      onPrepare() {
        browser.waitForAngularEnabled(false);
        browser.get(browser.baseUrl);
        browser.driver.manage().window().maximize();

        /*protractor-beautiful-reporter*/
        jasmine.getEnv().addReporter(new beautifulObject({baseDirectory: 'Reports'}).getJasmine2Reporter());

          /*protractor-jasmine2-html-reporter*/
          //jasmine.getEnv().addReporter(new jasmineObject({savePath: 'reports'}))
      },

      onComplete() {
        browser.driver.close();
      }
 };

