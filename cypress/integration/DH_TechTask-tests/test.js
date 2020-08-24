// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { myPageList } from '../../page-objects/myPageList';

describe('Test Suite for Technical tasks', () => {

    context('REQ-UI-01 - The Title should be "UI Testing Site" on every site', () => {

        Given('Open Home Page', () => {
            myPageList.visitHome();
        });
        Then('Home page Title should equal to "UI Testing Site"', () => {
            cy.get('head > title').should('have.text', 'UI Testing Site')
        });

        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        Then('Form page Title should equal to "UI Testing Site"', () => {
            cy.get('head > title').should('have.text', 'UI Testing Site')
        });

        Given('Open Hello Page', () => {
            myPageList.visitHello();
        });
        Then('Hello page Title should equal to "UI Testing Site"', () => {
            cy.get('head > title').should('have.text', 'UI Testing Site')
        });

    });

    context('REQ-UI-02 - The Company Logo should be visible on every site', () => {

        Given('Open Home Page', () => {
            myPageList.visitHome();
        });
        Then('The Company Logo should be visible on Home page', () => {
            cy.get('#dh_logo').should('be.visible')
        });
  
        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        then('The Company Logo should be visible on Form page', () => {
            cy.get('#dh_logo').should('be.visible')
        });
  
        Given('Open Hello Page', () => {
            myPageList.visitHello();
        });
        Then('The Company Logo should be visible on Hello page', () => {
            cy.get('#dh_logo').should('be.visible')
        });

    });

    context('REQ-UI-03 - When I click on the Home button, I should get navigated to the Home page', () => {

        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        When('Click on Home button', () => {
            cy.get('a[id="home"][href="/"]' ).contains('Home').click();
        }); 
        Then('Check the Homr page url', () => {    
            cy.url().should('equal', 'http://uitest.duodecadits.com/')
        });

    });

    context('REQ-UI-04 - When I click on the Home button, it should turn to active status', () => {

        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        Then('Check Home button status: Inactive', () => {
            cy.get('a[id="home"][href="/"]' ).contains('Home').parent('li').should('not.have.class', 'active')
        });
        When('Click on Home button', () => {
            cy.get('a[id="home"][href="/"]' ).contains('Home').click();
        }); 
        Then('Check Home button status: Active', () => {
            cy.get('a[id="home"][href="/"]' ).contains('Home').parent('li').should('have.class', 'active')
        });

    });

    context('REQ-UI-05 - When I click on the Form button, I should get navigated to the Form page', () => {

        When('Navigate to Form page and check url', () => {
            myPageList.visitForm();
        });

    });

    context('REQ-UI-06 - When I click on the Form button, it should turn to active status', () => {

        Given('Open Home Page', () => {
            myPageList.visitHome();
        });
        Then('Check Form button status: Inactive', () => {
            cy.get('a[id="form"][href="/form.html"]' ).contains('Form').parent('li').should('not.have.class', 'active')
        });
        When('Click on Form button', () => {
            cy.get('a[id="form"][href="/form.html"]' ).contains('Form').click();
        }); 
        Then('Check Form button status: Active', () => {
            cy.get('a[id="form"][href="/form.html"]' ).contains('Form').parent('li').should('have.class', 'active')
        });

    });

    context('REQ-UI-07 - When I click on the Error button, I should get a 404 HTTP response code', () => {

        Given('send GET method with url to the error page and get response with error code 404', () => {
            cy.server()
            cy.request( {url: 'http://uitest.duodecadits.com/error', failOnStatusCode: false} )
            .then((response) => {
                expect(response.status).to.eq(404)
            });
        });

    });

    context('REQ-UI-08 - When I click on the UI Testing button, I should get navigated to the Home page', () => {

        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        When('Click on UI Testing button', () => {
            cy.get('a[class="navbar-brand"][id="site"][href="/"]' ).contains('UI Testing').click();
        }); 
        Then('Check the Home page url', () => {    
            cy.url().should('equal', 'http://uitest.duodecadits.com/')
        });

    });

    context('REQ-UI-09 - The following text should be visible on the Home page in <h1> tag: "Welcome to the Docler Holding QA Department"', () => {

        Given('Open Home Page', () => {
            myPageList.visitHome();
        });
        Then('Check the text in <h1> tag', () => {
            cy.get('body > div > div.ui-test > h1' ).should('have.text', 'Welcome to the Docler Holding QA Department');
        }); 
    });

    context('REQ-UI-10 - The following text should be visible on the Home page in <p> tag: "This site is dedicated to perform some exercises and demonstrate automated web testing."', () => {

        Given('Open Home Page', () => {
            myPageList.visitHome();
        });
        Then('Check the text in <p> tag', () => {
            cy.get('body > div > div.ui-test > p').should('have.text', 'This site is dedicated to perform some exercises and demonstrate automated web testing.');
        }); 
    });

    context('REQ-UI-11 - On the Form page, a form should be visible with one input box and one submit button', () => {

        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        Then('Check the input box is visible', () => {
            cy.get('input[id="hello-input"][class="form-control"][type="text"][name="myName"][placeholder="You name here..."]').should('be.visible');
        }); 
        And('Check the submit button is visible', () => {
            cy.get('button[id="hello-submit"][class="btn btn-default"][type="submit"]').should('be.visible');
        }); 

    });

    context('REQ-UI-12 - On the Form page, if you type <value> the input field and submit the form, you should get redirect to the Hello page, and the following text should appear: <result>', () => {

        Given('Open Form Page', () => {
            myPageList.visitForm();
        });
        When(`if I type {string}`, (value) => {

            cy.get('input[id="hello-input"][class="form-control"][type="text"][name="myName"][placeholder="You name here..."]').type(value);
        });
        And('submit', () => {
            cy.get('button[id="hello-submit"][class="btn btn-default"][type="submit"]').click();
        });
        Then('redirect to the Hello page', () => {
            cy.url().should('contain', 'http://uitest.duodecadits.com/hello.html')
        });
        And(`the following text should appear: {string}`, (result) => {
            cy.get('h1[id="hello-text"]').should('have.text',result)
            cy.log(`{result}`)
        });
        

    });

});