import {By, until} from "selenium-webdriver"
import {BasePage} from "./basePage"

export class Google extends BasePage {
    searchBar: By = By.name("q");
    results: By = By.id('rso')
    constructor() {
        super({url: "https://www.google.com"});
    }
    
    async sendKeys(elementBy: By, keys) {
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).sendKeys(keys)
    }
    async doSearch(text: string) {
        await this.sendKeys(this.searchBar, `${text}\n`)
    }
    async getResults() {
        return this.getText(this.results)
    }
}