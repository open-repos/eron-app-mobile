import { LoginData } from './../../models/loginData.model';
import { AuthService } from './../../services/auth.service';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faMailBulk
} from '@fortawesome/free-solid-svg-icons';
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

  userInfo: LoginData;
  loginForm!: FormGroup;

  emailError:boolean;
  passwordEmpty:boolean;

  messageFirebase:string;
  errorMessage:string;
  erroMessageDisplay:boolean=false;
  // iconShowPassword = faEye;
  // iconHidePassword = faEyeSlash;
  iconEmail = faEnvelope;
  loginUrl:string ="";
  


passwordType: string = 'password';
 passwordIcon: IconProp = faEye;


  constructor(private formBuilder: FormBuilder,
    private router: Router, 
    private authService:AuthService,
    private customValidator: CustomvalidationService,
    private activatedRoute:ActivatedRoute) { }

    ngOnInit() {
      this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'tabs/tab-suivi' 
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
    const isEmailClean = this.loginForm.controls['email'].valid || !this.loginForm.controls['email'].dirty;
    console.log(isEmailClean)
    if (formValue['email']=="" || !isEmailClean ) {
       this.emailError= true
      } else{
        this.emailError= false
      }
    if (formValue['password']=="") {
      this.passwordEmpty= true
    } else {
      this.passwordEmpty= false
    }
    if (this.passwordEmpty && this.emailError){
      this.errorMessage= "Mot de passe non renseigné et Email non valide"
      this.erroMessageDisplay=true
    } else if(this.passwordEmpty && !this.emailError){
      this.errorMessage= "Mot de passe non renseigné"
      this.erroMessageDisplay=true
    } else if(!this.passwordEmpty && this.emailError){
      this.errorMessage= "Email non valide"
      this.erroMessageDisplay=true
    } else {
      this.userInfo=formValue['email']
      console.log(this.userInfo);
      this.erroMessageDisplay=false
      // this.sendEmail();
      this.onLogin();
    }

  }

  erroLoginUserNotFound(){
  this.erroMessageDisplay= true
  this.errorMessage = "Vous n'êtes pas encore inscris chez nous"
}
erroLoginPsswdOrEmailWrong(){
  this.erroMessageDisplay= true
  this.errorMessage = "Votre mot de passe ou votre adresse sont incorrect"
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
  const email = this.loginForm.value['email']
  const password = this.loginForm.value['password']
  const userInfo = {email,password}
  console.log(this.userInfo)
  this.authService.login(userInfo)
  .then(() => {
    // console.log(this.authService.auth.currentUser)
    // this.authService._userIsAuthenticated = true,
    this.messageFirebase="OK"
  })
    .catch((e) => {  this.messageFirebase=e.message,
      console.log(this.messageFirebase)
       })
       .finally(()=>{
         if (this.messageFirebase == "Firebase: Error (auth/wrong-password)."){
        this.erroLoginPsswdOrEmailWrong()
      } else if (this.messageFirebase == "Firebase: Error (auth/user-not-found)."){
        this.erroLoginUserNotFound()
      } else{
        localStorage.setItem('authenticated','1')
        console.log("this.loginUrl",this.loginUrl)
        this.router.navigateByUrl(this.loginUrl)
      }})
  // this.router.navigate(['/tabs/tab-suivi']);
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
