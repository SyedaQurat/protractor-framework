/*created by Syeda Quratulain Asad*/

const locate = function()
{
  //let searchInputField = element(by.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input"));
  let searchByBing = element(by.id("sb_form_q"));
  let title = element(by.xpath("//*[@id=\"tsf\"]/div[2]/div[1]/div[2]/div/div[2]/input"))
  let results = element(by.id('result-stats'));
  let seconds  = element(by.xpath("//*[@id=\"result-stats\"]/nobr"))

  /*
  this.sendInput = () => {
    searchInputField.click();
    searchInputField.sendKeys(browser.params.title.textToDisplay);
   };
*/

  this.sendInput = () => {
    searchByBing.click();
    searchByBing.sendKeys(browser.params.title.textToDisplay);
  };

  this.hitEnterKey=() =>
  {
    searchByBing.sendKeys(protractor.Key.ENTER);
  }


  this.getSearchTitle=() =>
  {
    title.getAttribute('title').then(function (val) {
      console.log('value : ', val)
    })

    return results.getText().then(function (val) {
      return val;
    })


  }
}

module.exports = new locate()
