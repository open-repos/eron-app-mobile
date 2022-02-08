import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variable déclaré en "private" pour empecher accidentellement de transformer la variable en vrai ou faux ailleurs que dans les fonctions login et logout de ce service
  private _userIsAuthenticated: boolean;
// TODO: remettre en false une fois développement terminé
  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  constructor() {
   this._userIsAuthenticated=false;
   }

  login(user:string){
    this._userIsAuthenticated = true;
    localStorage.setItem('authenticated','1')
    localStorage.setItem('userInfo',user)
  }

  logout(){
    localStorage.clear()
    this._userIsAuthenticated = false;
    // this._userIsAuthenticated = false;
  }
}
