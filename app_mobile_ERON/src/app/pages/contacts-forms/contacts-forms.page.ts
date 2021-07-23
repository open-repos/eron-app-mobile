import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-forms',
  templateUrl: './contacts-forms.page.html',
  styleUrls: ['./contacts-forms.page.scss'],
})
export class ContactsFormsPage implements OnInit {

  userForm!: FormGroup;
  message: string[];
  constructor(private formBuilder: FormBuilder,
              // private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName:  ['',Validators.required],
      email:  ['',[Validators.required, Validators.email]],
      serviceToContact:  ['', Validators.required],
    });
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    this.message = [
      formValue['firstName'],
      formValue['lastName'],
      formValue['email'],
      formValue['serviceToContact'],
      // formValue['hobbies'] ? formValue['hobbies'] : []
    ];
    console.log(this.message);
    // this.userService.addUser(newUser);
    this.router.navigate(['/menu/home']);
  }

//   getHobbies(): FormArray {
//     return this.userForm.get('hobbies') as FormArray;
// }

// onAddHobby() {
//   const newHobbyControl = this.formBuilder.control(null, Validators.required);
//   this.getHobbies().push(newHobbyControl);
// }

}