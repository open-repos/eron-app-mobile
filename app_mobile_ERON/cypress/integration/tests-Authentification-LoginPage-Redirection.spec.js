/// <reference types="cypress" />
import user from "../fixtures/user.json"
// require('cypress-plugin-tab');

describe("Test de l'authentification, persistence (localstorage), redirecton vers page souhaité (queryParams)", () => {
    beforeEach(() => {
        cy.viewport('iphone-x')
      })
    it('Montre la home page', () => {
        cy.clearLocalStorage()
        cy.visit('/');
        cy.contains("Bienvenue sur l'application d'ERON Santé");
    });
 
    // it('Montre la faq page et devrait contenir 6 elements', () => {
    //     cy.visit('/faq');
    //     cy.get('app-accordion-item').find('ion-card').should('have.length', 6)

    //     cy.contains("Comment obtenir mon attestation de formation ?");
    // });

    // it("Nombre d'element dans le menu = 6", () => {
    //     cy.get('ion-menu-button').click();
    //     cy.wait(1000)
    //     const ion_menu_button_children=cy.get('.menu-type-overlay > ion-content.md').children().should('have.length',6)
    //     console.log(ion_menu_button_children)
    // });

    context("Verification du formulaire construit en suivant les règles de qualité UX-UI",()=>{
        it('Page de connexion via menu', () => {
            cy.get('ion-menu-button').click();
            cy.get(':nth-child(6) > ion-menu-toggle.md > .item').should('contain','Connexion').click();
            cy.get('.menu-type-overlay').click(310,100)
        });
    
    
        it('Test Formulaire de connexion - Au clic sur champ Email doit avoir Focus border et password non focus', ()=>{
            cy.get("#email").focus() //.dblclick()
            cy.focused().click()
            // cy.get("#email").should('have.css','border-color','rgb(23, 75, 151)')
            cy.get('#email').should('have.focus') 
            cy.get('#password').should('not.have.focus') 
        })
        it('Test Formulaire de connexion - Au clic sur champ Password doit avoir Focus border et email non focus', ()=>{
            cy.get("#password").focus()
            cy.focused().should('have.focus') 
            // cy.get("#email").should('have.css','border-color','rgb(23, 75, 151)')
            cy.get('#email').should('not.have.focus') 
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
            cy.get('#password').type(`${password}{enter}`,{sensitive:true})
            cy.get('#password')
                .invoke('attr','type')
                .should('eq','password')
            cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa')
                .invoke('attr','data-icon')
                .should('eq','eye')
        })
    
        it('Test Formulaire de connexion - Fonctionnalité `cacher - montrer mot de passe`- mdp devrait être montré type=text et icone eye-slash ', ()=>{
            var password="myPassWord"
            cy.get('#password').type(`${password}{enter}`,{sensitive:true})
            cy.get('#password')
                .invoke('attr','type')
                .should('eq','password')
            cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa').click()
            cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa').invoke('attr','data-icon').should('eq','eye-slash')
            cy.get('.mdp-input > .ng-fa-icon > .svg-inline--fa').click()
        })
    
        it('Test erreur 1: Si tentative de connexion password vide et email invalide/vide',()=>{
            cy.get('#email').clear()
            cy.get('#password').clear()
            cy.get('form').contains('Connexion').click()
            cy.contains('Mot de passe non renseigné et Email non valide')
        })
    
        it('Test erreur 2: Si tentative de connexion password vide seulement',()=>{
            cy.get('#email').clear()
            cy.get('#password').clear()
            var email = "andria.capai@gmail.com"
            cy.get('#email').type(`${email}{enter}`)
            cy.get('form').contains('Connexion').click()
            cy.contains('Mot de passe non renseigné')
        })
    
        it('Test erreur 3: Si tentative de connexion au click avec 2 champs remplis mais email non valide',()=>{
            cy.get('#email').clear()
            cy.get('#password').clear()
            var email = "andria.capai&gmail.com"
            var password="myPassWord"
            cy.get('#email').type(`${email}{enter}`)
            cy.get('#password').type(`${password}{enter}`,{sensitive:true})
            cy.get('form').contains('Connexion').click()
            cy.get('#error-form')
                .should('have.attr','color','danger')
                .contains('Email non valide')
        })
    
        it('Test connexion OK: Les deux champs remplis et valide',()=>{
            cy.get('#email').clear()
            cy.get('#password').clear()
            var email = "andria.capai@gmail.com"
            var password="myPassWord"
            cy.get('#email').type(`${email}{enter}`)
            cy.get('#password').type(`${password}{enter}`,{sensitive:true})
            cy.get('form').contains('Connexion').click()
            cy.url().should('include', '/tabs/tab-suivi')
            cy.clearLocalStorage()
        })
    })

    context("Verification des 'authGuard' sur les pages des l'espace apprenant + redirection vers la page souhaité après authentification",()=>{
        before(()=>{
            cy.visit('/');
        })    
    
        it("Test AuthGuard -Espace apprenant bloqué si pas connecté (test chaque tabs de l'espace apprenant) ", ()=>{
            const pageApprenant = ['tab-profil','tab-profil','tab-suivi','tab-boutique']
            for (const page of pageApprenant){
                cy.visit('/tabs/'+page);
                cy.wait(1000)
                cy.url().should('include', '/login')
            }
        })
    
        it("Authentification avec user (issue du dossier fixture) et redirection vers la dernière page souhaité de l'espace devrait être: /tabs/tab-boutique + reload pour montrer persistence connexion (localstorage info)", ()=>{
            cy.get('#email').clear()
            cy.get('#password').clear()
            var email = user.email
            var password=user.password
            cy.get('#email').type(`${email}{enter}`)
            cy.get('#password').type(`${password}{enter}`,{sensitive:true})
            cy.get('form').contains('Connexion').click().should(()=>{
                expect(localStorage.getItem('userInfo')).to.eq(user.email)
            })
            cy.url().should('include', '/tabs/tab-boutique')
            cy.reload().should(()=>{
                expect(localStorage.getItem('userInfo')).to.eq(user.email)})
                cy.url().should('include', '/tabs/tab-boutique')
            
        })

    
    })
   
    // context("Verification de la persistence de login après reload de la page , le storage devrait contenir l'email utilisateur",()=>{
    //     it("Recharge de la page devrait rester sur le page boutique de l'espace apprenant + local storage devrait avoir l'email de l'utilisateur connecté",()=>{
    //         cy.reload()
    //         cy.url().should('include', '/tabs/tab-boutique')
    //         // expect(localStorage.getItem('userInfo')).to.eq(user.email)
    //     })
    // })

})