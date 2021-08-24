import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FormationsBoutique } from '../models/boutique-formations.model';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueFormationsService {

// initialNumber: number=0;
// private profileObs$: BehaviorSubject<number> = new BehaviorSubject(0);

boutiqueFormationsSubject = new Subject<any[]>();
private boutiqueFormations: FormationsBoutique[]= [
  { 
    id: 'EDE00-i',
    title: 'Le cerveau anatomique',
    categories: 'medecins',
    imageUrl:'https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg',
    description: "Formation pour mieux comprendre l'anatomie du Cerveau",
    price: 190,
    quantity:1,
    hours:2,
    validity:65
  },
  { 
    id: 'EDE01-i',
    title: 'Le cerveau anatomique',
    categories: 'medecins',
    imageUrl:'https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg',
    description: "Formation pour mieux comprendre l'anatomie du Cerveau",
    price: 190,
    quantity:1,
    hours:2,
    validity:65
  },
  { 
    id: 'EDE01-i',
    title: 'Le cerveau anatomique',
    categories: 'medecins',
    imageUrl:'https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg',
    description: "Formation pour mieux comprendre l'anatomie du Cerveau",
    price: 190,
    quantity:1,
    hours:2,
    validity:65
  },
  { 
    id: 'EDE01-i',
    title: 'Le cerveau anatomique',
    categories: 'medecins',
    imageUrl:'https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg',
    description: "Formation pour mieux comprendre l'anatomie du Cerveau",
    price: 190,
    quantity:1,
    hours:2,
    validity:65
  },
  { 
    id: 'EDE01-i',
    title: 'Le cerveau anatomique',
    categories: 'medecins',
    imageUrl:'https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg',
    description: "Formation pour mieux comprendre l'anatomie du Cerveau",
    price: 190,
    quantity:1,
    hours:2,
    validity:65
  },
]

constructor(private httpClient: HttpClient,
  private alertCtrl: AlertController,
  private router: Router) { }


  emitBoutiqueFormationSubject() {
    console.log("emitFormationBoutiqueSubject Slice",this.boutiqueFormations.slice())
    this.boutiqueFormationsSubject.next(this.boutiqueFormations.slice());
  }

//   getProfileObs(): Observable<number> {
//     return this.profileObs$.asObservable();
// }

// setProfileObs(profile: number) {
//     this.profileObs$.next(profile);
//   }

  addToCart(index?:string, numberPlus?:number){
    // this.initialNumber += 1
    // this.profileObs$.next(numberPlus);
    console.log('AddToCart(numberPlus) ',numberPlus)
  }

  removeToCart(index:string){
    console.log(index)
  }

  getBoutiqueFormationsById(id: string) {
    return this.boutiqueFormations.find(
      (s) => {
        return s.id === id;
      }
    );}


    saveFormationBoutiqueToServer() {

        this.httpClient
          .put('https://eron-settings-default-rtdb.europe-west1.firebasedatabase.app/boutique-formation.json', this.boutiqueFormations)
          .subscribe(
            () => {
              console.log('Enregistrement terminé !');
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
          this.router.navigateByUrl('/tabs/tab-boutique');

    }

    getFormationBoutiqueFromServer() {
console.log("getFormationServer")
      this.httpClient
        .get<any[]>('https://eron-settings-default-rtdb.europe-west1.firebasedatabase.app/boutique-formation.json')
        .subscribe(
          (response) => {
            if (response){
            console.log('PAS Erreur ! : ', response);
            this.boutiqueFormations = response;
            this.emitBoutiqueFormationSubject();}},
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
    }
    


}
