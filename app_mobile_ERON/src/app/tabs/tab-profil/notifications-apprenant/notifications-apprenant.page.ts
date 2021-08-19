import { NotificationSettingsService } from './../../../services/notification-settings.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { forkJoin, Observable } from 'rxjs';
import { Subscription } from 'rxjs';

// test site internet https://medium.com/ngx/3-ways-to-implement-conditional-validation-of-reactive-forms-c59ed6fc3325

function requiredIfValidator(predicate) {
  return (formControl) => {
    if (!formControl.parent) {
      return null;
    }
    if (predicate()) {
      return Validators.required(formControl);
    }
    return null;
  };
}

@Component({
  selector: 'app-notifications-apprenant',
  templateUrl: './notifications-apprenant.page.html',
  styleUrls: ['./notifications-apprenant.page.scss'],
})
export class NotificationsApprenantPage implements OnInit {
  selected: string;
  status: boolean;
  noNotif: boolean;
  typeNotif: boolean;
  notifMustSelected: boolean;
  // HTML VERS TYPESCRIPT
  // @Input()
  // notifStatus!: boolean;

  // @Input()
  // id!: number;

  settings!: any[];
  settingSubscription!: Subscription;

  // notifForm!: FormGroup;
  // message: Array<string>;

  // toggleNotifTel: boolean;
  // toggleNotifEmail: boolean;
  // toggleNotifTypeNews: boolean;
  // toggleNotifTypeNouvelleFormation: boolean;
  // toggleNotifTypeRappel: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertCtrl: AlertController,
    private settingService: NotificationSettingsService
  ) {}

  ngOnInit() {
    this.settingSubscription =
      this.settingService.settingsNotification.subscribe((settings: any[]) => {
        this.settings = settings;
      });

     this.settingService.getSettingsFromServer();
    //   console.log("returnHttp", returnGetFromServer)
    this.settingService.emitSettingSubject();
  }

  onSelect(index: number ,selected: string) {
    const id = index - 1;
    console.log('selectedItem:', selected);
    this.settingService.switchItem(id,selected);
    if (selected === 'jamais'){
      this.settingService.switchOffAll()
    }
  }

  onSwitch(index: number) {
    const id = index - 1;
    if (this.settings[id].toggleStatus === true) {
      console.log(this.settings[id]);
      this.settingService.switchOffOne(id);
    } else if (this.settings[id].toggleStatus === false) {
      console.log(this.settings[id]);
      this.settingService.switchOnOne(id);
    }
  }

  onSave() {
    // this.settingService.saveSettingsToServer();
    this.settingService.presentAlertAnswer();
  }

  onFetch() {
    this.settingService.getSettingsFromServer();
  }


  ionViewWillLeave(){
    console.log("ionViewWillLeave")
    this.settingService.isLeaveWithoutSaving()
  }

  ngOnDestroy() {
    console.log("leave")
    this.settingSubscription.unsubscribe();
  }


  



  // initForm() {
  //   this.notifForm = this.formBuilder.group({
  //     // notifFrequence:  ['',  emailConditionallyRequiredValidator],
  //     notifPhone:  [false],
  //     notifEmail:  [false],
  //     notifNews:  [false],
  //     notifNouvelleFormation: [false],
  //     notifRappelFormation: [false],
  //     notifFrequence:  [''],
  //   });

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

  // }

  // onToggleBtnChange(e){
  //   const isChecked = this.notifForm.get('notifPhone').value ||
  //   this.notifForm.get('notifPhone').value ||
  //   this.notifForm.get('notifEmail').value ||
  //   this.notifForm.get('notifNews').value ||
  //   this.notifForm.get('notifNouvelleFormation').value ||
  //   this.notifForm.get('notifRappelFormation').value
  //   console.log(isChecked)
  //   if(isChecked) {
  //     this.notifForm.get('notifFrequence').setValidators(Validators.required);
  //     this.notifForm.get('notifFrequence').updateValueAndValidity();
  //     // console.log('NOTIFFREQUENCE SET',this.notifForm.get('notifFrequence'))
  //   } else {
  //     this.notifForm.get('notifFrequence').clearValidators();
  //     this.notifForm.get('notifFrequence').updateValueAndValidity();
  //     // console.log('NOTIFFREQUENCE CLEAR',this.notifForm.get('notifFrequence'))
  //   }

  //   const formValue = this.notifForm.value;
  //   if (!formValue['notifNews']
  //   && !formValue['notifNouvelleFormation']
  //   && !formValue['notifRappelFormation'] ){
  //     this.typeNotif = false;
  //   } else {
  //     this.typeNotif = true;
  //   }

  //   console.log("this.typeNotif",this.typeNotif)
  // }

  // onSubmitForm() {
  //   const formValue = this.notifForm.value;
  //   this.message = [
  //     formValue['notifFrequence'],
  //     formValue['notifPhone'],
  //     formValue['notifEmail'],
  //     formValue['notifNews'],
  //     formValue['notifNouvelleFormation'],
  //     formValue['notifRappelFormation'],
  //   ];

  //   console.log('message',this.message);
  //   // this.sendEmail();
  //   if (!formValue['notifPhone']
  //   && !formValue['notifEmail']
  //   && !formValue['notifNews']
  //   && !formValue['notifNouvelleFormation']
  //   && !formValue['notifRappelFormation'] ){
  //     this.noNotif = true;
  //   } else {
  //     this.noNotif = false;
  //   }
  //   console.log("noNotif? " , this.noNotif)

  //   this.presentAlert().then((result)=>{
  //     console.log(result)
  //     if (result.role === "confirm"){
  //     this.router.navigateByUrl('/tabs/tab-profil');
  //   } else if (result.role === "cancel") {
  //     return
  //   }

  //   });
  // }

  
}
