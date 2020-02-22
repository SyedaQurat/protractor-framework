const locate = function() {
  let ById = element(by.id("id"))
  let ByClassName = element(by.css("class-name"))
  let ByBinding = element(by.binding("binding-name"))
  let ByName = element(by.name("xpath"))

  this.findById = () => {
    ById.sendKeys(browser.params.login.id)
  }

  this.findByClassName = () => {
    ByClassName.sendKeys(browser.params.login.password)
  }

  this.findByXpath = () => {
    ByBinding.click()
  }

  this.clickdashboard = () => {
    ByName.click()
  }
}

module.exports = new locate()
