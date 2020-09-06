import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name="Stock Control";
  status:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  clickEvent(){
    this.status=!this.status;
  }
}
