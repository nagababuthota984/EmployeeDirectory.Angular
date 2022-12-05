import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/dataservice';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  public offices = new DataService().offices;
  public departments = new DataService().departments;
  public jobTitles = new DataService().jobTitles;
  constructor() {

  }

  ngOnInit(): void {
  }

}
