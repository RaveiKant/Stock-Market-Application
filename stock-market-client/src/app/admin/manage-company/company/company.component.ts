import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies:any;


  constructor() { }

  ngOnInit(): void {
    this.companies= [ {
      name:"State Bank Of India",
      turnover:23232.2,
      ceo:"Good Ceo",
      directors:"Diro_1 , Diro_2",
      brief:"Good company",
      exchanges:[{
        name:"BSE"
      },
      {
        name:"NSE"
      }]
    },
    {
      name:"State Bank Of India",
      turnover:23232.2,
      ceo:"Good Ceo",
      directors:"Diro1,Diro2",
      brief:"Good company",
      exchanges:[{
        name:"BSE"
      },
      {
        name:"BSE"
      }]
    }];
  }

}
