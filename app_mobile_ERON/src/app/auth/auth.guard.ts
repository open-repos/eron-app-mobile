import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private authService:AuthService, private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isAuthenticated = !!(+localStorage.getItem('authenticated'))
    console.log("is Auth:",this.authService.userIsAuthenticated) 
    if(this.authService.userIsAuthenticated){
      return true;
    }else{
      const navigation = this.router.getCurrentNavigation();
      let url ='/';
      if(navigation){
        url = navigation.extractedUrl.toString()
      }
      this.router.navigate(['/login'],{queryParams: { returnto: url}});
      return false;
    }
    // if (!this.authService.userIsAuthenticated){
    //   this.router.navigateByUrl('/login');
    // }
    //   return this.authService.userIsAuthenticated;
  }
}
