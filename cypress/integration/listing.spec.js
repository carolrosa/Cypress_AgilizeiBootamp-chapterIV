/// <reference types="cypress" />

describe('Listings', () => {
    it('When there is no record, then the listing should be empty', () => {
        cy.fixture('listing-empty').then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        
        cy.visit('/listagem.html')

        cy.get('table tbody tr').should('have.length', 0)
    });

    it('When there are one or more records, then the listing should display each record ', () => {
        cy.fixture('listing-itens').then(data => {
            window.localStorage.setItem('data', JSON.stringify(data))
        })
        
        cy.visit('/listagem.html')

        cy.get('table tbody tr').should('have.length', 2)
    });
});