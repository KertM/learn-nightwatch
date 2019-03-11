var config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  '@tags': ['ekspress'],
  'Eesti Ekspressist otsib minecrafti': function(browser) {
    browser
        .resizeWindow(1280, 1200)
        .url('https://ekspress.delfi.ee/')
        .pause(200)
        .waitForElementVisible('body')
        .pause(100)
        .setValue('.header-search__input', "minecraft")
        .pause(500)
        .click('div[class="header-search"] form button')
        .pause(500)
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}Minecraft.png`)
        .pause(200)
        .click('a[href="/areen/maailma-sees-on-veel-palju-suurem-maailm-ja-selle-nimi-on-minecraft?id=81416493"]')
        .pause(500)
        .saveScreenshot(`${config.imgpath(browser)}open-article.png`)
        .pause(900)
        .end();
  },
};

//class="pyfe-teaser-box-title"