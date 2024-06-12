
const testUser = {
    "dni": 11111111,
    "email": "test@gmail.com",
    "firstname": "test",
    "lastname": "test",
    "password": "123qQ*",
    "phone": "111111111"
  }
  const testResponse = {
      "user_id": 236,
      "account_id": 89,
      "email": "test@gmail.com"
    }

const { Builder, By } = require('selenium-webdriver')
const assert = require('assert');

describe("REGISTER ERRORS", async () => {

    let driver;

    before(async function () {
        driver = new Builder().forBrowser("firefox").build();
        await driver.get("http://localhost:3000/register");
    })

    after(async () => {
        await driver.quit();
    });

    it("usuario ya registrado", async () => {

        await driver.findElement(By.name("firstname")).clear()
        await driver.findElement(By.name("firstname")).sendKeys(testUser.firstname)

        await driver.findElement(By.name("lastname")).clear()
        await driver.findElement(By.name("lastname")).sendKeys(testUser.lastname)

        await driver.findElement(By.name("dni")).clear()
        await driver.findElement(By.name("dni")).sendKeys(testUser.dni)
        
        await driver.findElement(By.name("email")).clear()
        await driver.findElement(By.name("email")).sendKeys(testUser.email)

        await driver.findElement(By.name("password")).clear()
        await driver.findElement(By.name("password")).sendKeys(testUser.password)

        await driver.findElement(By.name("password2")).clear()
        await driver.findElement(By.name("password2")).sendKeys(testUser.password)

        await driver.findElement(By.name("phone")).clear()
        await driver.findElement(By.name("phone")).sendKeys(testUser.phone)

        await driver.findElement(By.css(`[type="submit"]`)).click()
        await driver.sleep(5000)
        let registerErrorText = await driver.findElement(By.id("register-error")).getText()
        assert.strictEqual(registerErrorText, "Email ya registrado");
    })

})