const { Builder, By } = require('selenium-webdriver')
const assert = require('assert');

describe("LOGIN INPUTs VALIDATIONs", async () => {

    let driver;

    before(async function () {
        driver = new Builder().forBrowser("chrome").build();
        await driver.get("http://localhost:3000/login");
    })

    after(async () => {
        await driver.quit();
    });

    it("Mail Validation : Vacio", async () => {
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys("")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-mail-error")).getText()
        assert.strictEqual(loginErrorText, "Por favor, complete su e-mail");
    })

    it("Mail Validation : Mal escrito @gmail", async () => {
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys("@gmail")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-mail-error")).getText()
        assert.strictEqual(loginErrorText, "E-mail incorrecto. Vuelva a intentarlo");
    })

    it("Mail Validation : Mal escrito jonatan@ds", async () => {
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys("jonatan@ds")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-mail-error")).getText()
        assert.strictEqual(loginErrorText, "E-mail incorrecto. Vuelva a intentarlo");
    })

    it("Mail Validation : Mail correcto", async () => {
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys("jonatanjmissora@gmail.com")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let pValue = await driver.findElement(By.css("p")).getText()
        assert.strictEqual(pValue, "Ingresá tu contraseña");
    })

    it("Password Validation : Vacio", async () => {
        await driver.findElement(By.name("password")).clear()
        await driver.findElement(By.name("password")).sendKeys("")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-password-error")).getText()
        assert.strictEqual(loginErrorText, "Por favor, complete contraseña");
    })

    it("Password Validation : Menor a 6 caracteres ", async () => {
        await driver.findElement(By.name("password")).clear()
        await driver.findElement(By.name("password")).sendKeys("123")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-password-error")).getText()
        assert.strictEqual(loginErrorText, "Contraseña con un mínimo de 6 caracteres");
    })

    it("Password Validation : Mayor a 20 caracteres ", async () => {
        await driver.findElement(By.name("password")).clear()
        await driver.findElement(By.name("password")).sendKeys("12345678910111213141516")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-password-error")).getText()
        assert.strictEqual(loginErrorText, "Contraseña con un máximo de 20 caracteres");
    })

    it("Password Validation : Correcto ", async () => {
        await driver.findElement(By.name("password")).clear()
        await driver.findElement(By.name("password")).sendKeys("123456")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let submitText = await driver.findElement(By.css(`[type="submit"]`)).getText()
        assert.strictEqual(submitText, "");
    })

})