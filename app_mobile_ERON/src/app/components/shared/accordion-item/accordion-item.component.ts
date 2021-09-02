import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, Input, OnInit } from '@angular/core';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { contentAccordionItem } from 'src/app/models/content-accordion-item.model';

export interface ObjectExpand {
  isExpanded: boolean;
}

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
})
export class AccordionItemComponent implements OnInit {
  // 1ere option sans boucle

  // this.expandedCheck = {isExpanded: true};
  // expandedCheck:ObjectExpand = { isExpanded:false};
  // expandedArray: ObjectExpand[];

  //2eme option avec boucle

  @Input() items:contentAccordionItem[] =[];

  iconOpen = faChevronRight;
  iconClose = faChevronUp;
  iconTemplate: IconProp = faChevronRight;
  expandedArray: ObjectExpand[] = [];


  constructor() {
  
  }

  ngOnInit() {
      // DEUX FACONS de creer l'array d'objet souhaité

    // 1ere option sans boucle
    // this.expandedCheck = {isExpanded: true};
    // this.expandedArray = Array.from({length:this.itemFaq.length}).map(x => this.expandedCheck);

    this.addExpandablesItem()
   
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.expandedArray.map((listItem) => {
        if (item == listItem) {
          listItem.isExpanded = !listItem.isExpanded;
        } else {
          listItem.isExpanded = false;
        }
        return listItem;
      });
    }
  }

  addExpandablesItem(){
     //2eme option avec boucle
     if (this.expandedArray.length == 0) {
      for (var _i = 0; _i < this.items.length; _i++) {
        this.expandedArray.push({ isExpanded: false });
      }
    }
  }
  
  ngOnDestroy() {
    // console.log(this.expandedArray)
    this.expandedArray.length = 0;
    // console.log(this.expandedArray)
  }
}
