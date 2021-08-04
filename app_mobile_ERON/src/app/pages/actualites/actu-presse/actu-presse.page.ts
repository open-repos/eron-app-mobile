import { ActuPresse } from './../../../models/actu-presse.model';
import { ActualitesPresseService } from './../../../services/actualites-presse.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-actu-presse',
  templateUrl: './actu-presse.page.html',
  styleUrls: ['./actu-presse.page.scss'],
})
export class ActuPressePage implements OnInit {

  loadedActualitesPresse: ActuPresse[];
  
  constructor(private router: Router, private actualitesService: ActualitesPresseService,
    private alertCtrl: AlertController
    ) {

  }
  
  ngOnInit() {
    this.loadedActualitesPresse = this.actualitesService.actualitesPresse;
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

}
