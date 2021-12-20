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
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
    new FormationApprenant(
      'f-a2',
      'Conduites Addictives',
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
    new FormationApprenant(
      'f-a3',
      'Conduites Addictives',
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg",
      "3/5",
      '80%',
      '20/08/2021',
      "8H/10H"),
    new FormationApprenant(
      'f-a4',
      'Conduites Addictives',
      "https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg",
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
