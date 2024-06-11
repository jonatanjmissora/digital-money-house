const { Builder, By } = require('selenium-webdriver')
const assert = require('assert');

describe("LOGIN ERRORS", async () => {

    let driver;

    before(async function () {
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://localhost:3000/login");
    })

    after(async () => {
        await driver.quit();
    });

    const loginErrors = [
        { test: ["jonatan@gmail.com", "123456"], expected: "Usuario no registrado" },
        { test: ["jonatanjmissora@gmail.com", "123456"], expected: "La contraseña no corresponde al usuario" }
    ]

    loginErrors.forEach(({ test, expected }) => {
        it("Login Errors:" + expected, async () => {
            await driver.findElement(By.name("email")).sendKeys(test[0])
            await driver.findElement(By.css(`[type="submit"]`)).click()
            await driver.sleep(500)
            await driver.findElement(By.name("password")).sendKeys(test[1])
            await driver.findElement(By.css(`[type="submit"]`)).click()
            await driver.sleep(5000)
            let loginErrorText = await driver.findElement(By.id("login-error")).getText()
            assert.strictEqual(loginErrorText, expected);
        })
    })

})