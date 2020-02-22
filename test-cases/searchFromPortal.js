describe('Scenario: Search user On Portal ', function () {

  var locate = require('../specs/locator.js')

  it('It should search customer via mobile number', function () {
    locate.clickdashboard()
    locate.searchCustomer()
    locate.sendKeysToCustomer()
    locate.clickSearchtBtn()

  });
});