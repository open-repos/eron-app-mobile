import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCalendar, faBook, faClock, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FormationApprenant } from 'src/app/models/formation-apprenant.model';
import { FormationsApprenantService } from 'src/app/services/formations-apprenant.service';

@Component({
  selector: 'app-tab-suivi',
  templateUrl: './tab-suivi.page.html',
  styleUrls: ['./tab-suivi.page.scss'],
})
export class TabSuiviPage implements OnInit {

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
