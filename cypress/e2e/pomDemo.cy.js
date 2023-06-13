import { LoginPage } from "./Pages/login_page"

const loginPage = new LoginPage()


describe('Login Tests', () => {

beforeEach( () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

    it.only('Valid Login', () => {

       

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })

    it('InValid Login', () => {

       
        loginPage.enterUsername('InvalidAdmin')
        loginPage.enterPassword('INVALIDadmin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    })

})
