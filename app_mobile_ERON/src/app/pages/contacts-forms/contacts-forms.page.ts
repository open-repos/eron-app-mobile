import { CustomvalidationService } from 'src/app/services/customvalidation.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { EmailComposer } from '@ionic-native/email-composer';
@Component({
  selector: 'app-contacts-forms',
  templateUrl: './contacts-forms.page.html',
  styleUrls: ['./contacts-forms.page.scss'],
})
export class ContactsFormsPage implements OnInit {

  isEmailClean: boolean = true;
  isErrorSelect : boolean = false;
  contactForm!: FormGroup;
  message: string[];
  // emailComposer= EmailComposer;

  fieldId = [
    {
      title: 'Service à contacter*',
      id: 'serviceToContact',
      focus: false,
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez choisir un service à contacter.' 
      },
      ]
    },
    {
      title: 'Prénom*',
      id: 'firstName',
      focus: false,
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez renseigner votre prénom.' 
      },
      ]
    },
    {
      title: 'Nom*',
      id: 'lastName',
      focus: false,
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez renseigner votre Nom.' 
      },
      ]
    },
    {
      title: 'Email*',
      id: 'email',
      focus: false,
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez renseigner votre email.' 
      },
      {
        type: 'email', 
        message: "L'email n'est pas valide." 
      },
      ]
    },
    {
      title: 'Objet du message*',
      id: 'objet',
      focus: false,
      validation_messages:[
        {
        type: 'required', 
        message: "Vous devez renseigner l'objet du message."
      },
      {
        type: 'minlength',
        message: "Minimum 5 caractères requis"
      }
      ]
    },
  ]


  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private customValidator: CustomvalidationService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      serviceToContact:  ['', Validators.required],
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      email:  ['',Validators.compose([Validators.required, this.customValidator.patternValidatorEmail()])],
      objet: ['',[Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])]]
    });
  }

  onSubmitForm() {
    const formValue = this.contactForm.value;
    this.message = [
      formValue['serviceToContact'],
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['objet'],
    ];
    console.log(this.message);
    // this.sendEmail();
    this.router.navigate(['/']);
  }

  getColor(id: string,i: number) {
    this.isEmailClean = this.contactForm.controls['email'].valid || !this.contactForm.controls['email'].dirty;
    let isNotValidField = this.contactForm.get(id).hasError(this.fieldId[i].validation_messages[0].type) && (this.contactForm.get(id).dirty || this.contactForm.get(id).touched)
    
if(this.fieldId[i].id==="email"){

  if(isNotValidField || !this.isEmailClean){
    return {"border-color": "red"};
  }else if (this.contactForm.get(id).valid){
    return {"border-color": "green"};
  }
  else {
      return {"border-color": "rgb(201,201,201)"};
    }

} else {

  if(isNotValidField){
    return {"border-color": "red"};
  }else if (this.contactForm.get(id).valid){
    return {"border-color": "green"};
  }
  else {
      return {"border-color": "rgb(201,201,201)"};
    }

}
   
    
  }

    // classTest(id: string,i: number){
    //   // console.log("this.contactForm['serviceToContact']",this.contactForm)
    //   // console.log("focus",this.fieldId[i].focus)
    //   let isNotValidField = this.contactForm.get(id).hasError(this.fieldId[i].validation_messages[0].type) && (this.contactForm.get(id).dirty)
    //   if (isNotValidField){
    //     this.isErrorSelect = true
    //     return 'error-message'
    //   } else{
    //     this.isErrorSelect = false
    //     return ''
    //   }
      
    // }

    // async testClick(){
    //   this.isErrorSelect = await  
    //   true
    //   console.log(this.isErrorSelect)
    // }

//     sendEmail(){
//       const formValue = this.contactForm.value;
//     this.message = [
//       formValue['serviceToContact'],
//       formValue['firstName'],
//       formValue['lastName'],
//       formValue['email'],
//       formValue['objet'],
//     ];
//       let email = {
// to: this.message[1],
// subject: 'Objet du message',
// body: this.message[-1]
//       };
//       this.emailComposer.open(email);
//     }


}