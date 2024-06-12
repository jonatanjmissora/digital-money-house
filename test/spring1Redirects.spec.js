const { Builder, By } = require('selenium-webdriver')
const assert = require('assert');
const { beforeEach } = require('mocha');

describe("SPRING1 REDIRECTs", async () => {

    let driver;

    before(async function () {
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://localhost:3000/");
    })
    
    after(async () => {
        await driver.quit();
    });

    it("hacia login", async () => {
        await driver.findElement(By.css(".login")).click()
        await driver.sleep(500)
        let currentUrl = await driver.getCurrentUrl();
        let endpoint = currentUrl.split("/").slice(-1)[0]
        assert.strictEqual(endpoint, "login");
    })

    it("de login hacia register", async () => {
        await driver.findElement(By.css(".register")).click()
        await driver.sleep(500)
        let currentUrl = await driver.getCurrentUrl();
        let endpoint = currentUrl.split("/").slice(-1)[0]
        assert.strictEqual(endpoint, "register");
    })

    it("de register hacia login", async () => {
        await driver.findElement(By.css(".login")).click()
        await driver.sleep(500)
        let currentUrl = await driver.getCurrentUrl();
        let endpoint = currentUrl.split("/").slice(-1)[0]
        assert.strictEqual(endpoint, "login");
    })

    it("de login a home", async () => {
        await driver.findElement(By.css("#logo")).click()
        await driver.sleep(500)
        let currentUrl = await driver.getCurrentUrl();
        let endpoint = currentUrl.split("/").slice(-1)[0]
        assert.strictEqual(endpoint, "");
    })

    it("de login a dashboard", async () => {
        await driver.get("http://localhost:3000/login");
        await driver.findElement(By.name("email")).sendKeys("jonatanjmissora@gmail.com")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        await driver.sleep(500)
        await driver.findElement(By.name("password")).sendKeys("654321")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        await driver.sleep(5000)
        let currentUrl = await driver.getCurrentUrl();
        let endpoint = currentUrl.split("/").slice(-1)[0]
        assert.strictEqual(endpoint, "dashboard");
    })

})