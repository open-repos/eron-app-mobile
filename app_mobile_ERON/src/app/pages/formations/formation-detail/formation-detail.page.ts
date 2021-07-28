import { FormationsService } from './../../../services/formations.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Formation } from '../formation.model';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.page.html',
  styleUrls: ['./formation-detail.page.scss'],
})
export class FormationDetailPage implements OnInit {
  loadFormation: Formation;

  constructor(
    private activatedRoute: ActivatedRoute,
    private formationsService: FormationsService,
    private router: Router  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('formationId')) {
        // redirect
        return;
      }
      const formationId = paramMap.get('formationId');
      this.loadFormation = this.formationsService.getFormation(formationId);
    });
  }
}
