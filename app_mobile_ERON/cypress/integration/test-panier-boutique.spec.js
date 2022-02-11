/// <reference types="cypress" />
import items from '../fixtures/itemsShop.json'

var lodash = require('lodash');
describe("Appli-Test-Shop", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
    // cy.fixture('itemsShop').as('items')
  });
  it("Connexion via Menu Hamburger", () => {
    cy.visit("/");
    cy.goToEspaceApprenant();
  });

  it("Aller sur tab boutique", () => {
    cy.get("#tab-button-tab-boutique").click();
    cy.contains("Boutique");
  });
  it('opens and closes the cart modal . Open via icone "Cart" et close via Bouton "Retourner à la boutique"', () => {
    cy.get("#cart").click();
    cy.get("ion-modal").should("exist");
    cy.get("ion-modal ion-header").contains("Panier");

    cy.get("#btn-back-shop").contains("Retourner à la boutique").click();
  });

  it('opens and closes the cart modal . Open via icone "Cart" et close via Bouton "Retourner à la boutique"', () => {
    cy.get("#cart").click();
    cy.get("ion-modal").should("exist");
    cy.get("ion-modal ion-header").contains("Panier");
    cy.get(".buttons-last-slot > .button").click();
  });

  const singleItem = [items[0].id];
  const clickItemToCart = [2]
  context(`Boutique avec selection d'un seul article: ${singleItem}, sélectionné ${clickItemToCart}`, () => {
    before(() => {
      cy.PageBoutiqueSelectArticle(singleItem,clickItemToCart)
    });
    beforeEach(() => {
      cy.GetAllInShopItems(singleItem,clickItemToCart)
    });
    context("Dans le panier, verification des informations", () => {
      before(()=>{
        cy.get("#cart").click();
      })
      beforeEach(() => {
        cy.GetAllInfoCartItemsAndCheckExist(singleItem,clickItemToCart)
      });

      singleItem.forEach((item, index) => {
          it(`Panier contient bien ${item} selectionné , devrait avoir ${item} avec le titre associé`, () => {
            cy.checkTitleCartSameAsShop(index)
      });


      it(`Le prix unitaire de ${item} correspond au prix annoncé dans la boutique`, () => {
          cy.checkUnitPriceCartSameAsShop(index)
      });

    
     it(`${item} devrait avoir une quantité = à ${clickItemToCart[index]} `, () => {
          cy.checkQtitySelectedInShop(index)
      });
    })

      it("Le total par article correspond bien à la quantité * le prix unitaire et le Total global également", () => {
        singleItem.forEach((item, index) => {
          var idItem = index.toString();
        cy.get("@qtityCart"+idItem).then((qtityCart) => {
          cy.get("@unitPrice"+idItem).then((unitPrice) => {
            console.log("Sous total par article", qtityCart * unitPrice);
            const subTotal = qtityCart * unitPrice;
            cy.get("@totalByItem"+idItem).should("be.eq", subTotal);
            // cy.get("ion-row#cart-"+singleItem).children('.total-item').invoke('text').then(parseFloat).should('be.eq',subTotal)
            cy.get("@totalCart").should("be.eq", subTotal);
            // cy.get("strong").invoke('text').then(formatString).then(parseFloat).should('be.eq',subTotal)
          });
        });})
      });

      context(
        "test d'Alert lors du clique sur le bouton 'vider le panier'",
        () => {
          beforeEach(() => {
            cy.get("#btn-clear-all").click({force: true});
            cy.contains("Alert");
          });
          it('Clique sur "Annuler" dans Alert devrait rester dans le panier et article encore présent', () => {
            // cy.get('#btn-clear-all').click()
            // cy.contains("Alert")
            cy.get(".alert-button-role-cancel > .alert-button-inner").click();
            cy.get("ion-row#cart-"+singleItem[0]).should("exist");
          });
          it('Clique sur "Confirmer" dans Alert devrait retourner sur boutique + icone panier vide"', () => {
            // cy.get('#btn-clear-all').click()
            // cy.contains("Alert")
            cy.get(":nth-child(2) > .alert-button-inner").click();
            cy.contains("Boutique");
            cy.get("#number-notif").should("not.exist");
          });
        }
      );

      context("Suppression d'un article (cas avec 1 seul article dans le panier)",()=>{
        before(() => {
          cy.PageBoutiqueSelectArticle(singleItem,clickItemToCart)
          cy.get("#cart").click();
        });
        it('Suprresion du seul article présent dans le panier via l icone trash qui lui est asscoié, devrait supprimer la présence de l article + retourner un message : Votre panier est vide', () => {
        cy.get("ion-row#cart-"+singleItem[0]).find(".icon-trash-item").click()
        cy.get("ion-row#cart-"+singleItem[0]).should("not.exist")
        cy.contains("Votre panier est vide")
        cy.get("#btn-back-shop").should("exist").contains("Retourner à la boutique").click()
        cy.contains("Boutique");
        cy.get("#number-notif").should("not.exist");
        })
      })
    })


    });



  const itemsCartShop = [items[0].id, items[3].id];
  const clickItemsToCart = [2,1]
  context(`Boutique avec selection de : ${itemsCartShop.join(",")} cliqué respectivement ${clickItemsToCart.join(",")} `,() => {
    before(() => {
      cy.PageBoutiqueSelectArticle(itemsCartShop,clickItemsToCart)
      });
      beforeEach(() => {
        cy.GetAllInShopItems(itemsCartShop,clickItemsToCart)
      });
      context(
        "Dans le panier, verification des informations pour chacun des deux articles",
        () => {
          before(()=>{
            cy.get("#cart").click();
          })
          beforeEach(() => {
            cy.GetAllInfoCartItemsAndCheckExist(itemsCartShop,clickItemsToCart)
          });
          itemsCartShop.forEach((item, index) => {
            it(`Panier contient bien ${item} selectionné , devrait avoir ${item} avec le titre associé`, () => {
              cy.checkTitleCartSameAsShop(index)
            });
            it(`Le prix unitaire de ${item} correspond au prix annoncé dans la boutique`, () => {
              cy.checkUnitPriceCartSameAsShop(index)
            });
            it(`${item} devrait avoir une quantité = à ${clickItemsToCart[index]} `, () => {
              cy.checkQtitySelectedInShop(index)
            });
          });

          it(`La quantité d'article total devrait correspondre à la somme des click effectués dans la boutique: ${lodash.sum(clickItemsToCart)} `, () => {
            cy.get("@nbIconShop").then((nbiconShop) => {
              console.log("Nombre affiché par l'icone shop", nbiconShop);
              cy.get("@qtityCartAllItem").should("be.eq", nbiconShop);
            });
          });
          it("La somme total du panier doit être égal à la somme des sous totaux par article", () => {
            cy.get("@totalCartAllItem").then((totalCartAllItem) => {
              cy.get("@totalCart").should("be.eq", totalCartAllItem);
            });
          });
        }
      );
    }
  );
});
