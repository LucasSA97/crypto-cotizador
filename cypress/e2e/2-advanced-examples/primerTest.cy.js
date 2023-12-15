/// <reference types="cypress" />

describe('Carga la pagina', () => {
    it('Carga la pagina', () => {
        cy.visit("http://127.0.0.1:3000/index.html")

        //Verifica el elemento y su texto
        cy.contains('[data-cy="elige-moneda"]', 'Elige tu Moneda')

        //Buena practica como está abajo = '[data-cy="elige-moneda"]'
        cy.get('[data-cy="elige-moneda"]').should('exist')

        //Verifica que exista y contenta un texto
        cy.get('[data-cy="elige-moneda"]')
            .invoke('text')
            .should('equal', 'Elige tu Moneda')
    })
    
})