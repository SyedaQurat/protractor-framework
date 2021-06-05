describe('Scenario: Google search', function () {

    var locate = require('../specs/locator.js');
    var logger = require('../specs/log.js')("Successful search");


    fit('It should search on google', function () {

        locate.sendInput();
        locate.hitEnterKey();

        //Assertion of title
        expect(browser.getTitle()).toEqual('what is selenium? - Bing')
    });
});
