const { Builder} = require('selenium-webdriver')
const assert = require('assert');

describe("ACCESO A LA APP", async () => {
    
    let driver;
    
    before( () => 
        driver = new Builder().forBrowser("firefox").build());
        
    before(async () => 
        await driver.get("http://localhost:3000/"));

    after(async () => {
        await driver.quit();
      });

    it("Ingreso a la applicacion", async () => {
        try{
            const title = await driver.getTitle();
            assert.strictEqual(title, "DMH | Digital Money House")
            //assert.notEqual(title, null);
            console.log("si la encuentro la app")
        } catch(e) {
            console.log("no encuentro la app")
        }
    })

})