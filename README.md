# LISEZ-MOI. APPLICATION ERON <!-- omit in toc -->

Ce fichier va décrire l'ensemble des étapes nécessaires pour reproduire l'application. Il va inclure : la structure de l'application, les packages/modules important utilisés, les fonctionnalités mis en place.

## Tables des matières <!-- omit in toc -->

- [Setup](#setup)
- [Creation du projet](#creation-du-projet)
- [Arborescence du projet](#arborescence-du-projet)
- [Images - Icons - Illustrations](#images---icons---illustrations)
- [Pages](#pages)
  - [SideMenu](#sidemenu)
  - [Home](#home)
  - [Actualités](#actualités)
  - [Formations](#formations)
  - [Contacts](#contacts)
  - [FAQ](#faq)
  - [Connexion](#connexion)
- [Capacitor](#capacitor)
  - [Android](#android)
  - [iOS](#ios)
  - [Mis en production et mis à jour de l'application (Appflow)](#mis-en-production-et-mis-à-jour-de-lapplication-appflow)

## Setup

Pour coder l'application ERON, nous utiliserons les framework Angular et Ionic.
Avant de commencer à coder à l'application il faut vérifier d'avoir l'environnement de travail adéquat.
Voici l'ensemble des installation et l'environnemnt de travail pour coder l'application :

```sh
$ ng version
Angular CLI: 11.2.14
Node: 14.17.3
OS: darwin x64

Angular: 
... 
Ivy Workspace: 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1102.14 (cli-only)
@angular-devkit/core         11.2.14 (cli-only)
@angular-devkit/schematics   11.2.14 (cli-only)
@schematics/angular          11.2.14 (cli-only)
@schematics/update           0.1102.14 (cli-only)

# $ nvm -v (seulement sur Linux avant passage sur MacOS)
# 0.38.0

$ ionic -v 
6.16.3
```

Ci dessous se trouve le code pour installer angular,nvm, npm, node et ionic avec le terminal de commande :

```sh
#Install nvm on UBUNTU 20.04
sudo apt install curl 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38/install.sh | bash
source ~/.profile

#Install latest LTS version of node: (Seulement sur Linux)
nvm install --lts

#Install latest LTS version of node (MacOS ave homebrew)
brew install node

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

Pour lancer l'application il faut taper la commande suivant dans le terminal:

```sh
ionic serve
```

## Arborescence du projet

Ici est présenté l'arborescence du projet `app_mobile_Eron` qui évoluera au fil des modifications.

<details><summary> ouvrir le tree directory </summary>

```sh
#Pour voir l'ensemble des dossiers execepté les dossiers contenant plus de 12 fichiers (pour ne pas afficher tout le node_modules et les images/logos/icones)
tree -L 5 --filelimit=12

.
├── angular.json
├── capacitor.config.json
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── ionic.config.json
├── karma.conf.js
├── node_modules [893 entries exceeds filelimit, not opening dir]
├── package.json
├── package-lock.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── components
│   │   │   └── button-menu
│   │   │       ├── button-menu.component.html
│   │   │       ├── button-menu.component.scss
│   │   │       ├── button-menu.component.spec.ts
│   │   │       └── button-menu.component.ts
│   │   └── pages
│   │       ├── actualites
│   │       │   ├── actu-eron
│   │       │   ├── actu-interview
│   │       │   └── actu-presse
│   │       ├── contacts
│   │       │   ├── contacts.module.ts
│   │       │   ├── contacts.page.html
│   │       │   ├── contacts.page.scss
│   │       │   ├── contacts.page.spec.ts
│   │       │   ├── contacts.page.ts
│   │       │   └── contacts-routing.module.ts
│   │       ├── faq
│   │       │   ├── faq.module.ts
│   │       │   ├── faq.page.html
│   │       │   ├── faq.page.scss
│   │       │   ├── faq.page.spec.ts
│   │       │   ├── faq.page.ts
│   │       │   └── faq-routing.module.ts
│   │       ├── home
│   │       │   ├── home.module.ts
│   │       │   ├── home.page.html
│   │       │   ├── home.page.scss
│   │       │   ├── home.page.spec.ts
│   │       │   ├── home.page.ts
│   │       │   └── home-routing.module.ts
│   │       ├── login
│   │       │   ├── login.module.ts
│   │       │   ├── login.page.html
│   │       │   ├── login.page.scss
│   │       │   ├── login.page.spec.ts
│   │       │   ├── login.page.ts
│   │       │   └── login-routing.module.ts
│   │       └── menu
│   │           ├── menu.module.ts
│   │           ├── menu.page.html
│   │           ├── menu.page.scss
│   │           ├── menu.page.spec.ts
│   │           ├── menu.page.ts
│   │           └── menu-routing.module.ts
│   ├── assets
│   │   ├── icon [20 entries exceeds filelimit, not opening dir]
│   │   ├── illustrations [18 entries exceeds filelimit, not opening dir]
│   │   ├── logo [13 entries exceeds filelimit, not opening dir]
│   │   └── shapes.svg
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── test.ts
│   ├── theme
│   │   └── variables.scss
│   └── zone-flags.ts
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

</details>

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

Liste des icones importées via `FontAwesomeModule, FaIconLibrary` a la racine de l'application dans `app.module.ts`.

<details><summary> ouvrir le code </summary>

```ts
import {
  faTwitter,
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
  faInstagramSquare,
} from '@fortawesome/free-brands-svg-icons';
// import { MenuController } from '@ionic/angular';

import {
  // menuIcon
  faHome,
  faNewspaper,
  faBookOpen,
  faQuestionCircle,
  faEnvelopeOpenText,
  faUser,
  //menuIcon +
  faAddressBook,
  faEnvelopeOpen,
  faEnvelope,
  faMailBulk,
  faUserCircle,
  //formationsIcon  et Medical
  faStethoscope,
  faUserMd,
  faBriefcaseMedical,
  faTeethOpen,
  faPills,
  faUserNurse,
  faHands,
  faSyringe,
  faClinicMedical,
  faTabletAlt,
  //tabBarIcon
  faBook,
  faBookMedical,
  faShoppingCart,
  //iconUX
  faArrowRight,
  faBell,
  faBellSlash,
  faCalendarAlt,
  faAngleDown,
  faAngleUp,
  faAngleRight,
  faAngleLeft,
  faAt,
} from '@fortawesome/free-solid-svg-icons';

import {
  faBellSlash as farBellSlash,
  faCalendarAlt as farCalendarAlt,
  faNewspaper as farNewspaper,
  faQuestionCircle as farQuestionCircle,
  faAddressBook as farAddressBook,
  faEnvelope as farEnvelope,
} from '@fortawesome/free-regular-svg-icons';
```

</details>

Ses icones sont ensuites implémenté dans le constructeur

```ts
export class AppModule {
  constructor(library: FaIconLibrary) {
    ...
    //liste des icones importée
  }
```

## Pages

Ici sont présentés l'ensemble des pages créées et leur particularités/fonctionnalités pour construire l'appication.
Création de page via la commande de type :

```sh
ionic g pages pages/<nom de la page à créer>
```

Cette commande a été utilisée pour toutes les pages crées présentées ci dessous.

### SideMenu

La page *SideMenu* constitue la page où est intégré le `router-outlet`

```ts
<ion-router-outlet id="menu-visitor"></ion-router-outlet>
```

Ainsi les `routes` créées sont réalisé sur la base du `lazy loading`proposé par Angular.

La liste des items créés dans le *SideMenu* s'appuie sur un array crée dans le fichier typescript.
Les directives `*ngIf`et `ngFor`sont utilisé dans le template `html`pour créer le *SideMenu*.

### Home

Pour construire le template `html`de la page *Home* les composants `ionic` : `ion-grid ion-col ion-row` ont été utilisé pour organiser le layout de la page.

### Actualités

### Formations

### Contacts

Concernant la page contact et notamment la page formulaire de contact, le formulaire a été créée sur la base d'un `ReactiveForm`proposé par Angular.

Ainsi le module `ReactiveFormsModule`a été importé et utilisé dans le fichier `typescript` avec utilisation de `FormGroup ,FormBuilder, Validators`pour customiser les champs du formulaire de la page `contacts-Forms`.

Encore une fois les directives `ngFor`, `ngIf` ont été utilisés dans le template `html`pour l'apparition des champs du formulaire et les conditions de message d'erreurs selon les champs renseignés par l'utilisateur.
De plus la directive `ngStyle`a été utilisé pour changer le style CSS des champs selon l'état `valid`, `erreurs`, `requis`des champs.

### FAQ

### Connexion

## Capacitor

Grâce à l'initialisation du projet avec Capacitor nous avons la possibilité de tester l'application directement sur un émulateur iOS ou Android. La description pour réalisée les différentes étapes à la fois sur iOS et sur Android nécessite d'être sur l'OS Apple.

Il faut donc avoir installé **Xcode** et **Android Studio**

Si le projet n'a pas été initialiser avec Capacitor, il est possible d'effectuer les commandes ci dessous pour intégrer Capacitor au projet :

```sh
npm install --save @capacitor/core @capacitor/cli

# Effectué cette commande pour initialiser un projet avec Capacitor . Il vous sera demandé un nom pour l'application et un 'PackageID'
npx cap init

```

### Android

Pour lancer et tester son application sur Android il faut taper les commandes suivantes :

```sh
# Penser tout d'abord a effectuer la commande suivante pour ne pas avoir d'erreur:
ionic build
```

```sh
# Ajouter la plateforme Android
npx cap add android

# A chaque changement dans notre code de l'application il faut lancer la commande suivant pour mettre a jour sur Android
npx cap copy

# A chque changement / import de plugin il faut taper la commande suivant : 
npx cap update


# Ou taper la commande suivante ( qui effectue les deux dernière commande décrites ci dessus):
npx cap sync

#Enfin il faut lancer Android Studio depuis notre projet via : 
npx cap open android

```

Une fois Android Studio ouvert, il  va y avoir une synchronisation *gradle* et Android Studio va installer les dépendances et va compiler pour pouvoir lancer l'application via soit un appareil virtuel (crée via AVD Manager) soit via un appareil réel en connectant son téléphone via USB (et en ayant activé le mode Développeur via ses paramètres de téléphone).

### iOS

Pour lancer et tester son application sur iOS il faut taper les commandes suivantes :

```sh
# Penser tout d'abord a effectuer la commande suivante pour ne pas avoir d'erreur notamment l'absence de dossier 'www':
ionic build
```

```sh
# Ajouter la plateforme Android
npx cap add iOS

# A chaque changement dans notre code de l'application il faut lancer la commande suivant pour mettre a jour sur iOS
npx cap copy

# A chque changement / import de plugin il faut taper la commande suivant : 
npx cap update


# Ou taper la commande suivante ( qui effectue les deux dernière commande décrites ci dessus):
npx cap sync

#Enfin il faut lancer Android Studio depuis notre projet via : 
npx cap open ios

```

Comme pour Android Studio, Xcode s'ouvre et offre la possibilité d'utiliser une *Simulator* (virtual Device) pour tester l'application. Il est également possible de tester sur un iPad ou iPhone réel en le connectant à son ordinateur via USB.

### Mis en production et mis à jour de l'application (Appflow)

Pour pouvoir apporter des modifications une fois l'application mis sur le store (Apple et Play) nous pouvons continuer à améliorer notre application sans disruption grâce à `appflow` .

Liens des sites internet explicatives pour appliquer :

- [Lien Capacitor Appflow](https://capacitorjs.com/docs/guides/deploying-updates)
- [Lien vers Docs Appflow](https://ionic.io/docs/appflow)
- [Lien vers Ionic Appflow](https://ionic.io/docs/appflow)
