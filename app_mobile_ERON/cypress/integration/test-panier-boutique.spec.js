describe('Appli-Test-Connexion-Apprenant', () => {
    beforeEach(() => {
        cy.viewport('iphone-x')
      })
    it('Connexion via Menu Hamburger', () => {
        cy.visit('/');
        cy.goToEspaceApprenant()
    });

    it('Aller sur tab boutique',()=>{
        cy.get('#tab-button-tab-boutique').click()
        cy.contains('Boutique')
    })
    it('opens and closes the cart modal . Open via icone "Cart" et close via Bouton "Retourner à la boutique"', () => {
        cy.get('#cart').click();
        cy.get('ion-modal').should('exist');
        cy.get('ion-modal ion-header').contains('Panier');

        cy.get('#btn-buy').contains('Retourner à la boutique').click()
        // cy.get('[data-cy=btn-close]').click();
        // cy.wait(200);
        // cy.get('ion-modal').should('not.exist');
    });

    it('opens and closes the cart modal . Open via icone "Cart" et close via Bouton "Retourner à la boutique"', () => {
        cy.get('#cart').click();
        cy.get('ion-modal').should('exist');
        cy.get('ion-modal ion-header').contains('Panier');        
        cy.get('.buttons-last-slot > .button').click()
        // cy.get('[data-cy=btn-close]').click();
        // cy.wait(200);
        // cy.get('ion-modal').should('not.exist');
    });

    it('Ajout de deux articles dans le panier"', () => {
        // cy.get(':nth-child(1) > .ion-text-center > .button').click()
        // cy.get('#number-notif').invoke('text').then(parseFloat).should('be.eq', 1)
        cy.get('#number-notif').should('not.exist')
        cy.get(':nth-child(1) > .ion-text-center > .button').click()
        cy.get('#number-notif').invoke('text').then(parseFloat).should('be.eq', 1)
        // Comparaison valeur dans item de shopping entre l'ajout d'un élément
        cy.get('#number-notif').invoke('text').then(parseFloat)
            .then((nbItemCart_bf) => {
                // ajout d'un article
                cy.get(':nth-child(1) > .ion-text-center > .button').click()
                //Comparaison avec la valeur précédente
                cy.get('#number-notif').invoke('text').then(parseFloat)
                    .should((nbItemCart_after) => {
                    expect(nbItemCart_after).be.gt(nbItemCart_bf)
                })
            })


        // cy.get("#number-notif").contains('1')
        cy.get('#cart').click();
    });
})