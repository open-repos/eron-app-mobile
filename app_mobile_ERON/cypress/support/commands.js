// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


function formatString(text) {
  return text.replace(/[^\d,]/g, ""); //.replace('\u00A0','').trim();
}

function reducer(accumulator, curr){accumulator + curr};

Cypress.Commands.add("swipeLeft", () => {
  cy.get("ion-slides")
    .trigger("mousedown", { force: true, which: 1, pageX: 300, pageY: 400 })
    .trigger("mousemove", { force: true, which: 1, pageX: 1, pageY: 400 })
    .trigger("mouseup", { force: true });
});


Cypress.Commands.add("goToEspaceApprenant", () => {
  cy.get("ion-menu-button").click({force: true});
  cy.get(":nth-child(6) > ion-menu-toggle.md > .item")
    .should("contain", "Connexion")
    .click({force: true});
  cy.get(".menu-type-overlay").click(310, 100);
  var email = "dup.dup@gmail.com";
  cy.get("#email").type(`${email}{enter}`);
  var password = "myPassWord";
  cy.get("#password").type(`${password}{enter}`);
  cy.get('form').contains('Connexion').click({force: true})
  cy.url().should('include', '/tabs/tab-suivi')
  cy.wait(2000)
});
// Cypress.Commands.add("PageBoutiqueSelectArticle",(articlePanier=["article-0","article-1"],clickItemToCart=[2,1])=>{
//   var nbClick =0
//   // before(() => {
//     cy.viewport("iphone-x");
//     clickItemToCart.forEach((item,index)=>{
//       cy.wrap(item).as("nbtimeClickedOnItem"+index.toString());
//     })
//     cy.get("#number-notif").should("not.exist");
//     clickItemToCart.forEach((item,index)=>{
//     cy.get("@nbtimeClickedOnItem"+index.toString()).then((nbtimeClickedOnItem) => {
//       for (let i = 1; i < nbtimeClickedOnItem + 1; i++) {
//         cy.get("#shop-"+articlePanier[index]).find("ion-button").click();
//           nbClick=nbClick+1
//           console.log("nbClick",nbClick)
//           cy.get("#number-notif")
//           .invoke("text")
//           .then(parseFloat)
//           .should("be.eq", nbClick);
//       }})
//       // cy.get("#card-1").find("ion-button").click();
//     });
//     cy.get("#cart").click();
//   // });
// })
//   Cypress.Commands.add("GetAllInShopItems",(articlePanier=["article-0","article-1"])=>{
//   // beforeEach(() => {
//     articlePanier.forEach((item, index) => {
//       var elementItemShop = "#shop-" + item;
//       var idItem = index.toString();
//       cy.get(elementItemShop)
//         .find("ion-card-title")
//         .invoke("text")
//         .its(0)
//         .as("cardTitle" + idItem);
//       cy.get(elementItemShop)
//         .find(".price")
//         .invoke("text")
//         .then(parseFloat)
//         .as("cardPrice" + idItem);
//       console.log("cardPrice", index);
//     });
//     cy.get("#number-notif")
//       .invoke("text")
//       .then(parseFloat)
//       .as("nbIconShop");
//     cy.get("@nbIconShop").then((nbIconShop) => {
//       cy.get("@cardPrice0").then((priceArticle) => {
//         const total = nbIconShop * priceArticle;
//         cy.wrap(total).as("totalPriceArticle");
//       });
//     });})
//   // });
//   // context(
//   //   "Dans le panier, verification des informations pour chacun des deux articles",
//   //   () => {

//       // beforeEach(() => {
//     Cypress.Commands.add("GetAllInfoCartItemsAndCheckExist",(articlePanier=["article-0","article-1"],clickItemToCart=[2,1])=>{
//         clickItemToCart.forEach((item,index)=>{
//           cy.wrap(item).as("nbtimeClickedOnItem"+index.toString());
//         })

//         articlePanier.forEach((item, index) => {
//           var idItem = index.toString();
//           var elementItemCart = "ion-row#cart-" + item;
//           //    var idItem = index.toString()
//           cy.get(elementItemCart).should("exist");
//           cy.get(elementItemCart)
//             .children(".prix")
//             .should("exist")
//             .invoke("text")
//             .then(parseFloat)
//             .as("unitPrice" + idItem);
//           cy.get(elementItemCart)
//             .children(".qtity")
//             .should("exist")
//             .invoke("text")
//             .then(parseFloat)
//             .as("qtityCart" + idItem);
//           cy.get(elementItemCart)
//             .children(".titre")
//             .should("exist")
//             .as("titleItem" + idItem);
//           cy.get(elementItemCart)
//             .children(".total-item")
//             .invoke("text")
//             .then(parseFloat)
//             .as("totalByItem" + idItem);
//         });

//         if (articlePanier.length>1){
//           cy.get("@qtityCart0").then((qtityCart0) => {
//             cy.get("@qtityCart1").then((qtityCart1) => {
//               const qtityCartAllItem = qtityCart0 + qtityCart1;
//               console.log("qtityCartAllItem", qtityCartAllItem);
//               cy.wrap(qtityCartAllItem).as("qtityCartAllItem");
//             });
//           });
//           cy.get("@totalByItem0").then((totalByItem0) => {
//             cy.get("@totalByItem1").then((totalByItem1) => {
//               const totalCartAllItem = totalByItem0 + totalByItem1;
//               console.log("totalCartAllItem", totalCartAllItem);
//               cy.wrap(totalCartAllItem).as("totalCartAllItem");
//             });
//           });
//         }

//         cy.get("strong")
//           .invoke("text")
//           .then(formatString)
//           .then(parseFloat)
//           .as("totalCart");
//       });
//       Cypress.Commands.add("CheckInfoBetweenShopItemsSelectedAndCartShop",(articlePanier=["article-0","article-1"],clickItemToCart=[2,1])=>{
//       // const articlePanier = ["article-0", "article-1"];
//       articlePanier.forEach((item, index) => {
//         var idItem = index.toString();
//         it(`Panier contient bien ${item} selectionné , devrait avoir ${item} avec le titre associé`, () => {
//           cy.get("@cardTitle" + idItem).then((titreArticle) => {
//             cy.get("@titleItem" + idItem).contains(titreArticle);
//           });
//         });
//         it(`Le prix unitaire de ${item} correspond au prix annoncé dans la boutique`, () => {
//           cy.get("@cardPrice" + idItem).then((priceArticle) => {
//             console.log(
//               "Prix unitaire devrait être égale à : ",
//               priceArticle
//             );
//             cy.get("@unitPrice" + idItem).should("be.eq", priceArticle);
//             // cy.get("ion-row#article-0").children('.prix').invoke('text').then(parseFloat).should('be.eq',priceArticle)
//           });
//         });
//         it(`${item} devrait avoir une quantité = à ${clickItemToCart[index]} `, () => {
//           cy.get("@qtityCart" + idItem).then((qtityCart) => {
//             console.log("Quantité de l'article : ", qtityCart);
//             cy.get("@nbtimeClickedOnItem" + idItem).then(
//               (nbtimeClickedOnItem) => {
//                 cy.get("@qtityCart" + idItem).should(
//                   "be.eq",
//                   nbtimeClickedOnItem
//                 );
//               }
//             );
//             // cy.get("ion-row#article-0").children('.prix').invoke('text').then(parseFloat).should('be.eq',priceArticle)
//           });
//         });
//       });

//       it(`La quantité d'article total devrait correspondre à la somme des click effectués dans la boutique: ${clickItemToCart.reduce(reducer)} `, () => {
//         cy.get("@nbIconShop").then((nbiconShop) => {
//           console.log("Nombre affiché par l'icone shop", nbiconShop);
//           cy.get("@qtityCartAllItem").should("be.eq", nbiconShop);
//           // cy.get("ion-row#article-0").children('.qtity').invoke('text').then(parseFloat).should('be.eq',nbiconShop)
//         });
//       });
//       it("La somme total du panier doit être égal à la somme des sous totaux par article", () => {
//         cy.get("@totalCartAllItem").then((totalCartAllItem) => {
//           cy.get("@totalCart").should("be.eq", totalCartAllItem);
//         });
//       });
//     })
//   //   }
//   // );
