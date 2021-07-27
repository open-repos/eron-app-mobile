import { Injectable } from '@angular/core';
import { Formation } from '../pages/formations/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationsService {

private formations: Formation[] = [
  { 
    id: 'med-1',
    title: 'Dépistage des cancers',
    imageUrl:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: "DPC",
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },
  {
    id: 'med-2',
    title: 'Dépistage des cancers',
    imageUrl:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: "DPC",
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },
  {
    id: 'med-3',
    title: 'Dépistage des cancers',
    imageUrl:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: "DPC",
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },
  {
    id: 'med-4',
    title: 'Dépistage des cancers',
    imageUrl:
      'https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/0/e/20e9b28cb4_50175940_cellules-cancereuses.jpg',
    duree: "10h",
    logo: "DPC",
    description: "Cette formation en eLearning permet d'apporter des connaissances théoriques et pratiques vous permettant de réaliser un depistage des cancers"
  },

]

  constructor() { }


  getAllFormations(){
    return[...this.formations]
  }

  getFormation(formationID:string){
    return{
      ...this.formations.find(formation => {
        return formation.id === formationID;
      })
    }
  }

}
