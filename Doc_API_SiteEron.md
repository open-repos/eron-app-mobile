<style>
r { color: Red }
o { color: Orange }
g { color: Green }
</style>

# LISEZ-MOI. DOC API SITE ERON <!-- omit in toc -->

Ce document présente la doc API , concernant les informations à transmettre du site <https://eronsante.com> vers l'application mobile.

Je met les données sous forme "Array" /JSON qui sont celles que j'ai trouvé personnellement pertinentes à l'heure actuelle. Cependant, il y aura certainement des modifications/améliorations à apporter pour avoir un rendu le plus optimal.

## Tables des matières <!-- omit in toc -->

- [Pages Actualités](#pages-actualités)
  - [Page Presse](#page-presse)
  - [Page ERON Santé](#page-eron-santé)
  - [Page Interview](#page-interview)
  - [Page Actu ERON ,Presse et Interview détails](#page-actu-eron-presse-et-interview-détails)
- [Pages Formations](#pages-formations)
  - [Page de présentations des formations](#page-de-présentations-des-formations)
  - [Page Détails des formations](#page-détails-des-formations)
  - [Page typeform (?)](#page-typeform-)
- [Page Contact Formulaire](#page-contact-formulaire)

## Pages Actualités

---

### Page Presse

Voilà le model (`app\models\actu-presse.model.ts`) que j'ai pensé :

```ts
export class ActuPresse {
    constructor(
       public id:string,
       public date: string,
       public title: string,
       public auteurs: string, //auteur de l'articel. A voir car cette info est absente sur le site
       public categories: string, // ici je pense à ACTUALITE ERON ou ACTUALITES PRESSE ou ACTUALITES INTERVIEW
       public imageUrl: string,
       public description: string,
      ) {}
}
```

Voici un exemple (dans le fichier `app\services\actualites-presse.service.ts`) de ce que j'ai imaginé comme informations venant du site via l'API :

<details>
<summary> <o>Cliquez pour déplier et voir le code</o></summary>

```ts
private _actualitesPresse: ActuPresse[] = [
    new ActuPresse(
      'ap1',
      '21 Juillet 2021',
      "Une nouvelle Formation Kiné éligible au DPC : Broncho-Pneumopathie-Chronique Obstructive (BPCO) Parcours de soin et prise en charge",
      "L'équipe EronSanté",
      '#EronSanté',
      'https://eronsante.com/wp-content/uploads/2021/07/Sans-titre-27-9.png',
      "Broncho-Pneumopathie-Chronique Obstructive (BPCO) Parcours de soin et prise en charge en kinésithérapie L’équipe d’ERON Santé a le plaisir de vous informer que l’Agence nationale du Développement "    ),
    new ActuPresse(
      'ap2',
      '16 Juillet 2021',
      "ERON Santé recrute un(e) Community Manager ",
      "L'équipe EronSanté",
      '#EronSanté',
      'https://eronsante.com/wp-content/uploads/2021/07/Sans-titre-27-6.png',
      "RON Santé recrute un(e) Community Manager Rattachement hiérarchique: Direction de la communication Disponibilité : ASAP !  Lieu : Paris ou Marseille Le Groupe ERON Santé  ERON "
        ),
    new ActuPresse(
      'ap3',
      '23 Juin 2021',
      " WEBINAR / LA GESTION DU STRESS AU TRAVAIL ",
      "L'équipe EronSanté",
      '#EronSanté',
      'https://eronsante.com/wp-content/uploads/2021/05/WEBINAR_Visuel_definitif_valide-1024x575-1-750x465.png',
      "JEUDI 22 AVRIL 2021 DE 19:00 UTC+01 À 20:00 UTC+01 WEBINAR : LA GESTION DU STRESS AU TRAVAIL Animateur : Le docteur Jean-Luc HAZIZA délivre des conférences "
     ),
    new ActuPresse(
      'ap4',
      '16 Juin 2021',
      "Une nouvelle Formation Infirmier éligible au DPC : Accompagnement des patients en fin de vie et développement de l’accès aux soins palliatifs  ",
      "L'équipe EronSanté",
      '#EronSanté',
      'https://eronsante.com/wp-content/uploads/2021/06/Sans-titre-21-1024x681-1-750x465.png',
      "Accompagnement des patients en fin de vie et développement de l’accès aux soins palliatifs L’équipe d’ERON Santé a le plaisir de vous informer que l’Agence "
        )
  ];
```

</details>
<br>

### Page ERON Santé

Voilà le model (`app\models\actu-eron.model.ts`) que j'ai pensé :

```ts
export interface ActutalitesEron {
    id:string;
    date: string;
    title: string;
    auteurs: string;//auteur de l'articel. A voir car cette info est absente sur le site
    categories: string; // ici je pense à ACTUALITE ERON ou ACTUALITES PRESSE ou ACTUALITES INTERVIEW
    imageUrl: string;
    description: string;
}
```

Voici un exemple (dans le fichier `app\services\actualites-eron.service.ts`) de ce que j'ai imaginé comme informations venant du site via l'API :

<details>
<summary><o>Cliquez pour déplier et voir le code</o></summary>

```ts
private actualiteEron: ActutalitesEron[] = [
    { 
      id: 'actu-1',
      date:'21 Juillet 2021',
      title: "Une nouvelle Formation Kiné éligible au DPC : Broncho-Pneumopathie-Chronique Obstructive (BPCO) Parcours de soin et prise en charge",
      auteurs:"L'équipe EronSanté",
      categories:'#EronSanté',
      imageUrl:
        'https://eronsante.com/wp-content/uploads/2021/07/Sans-titre-27-9.png',
      description: "Broncho-Pneumopathie-Chronique Obstructive (BPCO) Parcours de soin et prise en charge en kinésithérapie L’équipe d’ERON Santé a le plaisir de vous informer que l’Agence nationale du Développement "
    },
    {
      id: 'actu-2',
      date:'16 Juillet 2021',
      title: "ERON Santé recrute un(e) Community Manager ",
      auteurs:"L'équipe EronSanté",
      categories:'#EronSanté',
      imageUrl:
        'https://eronsante.com/wp-content/uploads/2021/07/Sans-titre-27-6.png',
      description: "RON Santé recrute un(e) Community Manager Rattachement hiérarchique: Direction de la communication Disponibilité : ASAP !  Lieu : Paris ou Marseille Le Groupe ERON Santé  ERON "
    },
    {
      id: 'actu-3',
      date:'23 Juin 2021',
      title: " WEBINAR / LA GESTION DU STRESS AU TRAVAIL ",
      auteurs:"L'équipe EronSanté",
      categories:'#EronSanté',
      imageUrl:
        'https://eronsante.com/wp-content/uploads/2021/05/WEBINAR_Visuel_definitif_valide-1024x575-1-750x465.png',
      description: "JEUDI 22 AVRIL 2021 DE 19:00 UTC+01 À 20:00 UTC+01 WEBINAR : LA GESTION DU STRESS AU TRAVAIL Animateur : Le docteur Jean-Luc HAZIZA délivre des conférences "
    },
    {
      id: 'actu-4',
      date:'16 Juin 2021',
      title: "Une nouvelle Formation Infirmier éligible au DPC : Accompagnement des patients en fin de vie et développement de l’accès aux soins palliatifs  ",
      auteurs:"L'équipe EronSanté",
      categories:'#EronSanté',
      imageUrl:
        'https://eronsante.com/wp-content/uploads/2021/06/Sans-titre-21-1024x681-1-750x465.png',
      description: "Accompagnement des patients en fin de vie et développement de l’accès aux soins palliatifs L’équipe d’ERON Santé a le plaisir de vous informer que l’Agence "
    },
  
  ]
```

</details>
<br>

### Page Interview

Ici je n'ai pas encore implémenter le layout pour recevoir des données mais l'idée reste la même que pour les deux précédents chapitres étant donné que les informations présentées sur le site sont les mêmes.

### Page Actu ERON ,Presse et Interview détails

Les informations nécessaires pour l'API sont les mêmes que celle de la couche supérieur (voir les chapitres [Page presse](#page-presse), [Page Actu EronSanté](#page-eron-santé)).

Avec deux informations supplémentaires :

- le descriptif détaillé des articles
- le lien vers l'article annoncé
- les commentaires aux articles

## Pages Formations

---

### Page de présentations des formations

Voilà le model (`app\models\formation.model.ts`) que j'ai pensé :

```ts
export interface Formation {
    id:string;
    title: string;
    imageUrl: string;
    duree: string;
    logo: string[] | string;
    description: string;
}
}
```

Voici un exemple (dans le fichier `app\services\formation.service.ts`) de ce que j'ai imaginé comme informations venant du site via l'API :
<details>
<summary><o>Cliquez pour déplier et voir le code</o></summary>

```ts
private formations: Formation[] = [
  { 
    id: 'med-1',
    title: 'Dépistage des cancers',
    imageUrl:'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: ["DPC","FIFPL"],
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },
  {
    id: 'med-2',
    title: 'Dépistage des cancers',
    imageUrl:'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: ["DPC","FIFPL"],
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },
  {
    id: 'med-3',
    title: 'Dépistage des cancers',
    imageUrl:'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: "DPC",
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },
  {
    id: 'med-4',
    title: 'Dépistage des cancers',
    imageUrl:'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: "DPC",
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },

]
```

</details>
<br>

### Page Détails des formations

Basé sur le site eronsante ([voir exemple de la page concernée](https://eronsante.com/formations/diagnostic-des-lesions-muqueuses-et-osseuses-de-la-cavite-buccale/))

L'implémentation en layout du détails des formations n'a pas encore été réalisé coté frontend. Cependant je pense qu'il serait adéquat d'avoir les informations suivantes :

- Informations liées à la formation en question, toujours basé sur [l'exemple d'une formation du site Eron](https://eronsante.com/formations/diagnostic-des-lesions-muqueuses-et-osseuses-de-la-cavite-buccale/)) :
  - type de formation : E-Learning
  - duree: 7h
  - profession-concernées: Chirurgiens dentistes
  - type-evaluation: QCM - Diapo - Realité augmenté
- Présentation de la formation (pas toujours présent à ce que j'ai vu): descriptif complet de la présentation de formation
- Objectifs de la formation : descriptif de l'object
- Contenus de la formation : titre de chaque module et descriptif de chaque module

### Page typeform (?)

Est ce que le renvoi vers le typeform sera modifié coté site internet ?
Est ce que je fais la même chose coté frontend de l'application ? Ce qui ferait quitter l'application et donc peut être perdre en terme d'UX ?

## Page Contact Formulaire

Ici je me demandais s'il serait pas plus simple que j'effectue une requête PUT pour envoyer vers le back le `contenu du message` , `objet du message`, `mail destinataire` et `mail expéditeur` .

**A VOIR ENSEMBLE**
