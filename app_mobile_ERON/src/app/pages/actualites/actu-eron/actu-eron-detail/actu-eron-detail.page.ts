import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActualitesEronService } from 'src/app/services/actualites-eron.service';
import { ActutalitesEron } from '../../../../models/actu-eron.model';

@Component({
  selector: 'app-actu-eron-detail',
  templateUrl: './actu-eron-detail.page.html',
  styleUrls: ['./actu-eron-detail.page.scss'],
})
export class ActuEronDetailPage implements OnInit {

  loadActualiteEron: ActutalitesEron;

  constructor(
    private activatedRoute: ActivatedRoute,
    private actualitesService: ActualitesEronService ) {}

  ngOnInit() {
    console.log(this.activatedRoute)
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('actualiteId')) {
        // redirect
        return;
      }
      const actualiteId = paramMap.get('actualiteId');
      this.loadActualiteEron = this.actualitesService.getActualite(actualiteId);
    });
  }
}