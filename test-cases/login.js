describe('Scenario: Google search', function () {

    var locate = require('../specs/locator.js');
    var logger = require('../specs/log.js')("Login Success");


    fit('It should search on google', function () {

        locate.sendInput();

        locate.hitEnterKey();
        logger.logLevelInfo("Enter key is clicked")

        //Assertion of title
        expect(browser.getTitle()).toEqual('what is selenium? - Google Search')


    });

});
