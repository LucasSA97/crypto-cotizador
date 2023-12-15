describe('Valida form', () => {
    it('Submit al form', () => {
        cy.visit('http://127.0.0.1:3000/index.html')

        cy.get('[data-cy="resultad-submit"]').click()

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Ambos campos son obligatorios')
    })
})



