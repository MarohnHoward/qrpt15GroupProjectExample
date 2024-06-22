import { MarsPage } from "./marsPage";
const page = new MarsPage(); 

test('clicks on YouTube', async () => {
    await page.navigate(); 
    //await page.scrollToElement(page.youtube); 
    await page.driver.sleep(2000)
    await page.click(page.youtube); 
    await page.tabs(); 
    await page.driver.quit(); 
})