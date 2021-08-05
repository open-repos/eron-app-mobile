import { FormationsService } from './../../../services/formations.service';
import { Formation } from '../../../models/formation.model';
// import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHands, faPills, faTeethOpen, faUserMd, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.page.html',
  styleUrls: ['./medecins.page.scss'],
})
export class MedecinsPage implements OnInit {

public idFormation: number;
formations: Formation[];

@ViewChild(IonSlides) slider: IonSlides;

value: string;
public href: string = "";
segment : number;
categories= [
  {
    id: "seg-0",
    value: 0,
    title: 'Médecins',
    url: '/menu/formations',
    icon: faUserMd
  },
  {
    id: "seg-1",
    value: 1,
    title: 'Dentistes',
    url: '/menu/formations-dentistes',
    icon:faTeethOpen
  },        
  {
    id: "seg-2",
    value: 2,
    title: 'Infirmiers',
    url: '/menu/formations-infirmiers',
    icon:faUserNurse
  },
  {
    id: "seg-3",
    value: 3,
    title: 'Pharmaciens',
    url: '/menu/formations-pharmaciens',
    icon:faPills
  },
  {
    id: "seg-4",
    value: 4,
    title: 'Kinésitérapeuthes',
    url: '/menu/formations-kine',
    icon:faHands
  }
]
constructor(private formationsService: FormationsService, private route: ActivatedRoute, private navCtrl: NavController, private router: Router) {
//   this.route.params.subscribe(params => {
//     this.value = params['value'];
//     console.log(this.value);
// });
  // this.segment = 0
  // console.log(this.router.getCurrentNavigation().extras)

  // this.idFormation = this.router.getCurrentNavigation().extras.state.example;

  // console.log("this.router.getCurrentNavigation().extras.state.example " + this.idFormation)
    // console.log(history.state) 
    // this.segment = this.idFormation
    // console.log('seg-'+this.segment)
    // this.focusSegment(this.segment);
}

// ionViewWillEnter(){
//   console.log(this.router.getCurrentNavigation())
// }

ngOnInit() {
  this.route.queryParams.subscribe(queryParams => {
	console.log(queryParams)
 this.segment= queryParams.formation
    // do something with the query params
	});
  
  this.formations = this.formationsService.getAllFormations();
  
}


async segmentChanged(event) {
await this.slider.slideTo(this.segment);
this.slider.update();
}
async slideChanged() {
this.segment = await this.slider.getActiveIndex();
this.focusSegment(this.segment);
}

focusSegment(segmentId) {
document.getElementById('seg-'+segmentId).scrollIntoView({ 
  behavior: 'smooth',
  block: 'center',
  inline: 'center'
});
}

ionViewDidLeave(){
  console.log("LEAVE"+this.segment)
}


}

// Lien Utiles : 
// https://www.codegrepper.com/code-examples/typescript/on+button+click+scroll+to+div+angular
// https://dev.to/ferfox1981/tree-ways-to-scroll-to-an-element-using-angular-1dlj


// AUTRES METHODES NON COMPLETE
//   @ViewChild('slides') slides: IonSlides;
//   selectedSlide: any;
//   segment =0;
//   num : number;
//   sliderOptions = {
//     initialSlide: 0,
//     slidesPerview: 1,
//     speed: 200
//   }
//   categories= [
//     {
//       id: "seg-1",
//       value: 0,
//       title: 'Médecins',
//       url: '/menu/formations-medecins',
//       icon: faUserMd
//     },
//     {
//       id: "seg-2",
//       value: 1,
//       title: 'Dentistes',
//       url: '/menu/formations-dentistes',
//       icon:faTeethOpen
//     },        
//     {
//       id: "seg-3",
//       value: 2,
//       title: 'Infirmiers',
//       url: '/menu/formations-infirmiers',
//       icon:faUserNurse
//     },
//     {
//       id: "seg-4",
//       value: 3,
//       title: 'Pharmaciens',
//       url: '/menu/formations-pharmaciens',
//       icon:faPills
//     },
//     {
//       id: "seg-5",
//       value: 4,
//       title: 'Kinésitérapeuthes',
//       url: '/menu/formations-kine',
//       icon:faHands
//     }
//   ]
//   constructor(private _vps: ViewportScroller) { 
//     this.segment = 0;
//   }

//   ngOnInit() {
//   }

//   async onCategoryChanged(category){
//     await this.selectedSlide.slideTo(this.segment)
//   }

// async  slideChanged(slides){
// console.log(slides)
// this.selectedSlide = slides;
// slides.getActiveIndex().then(selectedIndex =>{
//   this.segment = selectedIndex
// })
// console.log("segment:" + this.segment)
// this.num = this.segment+1;
// console.log("Num:" + this.num)
// console.log("NumtoStr:" + this.num.toString())
// this.scrollFn(this.num.toString())
//   }

//   scrollFn(anchor: string): void{
//     console.log("scroll Anchor:" + anchor)
//   	this._vps.scrollToAnchor("seg-"+anchor)
// }