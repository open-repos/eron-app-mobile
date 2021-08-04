import { Injectable } from '@angular/core';
import { ActutalitesEron } from '../models/actu-eron.model';

@Injectable({
  providedIn: 'root'
})
export class ActualitesEronService {
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
  
    constructor() { }
  
  
    getAllactualiteEron(){
      return[...this.actualiteEron]
    }
  
    getActualite(actualiteEronId:string){
      return{
        ...this.actualiteEron.find(actualiteEron => {
          return actualiteEron.id === actualiteEronId;
        })
      }
    }
  
  }