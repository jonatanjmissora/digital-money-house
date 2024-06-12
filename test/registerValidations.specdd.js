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

describe("REGISTER INPUTs VALIDATIONs", async () => {

  let driver;

  before(async function () {
    driver = new Builder().forBrowser("firefox").build();
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
    await driver.findElement(By.name("firstname")).sendKeys("test")
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
    await driver.findElement(By.name("lastname")).sendKeys("test")
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
    await driver.findElement(By.name("dni")).sendKeys("11111111")
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
    await driver.findElement(By.name("email")).sendKeys("test@gmail.com")
    await driver.findElement(By.css(`[type="submit"]`)).click()
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Contraseña con un mínimo de 6 caracteres");
  })

  //        PASSWORD
  //******************************************
  it("Password Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Contraseña con un mínimo de 6 caracteres")
  })

  const passwordValidation = [
    {title: "Menor a 6 caracteres", input: "123", expected: "Contraseña con un mínimo de 6 caracteres"},
    {title: "Mayor a 20 caracteres", input: "12345678910111213141516", expected: "Contraseña con un máximo de 20 caracteres"},
    {title: "Al menos un número", input: "asdasdasd", expected: "Contraseña con al menos un número"},
    {title: "Al menos una minúscula", input: "1233434", expected: "Contraseña con al menos una minúscula"},
    {title: "Al menos una mayúscula", input: "1g233434", expected: "Contraseña con al menos una mayúscula"},
    {title: "Al menos un caracter especial", input: "12hM33434", expected: "Contraseña con al menos un caracter especial"},
  ]

  passwordValidation.forEach(({title, input, expected}) => {
    it("Password Validation : " + title, async () => {
      await driver.findElement(By.name("password")).clear()
      await driver.findElement(By.name("password")).sendKeys(input)
      await driver.findElement(By.css(`[type="submit"]`)).click()
      let registerErrorText = await driver.findElement(By.id("register-error")).getText()
      assert.strictEqual(registerErrorText, expected);
    })
  })

  it("Password Validation : entrada válida", async () => {
    await driver.findElement(By.name("password")).clear()
      await driver.findElement(By.name("password")).sendKeys("123qQ*")
      await driver.findElement(By.css(`[type="submit"]`)).click()
      let registerErrorText = await driver.findElement(By.id("register-error")).getText()
      assert.strictEqual(registerErrorText, "Las contraseñas no coinciden");
  })

  //        PASSWORD CONFIRM
  //******************************************
  it("Password2 Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Las contraseñas no coinciden")
  })

  it("Password2 Validation : entrada válida", async () => {
    await driver.findElement(By.name("password2")).clear()
      await driver.findElement(By.name("password2")).sendKeys("123qQ*")
      await driver.findElement(By.css(`[type="submit"]`)).click()
      let registerErrorText = await driver.findElement(By.id("register-error")).getText()
      assert.strictEqual(registerErrorText, "Telefono mínimo de 9 dígitos");
  })

  //        PHONE
  //******************************************
  it("Phone Validation : Vacio", async () => {
    let registerErrorText = await driver.findElement(By.id("register-error")).getText()
    assert.strictEqual(registerErrorText, "Telefono mínimo de 9 dígitos")
  })

  it("Phone Validation : menos de 9 dígitos", async () => {
    await driver.findElement(By.name("phone")).clear()
      await driver.findElement(By.name("phone")).sendKeys("123")
      await driver.findElement(By.css(`[type="submit"]`)).click()
      let registerErrorText = await driver.findElement(By.id("register-error")).getText()
      assert.strictEqual(registerErrorText, "Telefono mínimo de 9 dígitos");
  })

  it("Phone Validation : no son todos dígitos", async () => {
    await driver.findElement(By.name("phone")).clear()
      await driver.findElement(By.name("phone")).sendKeys("123456789aa")
      await driver.findElement(By.css(`[type="submit"]`)).click()
      let registerErrorText = await driver.findElement(By.id("register-error")).getText()
      assert.strictEqual(registerErrorText, "Telefono mínimo de 9 dígitos");
  })

  it("Phone Validation : datos válidos", async () => {
    await driver.findElement(By.name("phone")).clear()
      await driver.findElement(By.name("phone")).sendKeys("111111111")
      await driver.findElement(By.css(`[type="submit"]`)).click()
      let submitText = await driver.findElement(By.css(`[type="submit"]`)).getText()
      assert.strictEqual(submitText, "");
  })

})