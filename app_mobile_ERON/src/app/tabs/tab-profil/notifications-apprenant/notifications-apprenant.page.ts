import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { forkJoin, Observable } from 'rxjs';


// test site internet https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325

function requiredIfValidator(predicate) {
  return (formControl => {
    if (!formControl.parent) {
      return null;
    }
    if (predicate()) {
      return Validators.required(formControl); 
    }
    return null;
  })
}

@Component({
  selector: 'app-notifications-apprenant',
  templateUrl: './notifications-apprenant.page.html',
  styleUrls: ['./notifications-apprenant.page.scss'],
})
export class NotificationsApprenantPage implements OnInit {
  notifForm!: FormGroup;
  message: Array<string>;
  noNotif: boolean;
  typeNotif: boolean;

  toggleNotifTel: boolean;
  toggleNotifEmail: boolean;
  toggleNotifTypeNews: boolean;
  toggleNotifTypeNouvelleFormation: boolean;
  toggleNotifTypeRappel: boolean;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.initForm();
  }


  initForm() {
    this.notifForm = this.formBuilder.group({
      // notifFrequence:  ['',  emailConditionallyRequiredValidator],
      notifPhone:  [false],
      notifEmail:  [false],
      notifNews:  [false],
      notifNouvelleFormation: [false],
      notifRappelFormation: [false],
      notifFrequence:  [''],
    });
    
  //   this.notifForm.get('notifPhone').valueChanges
  //     .subscribe(() => {
  //       emailConditionallyRequiredValidator(this.notifForm)
  //       // if(value) {
  //       //   this.notifForm.get('notifFrequence').setValidators(Validators.required)
  //       // } else {
  //       //   this.notifForm.get('notifFrequence').clearValidators();
  //       // }
  //     }
  // );

//   this.notifForm.get('notifEmail').valueChanges
//   .subscribe(value => {
//     if(value) {
//       this.notifForm.get('notifFrequence').setValidators(Validators.required);
//       this.notifForm.get('notifFrequence').updateValueAndValidity();
//       console.log('NOTIFFREQUENCE SET',this.notifForm.get('notifFrequence'))
//     } else {
//       this.notifForm.get('notifFrequence').clearValidators();
//       this.notifForm.get('notifFrequence').updateValueAndValidity();
//       console.log('NOTIFFREQUENCE CLEAR',this.notifForm.get('notifFrequence'))
//     }
//   }
// );
// this.notifForm.get('notifNews').valueChanges
// .subscribe(value => {
//   if(value) {
//     this.notifForm.get('notifFrequence').setValidators(Validators.required)
//   } else {
//     this.notifForm.get('notifFrequence').clearValidators();
//   }
// }
// );
// this.notifForm.get('notifNouvelleFormation').valueChanges
// .subscribe(value => {
//   if(value) {
//     this.notifForm.get('notifFrequence').setValidators(Validators.required)
//   } else {
//     this.notifForm.get('notifFrequence').clearValidators();
//   }
// }
// );

// this.notifForm.get('notifRappelFormation').valueChanges
// .subscribe(value => {
//   if(value) {
//     this.notifForm.get('notifFrequence').setValidators(Validators.required)
//   } else {
//     this.notifForm.get('notifFrequence').clearValidators();
//   }
// }
// )

  }
  
  onToggleBtnChange(e){
    const isChecked = this.notifForm.get('notifPhone').value || 
    this.notifForm.get('notifPhone').value ||
    this.notifForm.get('notifEmail').value ||
    this.notifForm.get('notifNews').value ||
    this.notifForm.get('notifNouvelleFormation').value ||
    this.notifForm.get('notifRappelFormation').value
    console.log(isChecked)
    if(isChecked) {
      this.notifForm.get('notifFrequence').setValidators(Validators.required);
      this.notifForm.get('notifFrequence').updateValueAndValidity();
      // console.log('NOTIFFREQUENCE SET',this.notifForm.get('notifFrequence'))
    } else {
      this.notifForm.get('notifFrequence').clearValidators();
      this.notifForm.get('notifFrequence').updateValueAndValidity();
      // console.log('NOTIFFREQUENCE CLEAR',this.notifForm.get('notifFrequence'))
    }

    const formValue = this.notifForm.value;
    if (!formValue['notifNews'] 
    && !formValue['notifNouvelleFormation']
    && !formValue['notifRappelFormation'] ){
      this.typeNotif = false;
    } else {
      this.typeNotif = true;
    }

    console.log("this.typeNotif",this.typeNotif)
  }

  onSubmitForm() {
    const formValue = this.notifForm.value;
    this.message = [
      formValue['notifFrequence'],
      formValue['notifPhone'],
      formValue['notifEmail'],
      formValue['notifNews'],
      formValue['notifNouvelleFormation'],
      formValue['notifRappelFormation'],
    ];

    console.log('message',this.message);
    // this.sendEmail();
    if (!formValue['notifPhone'] 
    && !formValue['notifEmail'] 
    && !formValue['notifNews'] 
    && !formValue['notifNouvelleFormation']
    && !formValue['notifRappelFormation'] ){
      this.noNotif = true;
    } else {
      this.noNotif = false;
    }
    console.log("noNotif? " , this.noNotif)


    this.presentAlert().then((result)=>{
      console.log(result)
      if (result.role === "confirm"){
      this.router.navigateByUrl('/tabs/tab-profil');
    } else if (result.role === "cancel") {
      return
    }

    });
  }


  async presentAlert() {
    console.log('isInvalidFORM ?',this.notifForm.invalid)
    console.log("this.typeNotif",this.typeNotif)
    if (this.notifForm.invalid){
      const alert = await this.alertCtrl
      .create({
        header: 'Erreur',
        message: 'Veuillez choisir une fréquence de notifications',
        buttons: ['OK']
      })
      
      await alert.present();
      let result = await alert.onDidDismiss();
      return result;
    // console.log(result);
    } else if (this.typeNotif){
      console.log("this.typeNotif",this.typeNotif)
      const alert = await this.alertCtrl
      .create({
        header: 'Erreur',
        message: 'Veuillez choisir de recevoir les notifications par téléphone ou email',
        buttons: ['OK']
      })
      
      await alert.present();
      let result = await alert.onDidDismiss();
      return result;
    // console.log(result);
    }
    else {
      const alert = await this.alertCtrl
    .create({
      header: 'Êtes vous sur ?',
      message: 'Vous souhaitez ne recevoir aucune notifications',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: (data: any) => {
            console.log('Canceled', data);
          }
        },
        {
          text: 'Confirmer',
          role: 'confirm',
          handler: (data: any) => {
            console.log('Saved Information', data);
          }
        }
      ]
    })

    await alert.present();
    let result = await alert.onDidDismiss();
    return result;
  }
  

  }


}
