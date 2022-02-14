import { User } from './../models/User.model';
import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword,signOut } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginData } from '../models/loginData.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variable déclaré en "private" pour empecher accidentellement de transformer la variable en vrai ou faux ailleurs que dans les fonctions login et logout de ce service
  private _userIsAuthenticated: boolean;
  loginUrl:string = "";
  userData: User;

  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  constructor(private auth: Auth,
    private router: Router, 
    private activatedRoute:ActivatedRoute) {
      this.loginUrl = this.activatedRoute.snapshot.queryParamMap.get('returnto') || 'tabs/tab-suivi' 
      this.auth.onAuthStateChanged((user)=>{
        console.log("avant verfi user",typeof(user))
            if (user) {
              console.log(user)
              // user.getIdToken(true)
              //   .then((token)=>{
              //     this.userData.accessToken = token
              //   })
              //   .catch((e) => console.log(e.message));
              // console.log(user.email)
              // this.userData.email=user.email
              // this.userData.displayName=user.displayName
              // this.userData.emailVerified=user.emailVerified
              // this.userData.photoURL=user.photoURL
              // this.userData.uid=user.uid
              localStorage.setItem('user', JSON.stringify(user));
            } else {
              localStorage.setItem('user', null);
              JSON.parse(localStorage.getItem('user'));
            }
          })

      // this..subscribe(user => {
      //   if (user) {
      //     this.userData = user;
      //     localStorage.setItem('user', JSON.stringify(this.userData));
      //     JSON.parse(localStorage.getItem('user'));
      //   } else {
      //     localStorage.setItem('user', null);
      //     JSON.parse(localStorage.getItem('user'));
      //   }
      // })

    if(!!(+localStorage.getItem('authenticated'))){
      this._userIsAuthenticated=true;
    } else {
      this._userIsAuthenticated=false;
    }

   }

  login({email, password}: LoginData){
    signInWithEmailAndPassword(this.auth, email, password)
    .then(() => {
    console.log(this.auth.currentUser)
    this._userIsAuthenticated = true,
    localStorage.setItem('authenticated','1'),
    this.router.navigateByUrl(this.loginUrl)})
    .catch((e) => console.log(e.message));
  }

  logout(){
    localStorage.clear()
    this._userIsAuthenticated = false;
    return signOut(this.auth);
    // this._userIsAuthenticated = false;
  }

  getCurrentUser(auth) {
    console.log("inside get current user")
    return new Promise((resolve, reject) => {
       const unsubscribe = auth.onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
       }, reject);
    });
  }
}
