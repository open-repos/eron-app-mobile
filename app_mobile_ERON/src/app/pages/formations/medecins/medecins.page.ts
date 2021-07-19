// import { ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faHands, faPills, faTeethOpen, faUserMd, faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.page.html',
  styleUrls: ['./medecins.page.scss'],
})
export class MedecinsPage implements OnInit {


@ViewChild(IonSlides) slider: IonSlides;
segment : number;
categories= [
  {
    id: "seg-0",
    value: 0,
    title: 'Médecins',
    url: '/menu/formations-medecins',
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
constructor(private router: Router) {
  
  this.segment = 0
}

ngOnInit() {
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

//NE FONCTIONNE PAS (mais a réfléchir en cas de bug en deploiement)
// focusSegment(segmentID){
//   this.router.navigate([],{fragment: ('seg-'+segmentID)});
// }

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