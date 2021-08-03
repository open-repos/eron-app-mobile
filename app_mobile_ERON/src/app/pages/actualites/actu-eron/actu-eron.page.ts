import { ActutalitesEron } from './actu-eron.model';
import { ActualitesEronService } from './../../../services/actualites-eron.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonSlides } from '@ionic/angular';
import { Formation } from '../../formations/formation.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actu-eron',
  templateUrl: './actu-eron.page.html',
  styleUrls: ['./actu-eron.page.scss'],
})
export class ActuEronPage implements OnInit {

  actualitesEron: ActutalitesEron[];
  @ViewChild(IonSlides) slider: IonSlides;
  
  constructor(private router: Router, private actualitesService: ActualitesEronService,
    private alertCtrl: AlertController
    ) {

  }
  
  ngOnInit() {
    this.actualitesEron = this.actualitesService.getAllactualiteEron();
  }

  onSubmit(form: NgForm) {
    const email = form.value['email']

    const validEmail = this.validateEmail(email)
    if (form.invalid || !validEmail){
      this.alertCtrl
      .create({
        header: 'Erreur',
        message: 'Veuillez rentrez une adresse email valide',
        buttons: ['OK']
      })
      .then(alertEl => {
        alertEl.present();
      }); 
    } else {
    this.alertCtrl
    .create({
      header: 'Felicitations',
      message: 'Vous êtes maintenant abonné a la newsletter ERON',
      buttons: ['OK']
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
    // this.appareilService.addAppareil(email);
}

validateEmail(email: string) {
  const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExpression.test(String(email).toLowerCase());

 }


// ionViewDidLeave(){
//   console.log(this.actualitesEron)
// }

}
