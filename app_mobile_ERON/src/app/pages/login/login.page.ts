import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faMailBulk
} from '@fortawesome/free-solid-svg-icons';
import { faMailchimp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  @Input() label: string;
  @Input() type = 'text'; // set default type be text

  focused: boolean;
  focusedPassword: boolean;

  userInfo: string;
  loginForm!: FormGroup;

  // iconShowPassword = faEye;
  // iconHidePassword = faEyeSlash;
  iconEmail = faEnvelope;


passwordType: string = 'password';
 passwordIcon: IconProp = faEye;


  constructor(private formBuilder: FormBuilder,
    private router: Router) { }

    ngOnInit() {
      this.initForm();
    }
  
    initForm() {
      this.loginForm = this.formBuilder.group({
        email:  ['',[Validators.required, Validators.email]],
        password: ['',Validators.required]
      }),
      { updateOn: "blur" };
    }

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.userInfo = formValue['email'];
    console.log(this.userInfo);
    // this.sendEmail();
    this.router.navigate(['/']);
  }



  onBlur(event:any) {
    const value = event.target.value;
    const type = event.target.type;
    if (!value && type === "email") {
      this.focused = false;
    } else if(!value && type === "password"){
      this.focusedPassword = false;
    }
  }

  tooglePassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === faEye ? faEyeSlash : faEye;
}

}
