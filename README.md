# LISEZ-MOI. APPLICATION ERON <!-- omit in toc -->

Ce fichier va décrire l'ensemble des étapes nécessaires pour reproduire l'application. Il va inclure : la structure de l'application, les packages/modules important utilisés, les fonctionnalités mis en place.

## Tables des matières <!-- omit in toc -->

- [Setup](#setup)
- [Creation du projet](#creation-du-projet)
- [Images - Icons - Illustrations](#images---icons---illustrations)

## Setup

Pour coder l'application ERON, nous utiliserons les framework Angular et Ionic.
Avant de commencer à coder à l'application il faut vérifier d'avoir l'environnement de travail adéquat.
Voici l'ensemble des installation et l'environnemnt de travail pour coder l'application :

```sh
$ ng -version
Angular CLI: 12.1.0
Node: 14.17.1
Package Manager: npm 6.14.13
OS: linux x64
Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1201.0 (cli-only)
@angular-devkit/core         12.1.0 (cli-only)
@angular-devkit/schematics   12.1.0 (cli-only)
@schematics/angular          12.1.0 (cli-only)

$ nvm -v
0.38.0

$ ionic -v 
6.16.3
```

Here are code to install angular,nvm, npm, node and ionic avec le terminal de commande :

```sh
#Install nvm on UBUNTU 20.04
sudo apt install curl 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38/install.sh | bash
source ~/.profile

#Install latest LTS version of node:
nvm install --lts

#Install angular
npm install -g @angular/cli

#Install ionic
npm install -g @ionic/cli

```

## Creation du projet

La creation du projet avec ionic s'effectue en tapant le code suivant :

```sh
ionic start app_mobile_ERON blank --type=angular --capacitor
```

Comme nous voulons pouvoir réaliser une application multiplateforme nous avons choisi d'utiliser `capacitor` .
Capacitor est "API Native container" permettant de réaliser des apps sur iOS, Android, Electron (logiciel de bureau), Progressive web apps. De plus grâce à `capacitor` il est possible d'utiliser toutes les fonctionnalités natives à chaque plateforme.

## Images - Icons - Illustrations

L'ensemble des images , illustrations et icones sont soit disponibles directement dans le dossier `asset` soit importé via la librairie `fontawesome` en installant à l'aide de node package manager:

```sh
npm i @fortawesome/angular-fontawesome --save
npm i @fortawesome/fontawesome-svg-core --save
npm i @fortawesome/free-solid-svg-icons --save
npm i @fortawesome/free-regular-svg-icons --save
npm i @fortawesome/free-brands-svg-icons --save
```

Puis en l'important dans notre projet Angular Ionic à partir du fichier `src/app/app.module.ts` :

```ts
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
```

Pour l'ajout d'illustrations, logo et icones à importer dans l'assets nous avons besoin d'ajouter ces lignes de codes au fichier `angular.json` :

```json
"assets": [
 //   ...
            {   
                "glob": "**/*",
                "input": "src/assets/icon",
                "output": "assets"
              },
              {
                "glob": "**/*.svg",
                "input": "src/assets/illustrations",
                "output": "./svg"
              },
              {
                "glob": "**/*",
                "input": "src/assets/logo",
                "output": "assets"
              }
]
```
