const { Builder, By} = require('selenium-webdriver')
const assert = require('assert');

describe("LOGIN MAIL VALIDATION", async () => {
    
    let driver;
    
    before( () => 
        driver = new Builder().forBrowser("firefox").build());
        
    before(async () => 
        await driver.get("http://localhost:3000/login"));

    after(async () => {
        await driver.quit();
      });

      const loginMailErrors = [
        {test: "", expected: "Por favor, complete su e-mail"},
        {test: "@gmail", expected: "E-mail incorrecto. Vuelva a intentarlo"},
        {test: "jonatan@ds", expected: "E-mail incorrecto. Vuelva a intentarlo"},
    ]

    loginMailErrors.forEach( ({test, expected}) => {
    it("Login Errors:" + expected, async () => {
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys(test)
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let loginErrorText = await driver.findElement(By.id("login-error")).getText()
        assert.strictEqual(loginErrorText, expected);
        })
    })

    it("Login Errors: Mail correcto", async () => {
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys("jonatanjmissora@gmail.com")
        await driver.findElement(By.css(`[type="submit"]`)).click()
        let pValue = await driver.findElement(By.css("p")).getText()
        assert.strictEqual(pValue, "Ingresá tu contraseña");
    })

})