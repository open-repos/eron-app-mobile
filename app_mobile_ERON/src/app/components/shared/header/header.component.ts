import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titleHeader: string;
  @Input() detailPage: boolean = false;
  @Input() withQueryParam: boolean = false;
  @Input() pageBack: string;
  @Input() queryParam: number;

  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
     this.queryParam= queryParams.formation
     console.log("IN HEADER"+this.queryParam)
        // do something with the query params
      });
  }

  onMenuClick(){
    console.log("url: "+ this.pageBack + "  params" + this.queryParam )
    // this.router.navigateByUrl(url, {state:{example:value}})
    this.router.navigate([this.pageBack],  { queryParams: { formation: this.queryParam } })
  }

}
