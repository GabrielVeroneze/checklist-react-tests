describe('deveria criar um item', () => {
    it('deveria criar um item', () => {
        cy.visit('http://localhost:5173/')
        cy.get('[aria-label="criar item"]').click()
        cy.get('input[name="description"]').type('Testes em Cypress')
        cy.get('button[type="submit"]').click()
        cy.contains('Testes em Cypress', { timeout: 5000 })
    })
})
