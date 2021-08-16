import { Component, OnInit } from '@angular/core';
import { faPhone, faEnvelopeOpenText, faChevronCircleDown, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  faPhone = faPhone;
  faEnvelope = faEnvelopeOpenText;
  faMap = faMapMarkerAlt;
  faChevronDown = faChevronCircleDown;


  constructor() { }


  ngOnInit() {
  }

}
