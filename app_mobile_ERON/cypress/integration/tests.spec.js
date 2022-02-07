describe('Web App Testing', () => {
    beforeEach(() => {
        cy.viewport('iphone-x')
      })
    it('Montre la home page', () => {
        cy.visit('/');
        cy.contains("Bienvenue sur l'application d'ERON Santé");
    });
 
    it('Montre la faq page et devrait contenir 6 elements', () => {
        cy.visit('/faq');
        cy.get('app-accordion-item').find('ion-card').should('have.length', 6)

        cy.contains("Comment obtenir mon attestation de formation ?");
    });

    it("Nombre d'element dans le menu = 6", () => {
        cy.get('ion-menu-button').click();
        cy.wait(1000)
        const ion_menu_button_children=cy.get('.menu-type-overlay > ion-content.md').children().should('have.length',6)
        console.log(ion_menu_button_children)
    });
    it('Page de connexion via menu', () => {
        cy.get(':nth-child(6) > ion-menu-toggle.md > .item').should('contain','Connexion').click();
        cy.get('.menu-type-overlay').click(310,100)
    });

    it('Test Formulaire de connexion - Au clic sur champ Email doit avoir Focus border et password non focus', ()=>{
        cy.get("#email").focus()
        cy.get("#email").should('have.css','border-color','rgb(23, 75, 151)')
        cy.get('#email').should('have.focus') 
        cy.get('#password').should('not.have.focus') 
    })

    it('Test Formulaire de connexion - erreur Email invalide avec border color et message', ()=>{
        var email = "andria.capai.com"
        cy.get('#email').type(`${email}{enter}`)
        cy.get('#email').should('have.class','border-invalid-error')
        cy.contains("L'Email n'est pas valide")
        cy.get('#email').clear()
    })

    it('Test Formulaire de connexion - Fonctionnalité cacher - montrer mot de passe - mdp devrait être caché type=password et icone fa-icon-eye', ()=>{
        var password="myPassWord"
        cy.get('#password').type(`${password}{enter}`)
        cy.get('#password')
            .invoke('attr','type')
            .should('eq','password')
        cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa')
            .invoke('attr','data-icon')
            .should('eq','eye')
    })

    it('Test Formulaire de connexion - Fonctionnalité cacher - montrer mot de passe - mdp devrait être montré type=text et icone oeil barré ', ()=>{
        var password="myPassWord"
        cy.get('#password').type(`${password}{enter}`)
        cy.get('#password')
            .invoke('attr','type')
            .should('eq','password')
        cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa').click()
        cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa').invoke('attr','data-icon').should('eq','eye-slash')
        cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa').click()
    })




});