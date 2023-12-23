import { GmailPage } from "../pageobjects/GmailPage"

const gp = new GmailPage();
describe('testing demo site', () => {
    it('should click checkbox', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes')
        await gp.poweredby.waitForDisplayed()
        const t = await gp.checkbox
        await console.log(`This is the title element text${t.getText()}`)
        if (await t.getText() == ' checkbox 1') {
            await t.click()
        }
    })
    it('should check for loop checkboxes as per text', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes')
        await gp.poweredby.waitForDisplayed()
        console.log(gp.poweredby.getText(), 'this is the text of poweredby')
        const ch = await gp.checkboxes
        for (let i = 0; i < ch.length; i++) {
            const cht = await ch[i].getText()
            if (cht === ' checkbox 2') {
                await ch[i].click()
                await ch[i].isEnabled()
                const p = ch[i].isElementSelected
                console.log(p)
            }
        }
    })
    it('should click for loop all checkboxes', async () => {
        await browser.url('https://the-internet.herokuapp.com/checkboxes')
        await gp.poweredby.waitForDisplayed()
        console.log(gp.poweredby.getText(), 'this is the text of poweredby')
        const ch = await gp.checkboxes
        for (let i = 0; i < ch.length; i++) {
            browser.pause(10000)
            await ch[i].click()
            const isEnabled = await ch[i].isEnabled();
            console.log(`Checkbox ${i + 1} is enabled: ${isEnabled}`);
            const isSelected = await ch[i].isSelected();
            console.log(`Checkbox ${i + 1} is selected: ${isSelected}`);
            (await gp.poweredby)

        }
    })
    it('should handle selenium link and do actions by switching window', async () => {
        await gp.seleniumlink.click()
        const desired_tit = "Elemental Selenium | Elemental Selenium"
        const allwin = await browser.getWindowHandles();
        for (const i of allwin) {
            await browser.switchToWindow(i)
            const act_title = await browser.getTitle();
            if (act_title == desired_tit) {
                break;
            }
        }
        await gp.joinmail.waitForClickable()
        await gp.joinmail.click()
        await browser.pause(5000)
    })
})