/*created by Syeda Quratulain Asad*/

const locate = function()
{
  let signInBtn = element(by.xpath(".//a[text()='Sign in']"));
  let emailAddress = element(by.id("i0116"));
  let nextBtn = element(by.id("idSIButton9"));

  this.clickSignInBtn = () => {
    signInBtn.click();
  };

  this.sendEmail = () => {
    emailAddress.click();
    emailAddress.sendKeys(browser.params.login.email);
  };

  this.clickNextBtn = () => {
    nextBtn.click();
  };

}

module.exports = new locate()
