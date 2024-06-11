const { Builder, By } = require('selenium-webdriver')
const assert = require('assert');

describe("REGISTER INPUTs VALIDATIONs", async () => {

  let driver;

  before(async function () {
    driver = new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/register");
    await driver.findElement(By.css(`[type="submit"]`)).click()
  })

  after(async () => {
    await driver.quit();
  });

  //      FIRSTNAME
  //******************************************
  it("Firstname Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Por favor, complete su nombre")
  })

  it("Firstname Validation : entrada válida", async () => {
    await driver.findElement(By.name("firstname")).clear()
    await driver.findElement(By.name("firstname")).sendKeys("Andrés")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Por favor, complete su apellido");
  })

  //      LASTNAME
  //******************************************
  it("Lastname Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Por favor, complete su apellido")
  })

  it("Lastname Validation : entrada válida", async () => {
    await driver.findElement(By.name("lastname")).clear()
    await driver.findElement(By.name("lastname")).sendKeys("Perez")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "DNI mínimo de 7 dígitos numéricos");
  })

  //        DNI
  //******************************************
  it("DNI Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "DNI mínimo de 7 dígitos numéricos")
  })

  it("DNI Validation : error por caracteres no permitidos", async () => {
    await driver.findElement(By.name("dni")).clear()
    await driver.findElement(By.name("dni")).sendKeys("23sd23!")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "DNI mínimo de 7 dígitos numéricos");
  })

  it("DNI Validation : error por cantidad de caracteres", async () => {
    await driver.findElement(By.name("dni")).clear()
    await driver.findElement(By.name("dni")).sendKeys("23sd23!")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "DNI mínimo de 7 dígitos numéricos");
  })

  it("DNI Validation : entrada válida", async () => {
    await driver.findElement(By.name("dni")).clear()
    await driver.findElement(By.name("dni")).sendKeys("93238583")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "E-mail incorrecto. Vuelva a intentarlo");
  })

  //        MAIL
  //******************************************
  it("Mail Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "E-mail incorrecto. Vuelva a intentarlo")
  })

  it("Mail Validation : mail mal formado @sds", async () => {
    await driver.findElement(By.name("email")).clear()
    await driver.findElement(By.name("email")).sendKeys("@sds")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "E-mail incorrecto. Vuelva a intentarlo");
  })

  it("Mail Validation : mail mal formado jony@", async () => {
    await driver.findElement(By.name("email")).clear()
    await driver.findElement(By.name("email")).sendKeys("jony@")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "E-mail incorrecto. Vuelva a intentarlo");
  })

  it("Mail Validation : entrada válida", async () => {
    await driver.findElement(By.name("email")).clear()
    await driver.findElement(By.name("email")).sendKeys("jona@gmail.com")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Contraseña con un mínimo de 6 caracteres");
  })

})