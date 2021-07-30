import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Component, OnInit } from '@angular/core';
import { faChevronRight, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

  iconOpen = faChevronRight;
  iconClose = faChevronUp;
  iconTemplate: IconProp = faChevronRight;
  expandedArray: ObjectExpand[] = [];

  itemFaq = [
    {
      titre: 'Combien de temps pour une formation ?',
      reponse: 'Il faut .......................................',
    },
    {
      titre: 'Combien de temps pour une formation ?',
      reponse: 'Il faut .......................................',
    },
    {
      titre: 'Combien de temps pour une formation ?',
      reponse: 'Il faut .......................................',
    },
    {
      titre: 'Combien de temps pour une formation ?',
      reponse: 'Il faut .......................................',
    },
  ];

  constructor() {
    // DEUX FACONS de creer l'array d'objet souhaité

    // 1ere option sans boucle
    // this.expandedCheck = {isExpanded: true};
    // this.expandedArray = Array.from({length:this.itemFaq.length}).map(x => this.expandedCheck);

    //2eme option avec boucle
    if (this.expandedArray.length == 0) {
      for (var _i = 0; _i < this.itemFaq.length; _i++) {
        this.expandedArray.push({ isExpanded: false });
      }
    }
  }

  ngOnInit() {}

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

  ngOnDestroy() {
    // console.log(this.expandedArray)
    this.expandedArray.length = 0;
    // console.log(this.expandedArray)
  }
}
