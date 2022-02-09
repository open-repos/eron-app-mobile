/// <reference types="cypress" />

function formatString(text) {
  return text.replace(/[^\d,]/g, ""); //.replace('\u00A0','').trim();
}

describe("Appli-Test-Shop", () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
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

    cy.get("#btn-buy").contains("Retourner à la boutique").click();
  });

  it('opens and closes the cart modal . Open via icone "Cart" et close via Bouton "Retourner à la boutique"', () => {
    cy.get("#cart").click();
    cy.get("ion-modal").should("exist");
    cy.get("ion-modal ion-header").contains("Panier");
    cy.get(".buttons-last-slot > .button").click();
  });

  it('Ajout du premier article 2 fois dans le panier"', () => {
    cy.get("#number-notif").should("not.exist");
    // for (let i =1; i< nbtimeClickedOnItem0+1;i++){
    cy.get(":nth-child(1) > .ion-text-center > .button").click();
    cy.get("#number-notif").invoke("text").then(parseFloat).should("be.eq", 1);
    // Comparaison valeur dans item de shopping entre l'ajout d'un élément
    cy.get("#number-notif")
      .invoke("text")
      .then(parseFloat)
      .then((nbItemCart_bf) => {
        // ajout d'un article
        cy.get(":nth-child(1) > .ion-text-center > .button").click();
        //Comparaison avec la valeur précédente
        cy.get("#number-notif")
          .invoke("text")
          .then(parseFloat)
          .should((nbItemCart_after) => {
            expect(nbItemCart_after).be.gt(nbItemCart_bf);
          });
        // }
      });
    // cy.get("#number-notif").contains('1')
  });

  context("Boutique  avec selection du premier article 2 fois ", () => {
    beforeEach(() => {
      cy.get("#card-article-0")
        .find("ion-card-title")
        .invoke("text")
        .its(0)
        .as("cardTitle");
      cy.get("#card-article-0")
        .find(".price")
        .invoke("text")
        .then(parseFloat)
        .as("cardPrice");
      cy.get("#number-notif").invoke("text").then(parseFloat).as("nbIconShop");
      cy.get("@nbIconShop").then((nbIconShop) => {
        cy.get("@cardPrice").then((priceArticle) => {
          const total = nbIconShop * priceArticle;
          cy.wrap(total).as("totalPriceArticle");
        });
      });
    });
    before(() => {
      cy.get("#cart").click();
    });

    context("Dans le panier, verification des informations", () => {
      beforeEach(() => {
        cy.get("ion-row#article-0").should("exist");
        cy.get("ion-row#article-0")
          .children(".prix")
          .should("exist")
          .invoke("text")
          .then(parseFloat)
          .as("unitPrice");
        cy.get("ion-row#article-0")
          .children(".qtity")
          .should("exist")
          .invoke("text")
          .then(parseFloat)
          .as("qtityCart");
        cy.get("ion-row#article-0")
          .children(".titre")
          .should("exist")
          .as("titleItem");
        cy.get("ion-row#article-0")
          .children(".total-item")
          .invoke("text")
          .then(parseFloat)
          .as("totalByItem");
        cy.get("strong")
          .invoke("text")
          .then(formatString)
          .then(parseFloat)
          .as("totalCart");
      });

      it("Panier contient bien l'article selectionné , devrait avoir 'article-0'", () => {
        cy.get("@cardTitle").then((titreArticle) => {
          cy.get("@titleItem").contains(titreArticle);
        });
      });

      it("Le prix unitaire correspond au prix annoncé dans la boutique", () => {
        cy.get("@cardPrice").then((priceArticle) => {
          console.log("Prix unitaire devrait être égale à : ", priceArticle);
          cy.get("@unitPrice").should("be.eq", priceArticle);
          // cy.get("ion-row#article-0").children('.prix').invoke('text').then(parseFloat).should('be.eq',priceArticle)
        });
      });

      it("La quantité d'article correspond bien au nombre d'article selectionné (ici on est dans le contexte ou l'article a été ajouté 2 fois)", () => {
        cy.get("@nbIconShop").then((nbiconShop) => {
          console.log("Nombre affiché par l'icone shop", nbiconShop);
          cy.get("@qtityCart").should("be.eq", nbiconShop);
          // cy.get("ion-row#article-0").children('.qtity').invoke('text').then(parseFloat).should('be.eq',nbiconShop)
        });
      });

      it("Le total par article correspond bien à la quantité * le prix unitaire et le Total global également", () => {
        cy.get("@qtityCart").then((qtityCart) => {
          cy.get("@unitPrice").then((unitPrice) => {
            console.log("Sous total par article", qtityCart * unitPrice);
            const subTotal = qtityCart * unitPrice;
            cy.get("@totalByItem").should("be.eq", subTotal);
            // cy.get("ion-row#article-0").children('.total-item').invoke('text').then(parseFloat).should('be.eq',subTotal)
            cy.get("@totalCart").should("be.eq", subTotal);
            // cy.get("strong").invoke('text').then(formatString).then(parseFloat).should('be.eq',subTotal)
          });
        });
      });

      context(
        "test d'Alert lors du clique sur le bouton 'vider le panier'",
        () => {
          beforeEach(() => {
            cy.get("#btn-clear-all").click();
            cy.contains("Alert");
          });
          it('Clique sur "Annuler" dans Alert devrait rester dans le panier et article encore présent', () => {
            // cy.get('#btn-clear-all').click()
            // cy.contains("Alert")
            cy.get(".alert-button-role-cancel > .alert-button-inner").click();
            cy.get("ion-row#article-0").should("exist");
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
    });
  });

  context(
    "Boutique avec selection du premier article 2 fois + deuxieme article 1 fois ",
    () => {
      before(() => {
        cy.viewport("iphone-x");
        cy.wrap(2).as("nbtimeClickedOnItem0");
        cy.wrap(1).as("nbtimeClickedOnItem1");
        // it('Ajout de deux articles différents dans le panier (1er 2 fois et 2nd 1 fois)"', () => {
        cy.get("#number-notif").should("not.exist");
        cy.get("@nbtimeClickedOnItem0").then((nbtimeClickedOnItem0) => {
          for (let i = 1; i < nbtimeClickedOnItem0 + 1; i++) {
            cy.get(":nth-child(1) > .ion-text-center > .button").click();
            cy.get("#number-notif")
              .invoke("text")
              .then(parseFloat)
              .should("be.eq", i);
          }
          cy.get("#card-article-1").find("ion-button").click();
          // cy.get("#number-notif").contains('1')
          cy.get("#cart").click();
        });
      });
      beforeEach(() => {
        // const  articlePanier= ['article-0','article-1'];
        // articlePanier.forEach((item,index)=> {
        //     var elementItemShop = "#card-"+item
        //     var idItem = index.toString()
        const articlePanier = ["article-0", "article-1"];
        articlePanier.forEach((item, index) => {
          var elementItemShop = "#card-" + item;
          var idItem = index.toString();
          cy.get(elementItemShop)
            .find("ion-card-title")
            .invoke("text")
            .its(0)
            .as("cardTitle" + idItem);
          cy.get(elementItemShop)
            .find(".price")
            .invoke("text")
            .then(parseFloat)
            .as("cardPrice" + idItem);
          console.log("cardPrice", index);
        });
        cy.get("#number-notif")
          .invoke("text")
          .then(parseFloat)
          .as("nbIconShop");
        cy.get("@nbIconShop").then((nbIconShop) => {
          cy.get("@cardPrice0").then((priceArticle) => {
            const total = nbIconShop * priceArticle;
            cy.wrap(total).as("totalPriceArticle");
          });
        });
      });
      context(
        "Dans le panier, verification des informations pour chacun des deux articles",
        () => {
          beforeEach(() => {
            cy.wrap(2).as("nbtimeClickedOnItem0");
            cy.wrap(1).as("nbtimeClickedOnItem1");
            // const  articlePanier= ['article-0','article-1'];
            // articlePanier.forEach((item,index)=> {
            const articlePanier = ["article-0", "article-1"];
            articlePanier.forEach((item, index) => {
              var idItem = index.toString();
              var elementItemCart = "ion-row#" + item;
              //    var idItem = index.toString()
              cy.get(elementItemCart).should("exist");
              cy.get(elementItemCart)
                .children(".prix")
                .should("exist")
                .invoke("text")
                .then(parseFloat)
                .as("unitPrice" + idItem);
              cy.get(elementItemCart)
                .children(".qtity")
                .should("exist")
                .invoke("text")
                .then(parseFloat)
                .as("qtityCart" + idItem);
              cy.get(elementItemCart)
                .children(".titre")
                .should("exist")
                .as("titleItem" + idItem);
              cy.get(elementItemCart)
                .children(".total-item")
                .invoke("text")
                .then(parseFloat)
                .as("totalByItem" + idItem);
            });
            cy.get("@qtityCart0").then((qtityCart0) => {
              cy.get("@qtityCart1").then((qtityCart1) => {
                const qtityCartAllItem = qtityCart0 + qtityCart1;
                console.log("qtityCartAllItem", qtityCartAllItem);
                cy.wrap(qtityCartAllItem).as("qtityCartAllItem");
              });
            });
            cy.get("@totalByItem0").then((totalByItem0) => {
              cy.get("@totalByItem1").then((totalByItem1) => {
                const totalCartAllItem = totalByItem0 + totalByItem1;
                console.log("totalCartAllItem", totalCartAllItem);
                cy.wrap(totalCartAllItem).as("totalCartAllItem");
              });
            });
            cy.get("strong")
              .invoke("text")
              .then(formatString)
              .then(parseFloat)
              .as("totalCart");
          });
          const articlePanier = ["article-0", "article-1"];
          articlePanier.forEach((item, index) => {
            var idItem = index.toString();
            it(`Panier contient bien ${item} selectionné , devrait avoir ${item} avec le titre associé`, () => {
              cy.get("@cardTitle" + idItem).then((titreArticle) => {
                cy.get("@titleItem" + idItem).contains(titreArticle);
              });
            });
            it(`Le prix unitaire de ${item} correspond au prix annoncé dans la boutique`, () => {
              cy.get("@cardPrice" + idItem).then((priceArticle) => {
                console.log(
                  "Prix unitaire devrait être égale à : ",
                  priceArticle
                );
                cy.get("@unitPrice" + idItem).should("be.eq", priceArticle);
                // cy.get("ion-row#article-0").children('.prix').invoke('text').then(parseFloat).should('be.eq',priceArticle)
              });
            });
            it(`L${item} devrait avoir `, () => {
              cy.get("@qtityCart" + idItem).then((qtityCart) => {
                console.log("Quantité de l'article : ", qtityCart);
                cy.get("@nbtimeClickedOnItem" + idItem).then(
                  (nbtimeClickedOnItem) => {
                    cy.get("@qtityCart" + idItem).should(
                      "be.eq",
                      nbtimeClickedOnItem
                    );
                  }
                );
                // cy.get("ion-row#article-0").children('.prix').invoke('text').then(parseFloat).should('be.eq',priceArticle)
              });
            });
          });

          it("La quantité d'article correspond bien au nombre d'article selectionné dans la boutique (ici on est dans le contexte ou article 1 a été ajouté 2 fois + article 2  a été ajouté 1 fois )", () => {
            cy.get("@nbIconShop").then((nbiconShop) => {
              console.log("Nombre affiché par l'icone shop", nbiconShop);
              cy.get("@qtityCartAllItem").should("be.eq", nbiconShop);
              // cy.get("ion-row#article-0").children('.qtity').invoke('text').then(parseFloat).should('be.eq',nbiconShop)
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
