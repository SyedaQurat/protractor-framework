'use strict';

const jasminetwo = require("protractor-jasmine2-html-reporter")

exports.config = {

  seleniumAddress: "http://localhost:4444/wd/hub",

  capabilities: {
    browserName: "firefox"
  },

  framework: "jasmine",

  suites: {
    loginSpecs: ["loginSuccessfullyTest.js", "loginUnsuccessfullyTest.js"]
  },

  baseUrl: "baseUrl of Your Website",

  params: {
    login: {
      id: "credentials",
      password: "credentials"
    }
  },

  generateReport() {
    jasmine.getEnv().addReporter(new jasminetwo({savePath: './reports'})
    );
  },

  onPrepare() {
    browser.waitForAngularEnabled(false);
    browser.get(browser.baseUrl);
    browser.driver.manage().window().maximize();
  },

  onComplete() {
    browser.driver.close();
  },
}
