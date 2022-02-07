import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variable déclaré en "private" pour empecher accidentellement de transformer la variable en vrai ou faux ailleurs que dans les fonctions login et logout de ce service
  private _userIsAuthenticated: boolean=false;
// TODO: remettre en false une fois développement terminé
  get userIsAuthenticated(){
    return this._userIsAuthenticated;
  }

  constructor() { }

  login(){
    this._userIsAuthenticated = true;
  }

  logout(){
    this._userIsAuthenticated = false;
  }
}
