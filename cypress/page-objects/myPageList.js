export class myPageList {
    static startingPage = 'http://uitest.duodecadits.com';

/*    static before() {
        this.startingPage = 'http://uitest.duodecadits.com';
    }*/

    static visitHome() {
        cy.visit(this.startingPage);
//        cy.get('a[id="home"][href="/"]' ).contains('Home').click();
        cy.url().should('equal', 'http://uitest.duodecadits.com/')
    }

    static visitForm() {
        cy.visit(this.startingPage);
        cy.get('a[id="form"][href="/form.html"]' ).contains('Form').click();
        cy.url().should('equal', 'http://uitest.duodecadits.com/form.html')
    }

    static visitHello() {
        cy.visit(this.startingPage);
        cy.get('a[id="form"][href="/form.html"]' ).contains('Form').click();
        cy.get('button[id="hello-submit"][class="btn btn-default"][type="submit"]' ).contains('Go!').click();
        cy.url().should('equal', 'http://uitest.duodecadits.com/hello.html?myName=')
    }

    static visitError() {
        cy.visit(this.startingPage);
        cy.get('a[id="error"][href="/error"]' ).contains('Error').click();
        cy.url().should('equal', 'http://uitest.duodecadits.com/error')
    }

}