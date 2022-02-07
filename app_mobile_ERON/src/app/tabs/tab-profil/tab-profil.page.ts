import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-profil',
  templateUrl: './tab-profil.page.html',
  styleUrls: ['./tab-profil.page.scss'],
})
export class TabProfilPage implements OnInit {

  iconList=faChevronRight;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLogout(){
    this.authService.logout();
    console.log(this.authService.userIsAuthenticated)
    this.router.navigateByUrl('/');
  }

}
