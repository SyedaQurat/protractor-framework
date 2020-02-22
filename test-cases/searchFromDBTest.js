describe('Scenario: Search user from database', function () {

    var locate = require('../specs/locator.js')
    var sqlConnect = require('../specs/dbConnection.js')

    it('It should search customer in DB', function () {
        sqlConnect.connectDB()
        sqlConnect.queryExecution(querySuccess)

        function querySuccess(data) {
            browser.sleep(3000)
            expect(data.mobileNumber || "").toEqual(locate.getNum());
            browser.sleep(3000)
        }
    });
});