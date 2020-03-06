describe('Scenario: Successful login', function () {

    var locate = require('../specs/locator.js');
    var logger = require('../specs/log.js')("Login Success");


    fit('It should login with correct credentials', function () {

        locate.clickSignInBtn()
        logger.logLevelInfo("Sign In Button is clicked")

        browser.sleep(5000)
        locate.sendEmail()

        expect(browser.getTitle()).toEqual('Sign in to your Microsoft account')

        locate.clickNextBtn()

    });

});
