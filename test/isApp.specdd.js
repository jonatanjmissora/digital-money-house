const { Builder } = require('selenium-webdriver')
const assert = require('assert');

describe("ACCESO A LA APP", async () => {

    let driver;

    before(async function () {
        driver = new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/");
    })

    after(async () => {
        await driver.quit();
    });

    it("Ingreso a la applicacion", async () => {
        const title = await driver.getTitle();
        assert.strictEqual(title, "DMH | Digital Money House")
    })

})