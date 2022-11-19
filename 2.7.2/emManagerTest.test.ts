import { employeeManagerPage } from "./emManagerPage";
import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const emPage = new employeeManagerPage(driver);

  describe("Employee Manger Test", () => {
    beforeEach(async () => {
        await emPage.navigate();
    })
    afterAll(async () => {
        await driver.quit()
    })
    test("adding an employee", async () => {
        await driver.wait(until.elementLocated(emPage.header))
        await driver.findElement(emPage.addEmployee).click();
        await driver.findElement(emPage.newEmployee).click();
        await driver.findElement(emPage.nameInput).click();
        await driver.findElement(emPage.nameInput).clear();
        await driver.findElement(emPage.nameInput).sendKeys("Change this");
        await driver.findElement(emPage.phoneInput).click()
        await driver.findElement(emPage.phoneInput).clear()
        await driver.findElement(emPage.phoneInput).sendKeys("Change this")
        await driver.findElement(emPage.titleInput).click()
        await driver.findElement(emPage.titleInput).clear()
        await driver.findElement(emPage.titleInput).sendKeys("Change this")
})
})
// I took the second half of 2.6 and formatted it to fit this homework.