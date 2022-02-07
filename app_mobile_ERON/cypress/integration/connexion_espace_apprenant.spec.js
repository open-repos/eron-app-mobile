describe('Appli-Test-Connexion-Apprenant', () => {
    beforeEach(() => {
        cy.viewport('iphone-x')
        cy.visit('/');
      })
    it('Connexion via Menu Hamburger', () => {
        cy.goToEspaceApprenant()
    });
})