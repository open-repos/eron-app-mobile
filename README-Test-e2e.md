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

- On tente de visiter la page content la route de l'espace apprenant/privée
- On laisse un lap de temps de 1000ms
- On vérifie que l'url renvoyé renvoie bien vers la page "login"

## Test e2e Selection et visualisation d'articles dans la boutique et le panier d'achat

Le fichier test
