import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

// ALTERNATIVE EN CAS DE PROBLEME DE COULEUR ACTIF et NON ACTIF des TABS

  // isActiveTabSuivi : boolean = true;
  // iconTabSuivi: string;
  // pathIconSuiviNoActive: string ="../../assets/icon/icon-tab-suivi-noSelected.svg";
  // pathIconSuiviActive: string ="../../assets/icon/icon-tab-suivi-Selected.svg";

  // isActiveTabFormation : boolean = true;
  // iconTabFormation: string;
  // pathIconFormationActive: string ="../../assets/icon/icon-tab-formations-book.circle.fill-Selected.svg";
  // pathIconFormationNoActive: string ="../../assets/icon/icon-tab-formations-book.circle.fill-noSelected.svg";
  // @ViewChild('tabs', { static: false }) tabs: IonTabs;

  constructor() { }

  ngOnInit() {
  }

// ALTERNATIVE EN CAS DE PROBLEME DE COULEUR ACTIF et NON ACTIF des TABS

  // setCurrentTab(){
  //   console.log(this.tabs.getSelected())
  //   if (this.tabs.getSelected() === "tab-suivi"){
  //     this.isActiveTabSuivi = true;
  //     this.iconTabSuivi = this.pathIconSuiviActive
  //   } else {
  //     this.isActiveTabSuivi = false;
  //     this.iconTabSuivi = this.pathIconSuiviNoActive
  //   }


  // if (this.tabs.getSelected() === "tab-formation"){
  //   this.isActiveTabFormation = true;
  //   this.iconTabFormation = this.pathIconFormationActive
  // } else {
  //   this.isActiveTabFormation = false;
  //   this.iconTabFormation = this.pathIconFormationNoActive
  // }
// }

}
