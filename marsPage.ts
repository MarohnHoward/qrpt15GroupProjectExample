import { By } from "selenium-webdriver";
import {BasePage} from './basePage'; 
const fs = require('fs'); 
export class MarsPage extends BasePage {
    //! First step when extending the basePage is adding locators
    youtube: By = By.xpath('(//a[@*])[271]'); 
    //! Constructor goes next so we can use our class as an object in our test.
    constructor() {
        super({url: "https://www.nasa.gov/"}); 
    }; 
    //! Methods next or repeatable steps that we use often.
    async tabs() {
        let myTabs = await this.driver.getAllWindowHandles(); 
        await this.driver.switchTo().window(myTabs[1]); 
        await this.driver.sleep(1500); 
        fs.writeFile(`${__dirname}/youtube.png`,
        await this.driver.takeScreenshot(), "base64", 
        (e) => {
            if (e) console.log(e); 
            else console.log('It took a screenshot! Wahoo!'); 
        }); 
        await this.driver.close(); 
        await this.driver.switchTo().window(myTabs[0]); 
    }; 
    /*async scrollToElement(elementBy: By) {
        const scrollThing = await this.getElement(elementBy); 
        await this.driver.actions()
        .move({origin: scrollThing})
        .perform()
    }; */
}