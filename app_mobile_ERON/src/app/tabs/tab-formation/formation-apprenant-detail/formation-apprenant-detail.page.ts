import { ActivatedRoute } from '@angular/router';
import { FormationsApprenantService } from './../../../services/formations-apprenant.service';
import { FormationApprenant } from './../../../models/formation-apprenant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-apprenant-detail',
  templateUrl: './formation-apprenant-detail.page.html',
  styleUrls: ['./formation-apprenant-detail.page.scss'],
})
export class FormationApprenantDetailPage implements OnInit {

  loadFormationApprenant: FormationApprenant;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formationApprenantService: FormationsApprenantService ) {}

  ngOnInit() {
    console.log(this.activatedRoute)
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('formationApprenantId')) {
        // redirect
        return;
      }
      const formationApprenantId = paramMap.get('formationApprenantId');
      this.loadFormationApprenant = this.formationApprenantService.getFormationApprenant(formationApprenantId);
    });
  }
}

