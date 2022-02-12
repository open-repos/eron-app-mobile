<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

# LISEZ-MOI. DOC TEST e2e<!-- omit in toc -->

Dans le cadre du développement de l'application mobile d'ERON Santé, j'ai développé des tests end to end pour valider deux scénarios utilisateurs coté front :

- L'authentification à l'espace apprenant:
  - Vérification du formulair de login (UX-UI)
  - Vérification de la sécuritsation de l'espace apprenant si l'utilisateur n'est pas connecté
  - Vérification de la persistence utilisateur si une fois connecté l'utilisateur "reload" la page (localstorage avec info de l'utlisateur connecté)
- L'ajout d'un ou plusieurs articles dans l'espace apprenant:
  - Verification des fonctionnalités d'ouverture et de fermeture du panier
  - Verification de la cohérence des informations entre les informations des articles sélectionné depuis la boutique versus les informations présentes dans le panier
  - Vérification des possibilités de supprimer un ou tout les articles avec UX-UI en adéquation avec les actions de l'utilisateur
Pour réaliser ces test e2e , j'ai utilisé la librairie Cypress.

QUICK START (test):

```sh
git clone https://gitlab.com/alternance-entreprise-eron/app-mobile-eron/app-mobile-ERON.git
cd app_mobile_ERON
git checkout test-cypress
npm i
ionic serve
# open new terminal
npm run test
```

## Tables des matières <!-- omit in toc -->

- [Installation de Cypress](#installation-de-cypress)
- [Configuration de Cypress](#configuration-de-cypress)
  - [Config avec TypeScript](#config-avec-typescript)
  - [Url sur laquelle Cypress vient chercher les informations du DOM](#url-sur-laquelle-cypress-vient-chercher-les-informations-du-dom)
  - [Execution de Cypress](#execution-de-cypress)
  - [Les autres dossiers de Cypress](#les-autres-dossiers-de-cypress)
- [Test e2e Authentification](#test-e2e-authentification)
- [Test e2e Selection et visualisation d'articles dans la boutique et le panier d'achat](#test-e2e-selection-et-visualisation-darticles-dans-la-boutique-et-le-panier-dachat)

## Installation de Cypress

Dans le cadre du développement de l'application mobile d'ERON Santé , j'ai utilisé les technos Angular et Ionic.
Donc pour l'installation voici la commande éxécutée :
```npm install cypress```

## Configuration de Cypress

### Config avec TypeScript

Etant donné que j'utilise TypeScript pour ce projet avec Angular et Ionic il faut ajouter `cypress` au fichier `tsconfig.json` :

```json
"compilerOptions": {
    "types": ["cypress"],
    ...
  }
```

### Url sur laquelle Cypress vient chercher les informations du DOM

 Dans le fichier `cypress.json` je précise l'url sur laquelle l'application tourne en local :

 ```json
 {
    "baseUrl": "http://localhost:8100"
}
```

### Execution de Cypress

Une fois ces configuration basiques effecutées il est possible de lancer les premiers test e2e en lançant en parallèle l'application via `ionic serve` et `npx cypress open` pour avoir l'interface "friendly" de Cypress ouverte lors des tests ou `npx cypres run` pour avoir un retour directement dans le termial.

### Les autres dossiers de Cypress

Les fichiers de tests sont placés dans le répertoire `cypress/integration/` créée lors de l'initialisation de cypress. Les fichiers de tests sont au format `titre-test.spec.js`

Deux autres dossiers importants que j'ai utilisés pour la réalisation de ces tests sont :

- dossier `fixtures` où j'ai mis mes jeux de données
- dossier `support` dans lequel j'ai créée des "commandes" pour que les tests soient plus lisibles

## Test e2e Authentification

Le fichier test pour l'authentification se trouve dans le dossier `./app_mobile_ERON/cypress/integration/tests-Authentification-LoginPage-Redirection.spec.js`.

Il y a 13 tests réalisés pour l'authentification. Ces tests sont répartis dans deux "context" , qui sont des commandes fournies par cypress pour permettre comme son nom l'indique d'organiser ses tests suivant des contextes précis.
Le premier "context" correspond à des tests sur l'UX-UI de formulaire de connexion.
Voici un exemple de test dans ce "context" :

```js
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
```

Chaque test est initié par la commande `it` qui inclue un callBack avec une succession d'autres commandes fournies par Cypress.
Cypress fourni des commandes `cy.get()` pour récupérer un élément du DOM via un ID, un TAG , une CLASS etc. Une fois que Cyrpress a trouvé cet élément on peut interagir avec lui , ici via des commandes `type()` car on souhaite accéder à des champs input du formulaire. On va également utilser beaucoup d'`assertions` , qui correspondent à des "affirmations" que l'on interroge sur ces éléments du DOM.
Dans l'exemple ci dessus, après avoir cliqué sur le bouton Connexion on éxécute la commande `cy.get('#error-form').should('have.attr','color','danger').contains('Email non valide')`.L'assertion "should" permet de vérifier/affirmer que l'élément portant l'id "error-form" devrait avoir comme attribut/propriété 'color' qui devrait être égal à "danger"/rouge et cet élément devrait contenir (via l'"assertion" "contains") le texte 'Email non valide'. Ce feedback d'erreur est renvoyé car on précise un eamil non valide dans le test : `andria.capai&gmail.com`.

Concernant le deuxième "context" pour l'authentification, il s'agit de vérifier  que l'espace "privée" ou espace apprenant dans le cadre de l'application ne soit accessible que si l'utilisateur c'est connecté et vérifier que la persistence de connexion est fonctionnelle grâce au stockage des informations dans le local storage.
Voici un exemple de test issus du fichier de test:

```js
        it("Test AuthGuard -Espace apprenant bloqué si pas connecté (test chaque tabs de l'espace apprenant) ", ()=>{
            const pageApprenant = ['tab-profil','tab-profil','tab-suivi','tab-boutique']
            for (const page of pageApprenant){
                cy.visit('/tabs/'+page);
                cy.wait(1000)
                cy.url().should('include', '/login')
            }
        })
```

Dans cet exemple je renseigne dans une variable "pageApprenant" l'ensemble de mes routes vers lesquelles le test sera effectué.
Ainsi les 3 commandes effectuées dans la boucle for permettent d'effectuer le scénario suivant:

- On tente de visiter la page contenant la route de l'espace apprenant/privée
- On laisse un lap de temps de 1000ms
- On vérifie que l'url renvoyée , renvoie bien vers la page "login"

## Test e2e Selection et visualisation d'articles dans la boutique et le panier d'achat

Pour le parcours/scénario utilisateurs "Sélection d'articles depuis la boutique et vérification des articles sélectionnés dans le panier" j'ai réalisé 19 tests.

Ces tests sont organisés en trois blocs.

Le premier bloc vérifie que l'on atterit bien sur la page boutique , que l'icone "cart-shop" fonctionne , et que l'on peut ouvrir et fermer une modal pour accéder à l'état du panier.

Les deux autres blocs vont permettre de vérifier les différentes informations des "articles"(items) sélectionné dans la boutique en comparant les informations présentes dans le panier. Il y a également 2 autres fonctionnalités qui sont testées au sein de ces blocs , à savoir pouvoir vide le panier (accompagné d'une alert pour améliorer l'UX) et supprimer un article spécifiquement.

Voici un apercu des parties de code mentionnées précédemment  :

```js
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
  context(`Boutique avec selection d'un seul article: ${singleItem}, sélectionné ${clickItemToCart}`, () => {...})
  

  const itemsCartShop = [items[0].id, items[3].id];
  const clickItemsToCart = [2,1]
  context(`Boutique avec selection de : ${itemsCartShop.join(",")} cliqué respectivement ${clickItemsToCart.join(",")} `,() => {...})
})
```

Etant donné le nombre important de ligne de code et complexité de vérification, j'ai utilisé plusieurs commandes de Cypress pour éviter assurer une meilleure lisibilité , maintenabilité et modularité.

Ainsi , j'ai utilisé les fixtures de Cypress pour ajouter le jeu de données présent dans mon application de base à savoir plusieurs articles avec leurs informations associées :

```json
// App-Mobile-ERON/app_mobile_ERON/cypress/fixtures/itemsShop.json
[{ 
      "id": "EDE01-i",
      "title": "Le cerveau anatomique",
      "categories": "medecins",
      "imageUrl":"https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg",
      "description": "Formation pour mieux comprendre l'anatomie du Cerveau",
      "price": 70,
      "quantity":1,
      "hours":2,
     "validity":65
    },
    { 
      "id": "EDE02-i",
      "title": "Bases neuroscientifiques de la douleur",
      "categories": "medecins",
      "imageUrl":"https://www.gafeo.fr/pluginfile.php/1/local_shop/catalogitemthumb/32/Neuroscientifiques.jpg",
      "description": "Plus de détails cliquez ici",
      "price": 70,
      "quantity":1,
      "hours":2,
     "validity":65
    },
    ...
]
```

J'ai également créée des "Commands" (via `Cypress.Commands.add()`) qui permettent d'encapsuler plusieurs commandes en une seule (voir exempel code ci dessous).

```js
// App-Mobile-ERON/app_mobile_ERON/cypress/support/commands-boutique.js
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
  }
);
...
```

J'ai également utilisé la commande `.as()` pour stocker des variables et les ré-utiliser dans différents context.

```js
Cypress.Commands.add(
  "GetAllInShopItems",
  (articlePanier = ["article-0", "article-1"], clickItemToCart = [2, 1]) => {
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
      cy.get("@cardPrice"+idItem).then((priceArticle) => {
        const total = clickItemToCart[index] * priceArticle;
        cy.wrap(total).as("totalPriceArticle"+idItem);
      });
    });
  }
);
```

Dans le code ci dessus , par exemple je récupère le prix de l'article sélectionné (voir la ligne `.as("cardPrice" + idItem)`) et je peux réutiliser cette variable pour calculer le prix par total par article en multiplant cette alias (on l'appelle via `cy.get("@cardPrice"+idItem).then(($priceArticle)=>{}`) par le nombre de click préalablement définis. Pour réutiliser ces variables entre les différents tests ou dans les "sous context" il faut enregistrer ces alias au sein des hooks `beforeEach`(voir détail description ce dessous).

J'ai organisé le code avec des boucles et j'ai utilisé des paramètres en entrée de commandes à savoir une liste d'article et une liste contenant le nombre de click respectif pour les articles. Ainsi par l'intermédiaire de loop for , les tests sont produit automatiquement pour chacun des articles. On peut ainsi modifier facilement les articles souhaités et le nombre de click associé à ces articles pour faire varier nos tests selon nos souhaits.

Enfin derier chose à préciser, Cypress nous permet d'utiliser des hooks qui permettent d'effectuer des opérations avant (`before`), avant chaque (`beforeEach`) ,après (`after`) , après chaque tests (`afterEach`).
Les hooks `before`et `after` s'éxécute une seule fois, avant et après l'ensemble des tests au sein d'un`context` ou `describe`. Les deux autres hooks permettent d'éxécuter des opérations avant chaque test pour `BeforeEach`et après chaque test pour `afterEach` au sein d'un bloc `context`ou `describe`.

Ainsi dans les deux derniers gros blocs `context`de mes tests sur la page boutique , j'utilise `before` pour changer le nombre d'articles sélectionnés.
Et j'utilise `beforeEach` pour récupérer et enregistrer les informations des articles sélectionnés via les alias ainsi que pour indiquer le support souhaité. Ici j'ai pris l'iphone-x via la commande : `cy.viewport("iphone-x");`