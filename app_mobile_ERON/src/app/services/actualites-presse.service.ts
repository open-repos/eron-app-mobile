import { Injectable } from '@angular/core';
import { ActuPresse } from '../models/actu-presse.model';

@Injectable({
  providedIn: 'root'
})
export class ActualitesPresseService {
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

  get actualitesPresse() {
    return [...this._actualitesPresse];
  }

  constructor() { }

  getActualite(actualiteEronId:string){
    return{
      ...this. _actualitesPresse.find(actualiteEron => {
        return actualiteEron.id === actualiteEronId;
      })
    }
  }
}


