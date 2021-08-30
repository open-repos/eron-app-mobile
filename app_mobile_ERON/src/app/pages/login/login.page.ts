import { AuthService } from './../../services/auth.service';
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
import { CustomvalidationService } from 'src/app/services/customvalidation.service';

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
    private router: Router, 
    private authService:AuthService,
    private customValidator: CustomvalidationService) { }

    ngOnInit() {
      this.initForm();
    }
  
    initForm() {
      this.loginForm = this.formBuilder.group({
        email:  ['',Validators.compose([Validators.required, this.customValidator.patternValidatorEmail()])],
        password: ['',Validators.required]
      }),
      { updateOn: "blur" };
    }

  onSubmitForm() {
    const formValue = this.loginForm.value;
    this.userInfo = formValue['email'];
    console.log(this.userInfo);
    // this.sendEmail();
    this.onLogin();
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

onLogin(){
  this.authService.login();
  this.router.navigate(['/tabs/tab-suivi']);
}



classLabelFormEmail(){
  const emailValue = this.loginForm.value['email'];
  const isEmailClean = this.loginForm.controls['email'].valid || !this.loginForm.controls['email'].dirty;
  // console.log("this.loginForm.controls['email'].valid",this.loginForm.value['email'] + ' ' +this.loginForm.controls['email'].valid)
  // console.log("this.loginForm.controls['email'].dirty",this.loginForm.value['email'] + ' ' + this.loginForm.controls['email'].dirty)
  // console.log('isEmailClean',isEmailClean)
  // console.log("emailValue !== '' &&  isEmailClean", emailValue !== '' &&  isEmailClean)
  if ( (emailValue === '' && this.focused) || (emailValue !== '' &&  isEmailClean) ){
    return 'label-focused'
  } else if (emailValue === '' && !this.focused){
    return ''
  } else if ( emailValue !== '' && !isEmailClean ){
    return 'invalid-error'
  }
}


// (loginForm.controls.email.value === '' && focused) ? '' : loginForm.controls.email.value !== '' ? ((!loginForm.controls.email?.valid && loginForm.controls.email?.dirty ) ? 'border-invalid-error': '' ) : focused ? ((!loginForm.controls.email?.valid && loginForm.controls.email?.dirty ) ? 'border-invalid-error': '' ): '' 
classInputFormEmail(){
  const emailValue = this.loginForm.value['email'];
  const isEmailClean = this.loginForm.controls['email'].valid || !this.loginForm.controls['email'].dirty;

  if (emailValue === '' && this.focused ){
    return ''
  } else if (isEmailClean && emailValue !== '') {
    return ''
  }
  else if ( emailValue !== '' && !isEmailClean ){
    return 'border-invalid-error'
}
}


}
