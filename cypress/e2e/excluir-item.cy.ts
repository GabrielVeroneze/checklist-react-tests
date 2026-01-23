describe('deveria exluir um item', () => {
    it('excluir-item', () => {
        cy.visit('http://localhost:5173/')

        cy.contains('Testes em Cypress', { timeout: 6000 })
            .parent()
            .find('button[aria-label="delete"]')
            .click()

        cy.contains('Testes em Cypress', { timeout: 6000 }).should('not.exist')
    })
})
