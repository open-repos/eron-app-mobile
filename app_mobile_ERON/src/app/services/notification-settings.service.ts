import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { filter } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class NotificationSettingsService {
  settingsNotification = new Subject<any[]>();

  isSavedConfig: boolean = false;

  noNotif: boolean;
  typeNotif: boolean;
  notifMustSelected: boolean;

  errorSaveSetting: boolean = false;

  private settings = [
    {
      id: 1,
      toggleName: 'notif-telephone',
      toggleStatus: false
    },
    {
      id: 2,
      toggleName: 'notif-email',
      toggleStatus: false
    },
    {
      id: 3,
      toggleName: 'notif-frequence',
      toggleStatus: ''
    },
    {
      id: 4,
      toggleName: 'notif-news',
      toggleStatus: false
    },
    {
      id: 5,
      toggleName: 'notif-nouvelle-formation',
      toggleStatus: false
    },
    {
      id: 6,
      toggleName: 'notif-rappel-ormation',
      toggleStatus: false
    },
  ]; 

  constructor(private httpClient: HttpClient,
    private alertCtrl: AlertController,
    private router: Router) { }

  emitSettingSubject() {
    console.log("emitSettingSubject Slice",this.settings.slice())
    this.settingsNotification.next(this.settings.slice());
    this.updateStatusNotif()
  }


  switchItem(i: number, fqSelected: string) {
    console.log(fqSelected)
    this.settings[i].toggleStatus = fqSelected;
    this.emitSettingSubject();
}

switchOffAll() {
  for(let setting of this.settings) {
    console.log(typeof setting.toggleStatus)
    if (typeof setting.toggleStatus === "boolean") {
    setting.toggleStatus = false;
  } else {
    continue
  }
}
  this.emitSettingSubject();
}

  switchOnOne(i: number) {
    console.log(i)
    console.log(this.settings[i])
    this.settings[i].toggleStatus = true;
    this.emitSettingSubject();
}

switchOffOne(i: number) {
    this.settings[i].toggleStatus = false;
    this.emitSettingSubject();
}


getSettingsById(id: number) {
  return this.settings.find(
    (s) => {
      return s.id === id;
    }
  );}


  saveSettingsToServer() {

  console.log(this.errorSaveSetting, this.isSavedConfig)
    if (!this.errorSaveSetting && this.isSavedConfig){
    this.httpClient
      .put('https://eron-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json', this.settings)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
      this.router.navigateByUrl('/tabs/tab-profil');
    }
}


getSettingsFromServer() {

  this.httpClient
    .get<any[]>('https://eron-settings-default-rtdb.europe-west1.firebasedatabase.app/settings.json')
    .subscribe(
      (response) => {
        if (response){
        console.log('PAS Erreur ! : ', response);
        this.settings = response;
        this.emitSettingSubject();}},
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}




isLeaveWithoutSaving(){
  if (!this.isSavedConfig){
    this.presentAlertLeaving().then((result)=>{
      console.log(result)
      if (result.role === "confirm"){
        this.isSavedConfig = false;
      // this.router.navigateByUrl('/tabs/tab-profil');
      return
    } else if (result.role === "cancel") {
      this.isSavedConfig = false;
      this.errorSaveSetting = false;
      this.router.navigateByUrl('/tabs/tab-profil/notifications-apprenant');
      return
    }})
  } else {
    // this.presentAlertLeaving().then((result)=>{
    //   console.log(result)
    //   if (result.role === "confirm"){
    //     this.isSavedConfig = true;
    //   this.router.navigateByUrl('/tabs/tab-profil');
    // } else if (result.role === "cancel") {
    //   this.isSavedConfig = false;
    //   this.errorSaveSetting = false;
    //   return
  //   }
  // })
}
  }

presentAlertAnswer(){
  this.presentAlert().then((result)=>{
    console.log(result)
    if (result.role === "confirm"){
      this.isSavedConfig = true;
      this.errorSaveSetting = false;
      this.saveSettingsToServer();
  } else if (result.role === "cancel") {
    this.isSavedConfig = false;
    this.errorSaveSetting = true;
    return
  }

  });
}


updateStatusNotif(){
  for(let setting of this.settings.slice()) {
    if (typeof setting.toggleStatus === "boolean") {
      console.log("MAJ?settingToggleStatus?",setting.toggleStatus)
      if  (setting.toggleStatus === true){
      this.noNotif = false;
      break
      } else {
     this.noNotif = true;
      }
    } else {
      continue
    }
  }

    if (!this.settings[3].toggleStatus
  && !this.settings[4].toggleStatus
  && !this.settings[5].toggleStatus ){
    this.typeNotif = false;
  } else {
    this.typeNotif = true;
  }

  if (this.settings[0].toggleStatus
    || this.settings[1].toggleStatus){
      this.notifMustSelected = true;
    } else {
      this.notifMustSelected = false;
    }

    this.isSavedConfig = false;
}


async presentAlertLeaving() {
  const alert = await this.alertCtrl
  .create({
    header: 'Êtes vous sur ?',
    message: 'Si vous quittez sans enregitrer vous allez perdre vos modifications',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        // handler: (data: any) => {
        //   console.log('Canceled', data);
        // }
      },
      {
        text: 'Confirmer',
        role: 'confirm',
        // handler: (data: any) => {
        //   console.log('Saved Information', data);
        // }
      }
    ]
  })
    this.errorSaveSetting = true
    await alert.present();
    let result = await alert.onDidDismiss();
    return result;
}

async presentAlert() {

  if (!this.noNotif && this.settings[2].toggleStatus === ""){
    const alert = await this.alertCtrl
    .create({
      header: 'Erreur',
      message: 'Veuillez choisir une fréquence de notifications',
      buttons: ['OK'] 
    })
    
    this.errorSaveSetting = true
    await alert.present();
    let result = await alert.onDidDismiss();
    return result;
  // console.log(result);
  } else if (this.typeNotif && !this.notifMustSelected ){
    console.log("this.typeNotif",this.typeNotif)
    const alert = await this.alertCtrl
    .create({
      header: 'Erreur',
      message: 'Veuillez choisir de recevoir les notifications par téléphone ou email',
      buttons: ['OK']
    })

    this.errorSaveSetting = true
    await alert.present();
    let result = await alert.onDidDismiss();
    return result;
  // console.log(result);
  }
  else if (!this.typeNotif && this.notifMustSelected ){
    console.log("this.typeNotif",this.typeNotif)
    const alert = await this.alertCtrl
    .create({
      header: 'Erreur',
      message: 'Veuillez selectionner au moins un type de notifications',
      buttons: ['OK']
    })

    this.errorSaveSetting = true
    await alert.present();
    let result = await alert.onDidDismiss();
    return result;
  // console.log(result);
  }
  else if (this.noNotif && this.settings[2].toggleStatus === "") {
    const alert = await this.alertCtrl
  .create({
    header: 'Êtes vous sur ?',
    message: 'Vous souhaitez ne recevoir aucune notifications',
    buttons: [
      {
        text: 'Annuler',
        role: 'cancel',
        // handler: (data: any) => {
        //   console.log('Canceled', data);
        // }
      },
      {
        text: 'Confirmer',
        role: 'confirm',
        // handler: (data: any) => {
        //   console.log('Saved Information', data);
        // }
      }
    ]
  })

  await alert.present();
  let result = await alert.onDidDismiss();
  return result;
} 
else if(this.noNotif && this.settings[2].toggleStatus !== "jamais"){
  const alert = await this.alertCtrl
  .create({
    header: 'Erreur',
    message: 'Vous avez choisi une fréquence de notifications sans sélectionner de notifications particulière.',
    buttons: ['OK']
  })


  await alert.present();
  let result = await alert.onDidDismiss();
  return result;
}
else {
  const alert = await this.alertCtrl
  .create({
    header: 'Confirmation',
    message: 'Vos paramètres de notifications sont validés',
    buttons: [{
      text:'OK',
      role:'confirm'
  }]
  })

  await alert.present();
  let result = await alert.onDidDismiss();
  return result;
}

// }
}


}


