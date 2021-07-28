import { ActualitesEronService } from './../../../services/actualites-eron.service';
import { ActutalitesEron } from './../actu-eron/actu-eron.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualite-detail',
  templateUrl: './actualite-detail.page.html',
  styleUrls: ['./actualite-detail.page.scss'],
})
export class ActualiteDetailPage implements OnInit {

  loadActualiteEron: ActutalitesEron;

  constructor(
    private activatedRoute: ActivatedRoute,
    private actualitesService: ActualitesEronService ) {}

  ngOnInit() {
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
