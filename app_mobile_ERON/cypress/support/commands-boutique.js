function formatString(text) {
  return text.replace(/[^\d,]/g, ""); //.replace('\u00A0','').trim();
}

function reducer(accumulator, curr) {
  accumulator + curr;
}

Cypress.Commands.add(
  "PageBoutiqueSelectArticle",
  (articlePanier = ["article-0", "article-1"], clickItemToCart = [2, 1]) => {
    var nbClick = 0;
    // before(() => {
    cy.viewport("iphone-x");
    clickItemToCart.forEach((item, index) => {
      cy.wrap(item).as("nbtimeClickedOnItem" + index.toString());
    });
    cy.get("#number-notif").should("not.exist");
    clickItemToCart.forEach((item, index) => {
      cy.get("@nbtimeClickedOnItem" + index.toString()).then(
        (nbtimeClickedOnItem) => {
          for (let i = 1; i < nbtimeClickedOnItem + 1; i++) {
            cy.get("#shop-" + articlePanier[index])
              .find("ion-button")
              .click();
            nbClick = nbClick + 1;
            console.log("nbClick", nbClick);
            cy.get("#number-notif")
              .invoke("text")
              .then(parseFloat)
              .should("be.eq", nbClick);
          }
        }
      );
    });
    // cy.get("#cart").click();
    // });
  }
);
Cypress.Commands.add(
  "GetAllInShopItems",
  (articlePanier = ["article-0", "article-1"]) => {
    // beforeEach(() => {
    cy.get("#number-notif").invoke("text").then(parseFloat).as("nbIconShop");
    articlePanier.forEach((item, index) => {
      var elementItemShop = "#shop-" + item;
      var idItem = index.toString();
      cy.get(elementItemShop)
        .find("ion-card-title")
        .invoke("text")
        .as("cardTitle" + idItem);
      cy.get(elementItemShop)
        .find(".price")
        .invoke("text")
        .then(parseFloat)
        .as("cardPrice" + idItem);
      console.log("cardPrice", index);
    cy.get("@nbIconShop").then((nbIconShop) => {
      cy.get("@cardPrice"+idItem).then((priceArticle) => {
        const total = nbIconShop * priceArticle;
        cy.wrap(total).as("totalPriceArticle"+idItem);
      }); });
    });
    // if (articlePanier.length>1){
    //     cy.get("#cart").click();
    // }
  }
);

Cypress.Commands.add(
  "GetAllInfoCartItemsAndCheckExist",
  (articlePanier = ["article-0", "article-1"], clickItemToCart = [2, 1]) => {
    clickItemToCart.forEach((item, index) => {
        console.log("index.toString()",index.toString())
      cy.wrap(item).as("nbtimeClickedOnItem" + index.toString());
    });

    articlePanier.forEach((item, index) => {
      var idItem = index.toString();
      var elementItemCart = "ion-row#cart-" + item;
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

    if (articlePanier.length > 1) {
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
    }

    cy.get("strong")
      .invoke("text")
      .then(formatString)
      .then(parseFloat)
      .as("totalCart");
  }
);

Cypress.Commands.add("checkTitleCartSameAsShop",(indexItem)=>{
    var idItem = indexItem.toString();
    cy.get("@cardTitle" + idItem).then((titreArticle) => {
        cy.get("@titleItem" + idItem).contains(titreArticle);
      });
})

Cypress.Commands.add("checkUnitPriceCartSameAsShop",(indexItem)=>{
    var idItem = indexItem.toString();
    cy.get("@cardPrice" + idItem).then((priceArticle) => {
        console.log(
          "Prix unitaire devrait être égale à : ",
          priceArticle
        );
        cy.get("@unitPrice" + idItem).should("be.eq", priceArticle);
        // cy.get("ion-row#cart-"+singleItem).children('.prix').invoke('text').then(parseFloat).should('be.eq',priceArticle)
      });
})

Cypress.Commands.add("checkQtitySelectedInShop",(indexItem)=>{
    var idItem = indexItem.toString();
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
      });
})

