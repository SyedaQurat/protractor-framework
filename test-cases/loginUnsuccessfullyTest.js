describe("Scenario: Login UnSuccessful", function() {

    const locate = require("../specs/locator.js")
    let welcomeMsg = element(by.xpath("Your xpath"))

    it("It should not login successfully ", function() {
        element(by.xpath("your xpath")).getText().then(function(text) {

            locate.findByClassName()
            locate.findById()
            locate.findByXpath()

            logger.logLevelInfo("info " + browser.params.login.password.toString());

            //Title assertion
            expect(browser.getTitle()).toEqual("Title to assert")

            logger.logLevelInfo("Print actual title" +  browser.getTitle())

            //Text assertion
            expect(welcomeMsg.getText()).toEqual("Assertion of text")

            //Waiting for element to display
            browser.sleep(3000)

            let leftModuleText = element(by.binding("binding-name"))
            browser.wait(leftModuleText.isDisplayed, 3000, "Assertion Message")


        })
    })
})
