/*created by Syeda Quratulain Asad*/

const locate = function()
{
  let searchInputField = element(by.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input"));
  let title = element(by.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[2]/div/div[2]/input"))
  let results = element(by.xpath("//*[@id=\"result-stats\"]/text()"))
  let seconds  = element(by.xpath("//*[@id=\"result-stats\"]/nobr"))

  this.sendInput = () => {
    searchInputField.click();
    searchInputField.sendKeys(browser.params.title.textToDisplay);
   };

  this.hitEnterKey=() =>
  {
    searchInputField.sendKeys(protractor.Key.ENTER);
  }

}

module.exports = new locate()
