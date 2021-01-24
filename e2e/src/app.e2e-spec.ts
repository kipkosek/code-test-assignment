import { AppPage } from './app.po';
import { browser, logging, by, Key } from 'protractor';


describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    // TODO:
    it('should ensure sure app loads', () => {
        page.navigateTo();
        const title = browser.findElement(by.className('title')).getText();
        expect(title).toEqual('Tequila Mockingbird');
    });

    // TODO:
    it('should route to a random recipe, and ensure another route there is different than the first', () => { 
        page.navigateTo();
        browser.findElement(by.className('random-button')).click();
        const randomName1 = browser.findElement(by.className('detail-name')).getText();
        expect(randomName1).toBeTruthy();

        browser.findElement(by.className('random-button')).click();
        const randomName2 = browser.findElement(by.className('detail-name')).getText();
        expect(randomName2).toBeTruthy();

        expect(randomName1).not.toEqual(randomName2);
    });

    it('should display cocktails page when Cocktail List button is clicked on home page', () => {
        page.navigateTo();
        browser.findElement(by.className('list-button')).click();
        const url = browser.getCurrentUrl();
        expect(url).toContain('cocktails');
    });

    // TODO: Add any additional you see fit
    // it('should ...', () => { ... });

    //This test does not pass consistently; I actually think there might be a bug in the code.
    //The search does not execute after the search button is clicked.
    //This could also be an issue of the automated test runner performing the actions slightly differently from a manual user.
    it('should display recipes that match a search term', () => { 
        page.navigateTo();
        browser.findElement(by.css('input')).sendKeys('Tom Collins');
        browser.findElement(by.buttonText('Search')).click();
        
        //normally I would use a browser.wait instead of browser.sleep here -- just ran out of time . . .
        browser.sleep(2000);
        
        const recipeTitle = browser.findElement(by.className('mat-card-title')).getText();
        expect(recipeTitle).toEqual('Tom Collins');
    });


    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(
            jasmine.objectContaining({
                level: logging.Level.SEVERE,
            } as logging.Entry)
        );
    });
});
