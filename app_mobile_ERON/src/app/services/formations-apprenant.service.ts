import { FormationApprenant } from './../models/formation-apprenant.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormationsApprenantService {

  private _formationApprenant: FormationApprenant[] = [
    new FormationApprenant(
      'f-a1',
      'Conduites Addictives',
      "https://www.notretemps.com/cache/com_zoo_images/00/generiques-medicaments_81369a95ad2be8c094d1f40e6cf733b2.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
    new FormationApprenant(
      'f-a2',
      'Conduites Addictives',
      "https://www.notretemps.com/cache/com_zoo_images/00/generiques-medicaments_81369a95ad2be8c094d1f40e6cf733b2.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
    new FormationApprenant(
      'f-a3',
      'Conduites Addictives',
      "https://www.notretemps.com/cache/com_zoo_images/00/generiques-medicaments_81369a95ad2be8c094d1f40e6cf733b2.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
    new FormationApprenant(
      'f-a4',
      'Conduites Addictives',
      "https://www.notretemps.com/cache/com_zoo_images/00/generiques-medicaments_81369a95ad2be8c094d1f40e6cf733b2.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
  ];

  get formationsApprenant() {
    return [...this._formationApprenant];
  }

  constructor() { }

  getFormationApprenant(formationApprenantId:string){
    return{
      ...this. _formationApprenant.find(formationApprenant => {
        return formationApprenant.id === formationApprenantId;
      })
    }
  }
}
