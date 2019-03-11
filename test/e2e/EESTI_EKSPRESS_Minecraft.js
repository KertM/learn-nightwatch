var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  '@tags': ['ekspress'],
  'Eesti Ekspress to search for "minecraft" and click minecraft article': function(browser) {
    browser
        .resizeWindow(1280, 1200)
        .url('https://ekspress.delfi.ee/')
        .pause(100)
        .waitForElementVisible('body')
        .pause(100)
        .setValue('.header-search__input', "minecraft")
        .pause(100)
        .click('div[class="header-search"] form button')
        .pause(100)
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}search-form-Minecraft.png`)
        .pause(100)
        .click('a[href="/areen/maailma-sees-on-veel-palju-suurem-maailm-ja-selle-nimi-on-minecraft?id=81416493"]')
        .pause(500)
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}open-article.png`)
        .pause(100)
        .end();
  },
};