// import { google } from 'google-maps';
import { Component, OnInit } from '@angular/core';
import { faEnvelopeOpenText, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelopeOpenText;
  faMap = faMapMarkerAlt;
//   map: any;
// @ViewChild('map', {static:true}) mapRef: ElementRef;
  constructor() {}

  ngOnInit() {
    // this.initMap();
  }


//   initMap() {
// let coords = new google.maps.LatLng(45,100)
// let mapOptions: google.maps.MapOptions = {
//   center: coords,
//   zoom: 14,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// }
// this.map = new google.maps.Map(this.mapRef.nativeElement,
//   mapOptions)
//   }




}
