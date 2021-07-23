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

  contactForm!: FormGroup;
  message: string[];
  // emailComposer= EmailComposer;

  fieldId = [
    {
      title: 'Service à contacter',
      id: 'serviceToContact',
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez choisir un service à contacter.' 
      },
      ]
    },
    {
      title: 'Prénom',
      id: 'firstName',
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez renseigner votre prénom.' 
      },
      ]
    },
    {
      title: 'Nom',
      id: 'lastName',
      validation_messages:[
        {
        type: 'required', 
        message: 'Vous devez renseigner votre Nom.' 
      },
      ]
    },
    {
      title: 'Email',
      id: 'email',
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
      title: 'Objet du message',
      id: 'objet',
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

//   validation_messages = [
//     {   id:'serviceToContact',
//         type: 'required', 
//         message: 'Vous devez choisir un service à contacter.' 
//   },
//   {   id:'Prénoms',
//   type: 'required', 
//   message: 'Un prénom est requis.' 
// },
//   ]

  constructor(private formBuilder: FormBuilder,
              // private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      serviceToContact:  ['', Validators.required],
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      email:  ['',[Validators.required, Validators.email]],
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
    this.router.navigate(['/menu/home']);
  }

  getColor(id: string,i: number) {
    // if(this.contactForm.get(id).hasError('required') && this.contactForm.get(id).touched) {
    if(this.contactForm.get(id).hasError(this.fieldId[i].validation_messages[0].type) && (this.contactForm.get(id).dirty || this.contactForm.get(id).touched)){
      return {"border-color": "red"};
    }else if (this.contactForm.get(id).valid){
      return {"border-color": "green"};
    }
    else {
        return {"border-color": "rgb(201,201,201)"};
      }
    }

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