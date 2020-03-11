/*created by Syeda Quratulain Asad*/

'use strict';

/*Reporting via "protractor-jasmine2-html-reporter" */
//var jasmineObject = require('protractor-jasmine2-html-reporter')


/*Reporting via "protractor-beautiful-reporter" */
var beautifulObject = require('protractor-beautiful-reporter');

exports.config =
    {
      seleniumAddress: 'http://localhost:4444/wd/hub',

      capabilities: {
        browserName: 'chrome'
      },

     suites: {
        login: ["../test-cases/search.js"],

      },

      scripts: {
        start: "protractor specs/conf.js"
      },

      framework: 'jasmine',

      baseUrl: 'https://www.google.com/',

      params: {

        title: {
          textToDisplay: 'what is selenium?',
        }
        },

      onPrepare() {
        browser.waitForAngularEnabled(false);
        browser.get(browser.baseUrl);
        browser.driver.manage().window().maximize();

        /*protractor-jasmine2-html-reporter*/
        //jasmine.getEnv().addReporter(new jasmineObject({savePath: 'reports'}))


        /*protractor-beautiful-reporter*/
        jasmine.getEnv().addReporter(new beautifulObject({baseDirectory: 'Reports'}).getJasmine2Reporter());
      },

      onComplete() {
        browser.driver.close();
      },


    };

