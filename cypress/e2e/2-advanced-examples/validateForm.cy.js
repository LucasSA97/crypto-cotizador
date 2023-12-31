describe('Valida form', () => {
    it('Submit al form', () => {
        cy.visit('http://127.0.0.1:3000/index.html')

        cy.get('[data-cy="resultad-submit"]').click()

        cy.get('[data-cy="alerta"]')
            .invoke('text')
            .should('equal', 'Ambos campos son obligatorios')
    })
})

//Rellena los campos
describe('Escribir en Formulario con Cypress', () => {
    it('Escribir en campos del formulario', () => {
        // Visitar la página con el formulario
        cy.visit('http://tu-app.com')

        // Escribir en el campo de nombre
        cy.get('[data-cy="nombre"]').type('John Doe')

        // Escribir en el campo de email
        cy.get('[data-cy="email"]').type('john@example.com')

        // Escribir en el campo de mensaje
        cy.get('[data-cy="mensaje"]').type('Hola, esto es un mensaje de prueba.')

        // Puedes también usar clear para asegurarte de que el campo esté vacío antes de escribir
        // cy.get('[data-cy="nombre"]').clear().type('Nuevo Nombre')

        // Hacer clic en el botón de enviar (si es necesario)
        cy.get('[data-cy="submit"]').click()
    })
})



