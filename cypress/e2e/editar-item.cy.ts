describe('deveria editar um item', () => {
    it('editar-item', () => {
        cy.visit('http://localhost:5173/')

        cy.contains('Testes em Cypress', { timeout: 6000 })
            .parent()
            .find('button[aria-label="edit"]')
            .click()

        cy.get('input[name="description"]')
            .clear()
            .type('Testes em Cypress atualizado')
        cy.get('button[type="submit"]').click()

        cy.contains('Testes em Cypress atualizado', { timeout: 6000 })
    })
})
