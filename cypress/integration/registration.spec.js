/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()

describe('Registration', () => {
    it('When correctly filled, then the registration should be finished with success - fixed data', () => {
        cy.visit('/')

        //inputs text / textarea / email -> type
        cy.get('input[name="firstName"]').type('Harry')
        cy.get('input[name="lastName"]').type('Potter')
        cy.get('textarea[name="adress"]').type('Rua dos Alfeneiros, 4')
        cy.get('input[name="emailAdress"]').type('potter.h@mail.com')

        //inputs radio / checkboxes -> check
        cy.get('input[value="m"]').check()
        cy.get('input[type="checkbox"]').check('Netflix')
        cy.get('input[type="checkbox"]').check('Livros')

        //inputs combobox / select -> select
        cy.get('select#countries').select('Dinamarca', { force:true })
        cy.get('select#years').select('1980', { force:true })
        cy.get('select#months').select('Julho', { force:true })
        cy.get('select#days').select('31', { force:true })

        //inputs password -> type
        cy.get('input#firstpassword').type('Lero2022')
        cy.get('input#secondpassword').type('Lero2022')

        //inputs button -> click
        cy.get('button#submitbtn').click() 

        //assertions
        cy.url().should('contain', 'listagem')
    });

    it('When correctly filled, then the registration should be finished with success - using random data', () => {
        cy.visit('/')

        cy.get('input[name="firstName"]').type(chance.first())
        cy.get('input[name="lastName"]').type(chance.last())
        cy.get('textarea[name="adress"]').type(chance.address())
        cy.get('input[name="emailAdress"]').type(chance.email())

        cy.get('input[value="m"]').check()
        cy.get('input[type="checkbox"]').check('Netflix')
        cy.get('input[type="checkbox"]').check('Livros')

        cy.get('select#countries').select('Dinamarca', { force:true })
        cy.get('select#years').select('1980', { force:true })
        cy.get('select#months').select('Julho', { force:true })
        cy.get('select#days').select('31', { force:true })

        cy.get('input#firstpassword').type('Lero2022')
        cy.get('input#secondpassword').type('Lero2022')

        cy.get('button#submitbtn').click() 

        cy.url().should('contain', 'listagem')
    });
});