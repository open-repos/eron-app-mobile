import { Router } from '@angular/router';
import { FormationApprenant } from './../../models/formation-apprenant.model';
import { Component, OnInit } from '@angular/core';
import { faArrowDown, faBook, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
import { FormationsApprenantService } from 'src/app/services/formations-apprenant.service';

@Component({
  selector: 'app-tab-formation',
  templateUrl: './tab-formation.page.html',
  styleUrls: ['./tab-formation.page.scss'],
})
export class TabFormationPage implements OnInit {

  faCalendar = faCalendar;
  faBook = faBook;
  faClock = faClock;
  faArrowDown = faArrowDown;

  formationApprenants: FormationApprenant[];
  constructor( private formationApprenantService: FormationsApprenantService, private router:Router) {

  }
  
  ngOnInit() {
    this.formationApprenants = this.formationApprenantService.formationsApprenant;
  }

  goToDetail(id: string){
    // this.router.navigateByUrl('/tabs/tab-formation', { skipLocationChange: true });
    this.router.navigate(['/tabs/tab-formation/', id],{ replaceUrl: true });
  }

}
