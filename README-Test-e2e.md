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
-  dossier `fixtures` où j'ai mis mes jeux de données
-  dossier `support` dans lequel j'ai créée des "commandes" pour que les tests soient plus lisibles 

## Test e2e Authentification 

Le fichier test 



## Test e2e Selection et visualisation d'articles dans la boutique et le panier d'achat

Le fichier test 