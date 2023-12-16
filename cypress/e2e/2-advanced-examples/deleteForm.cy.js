//Rellena los campos y lo elimina
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
    
    it('Elimina la cita', () => {
        cy.get('[data-cy="btn-eliminar"]')
            .click()

    })
})