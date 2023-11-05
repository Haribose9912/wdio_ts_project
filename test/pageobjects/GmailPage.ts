import Page from "./page"
import { $ } from '@wdio/globals'
export class GmailPage extends Page{


    public open () {
        return super.open_test_site('checkboxes');
    }

    get checkbox(){
        return $("//br/preceding-sibling::input")
    }
    get poweredby(){
        return $("//div[text()='Powered by ']")
    }
    get checkboxes(){
        return $$('[type="checkbox"]')
    }
    get seleniumlink(){
        return $("//*[text()='Elemental Selenium']")
    }
    get joinmail(){
        return $("//*[text()='Join the mailing list']")
    }
}  